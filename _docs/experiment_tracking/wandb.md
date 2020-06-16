---
title: Weights & Biases
order_n: 3
permalink: /docs/wandb
parent: Experiment Tracking
---

## Fetch Runs From Weights & Biases

[Weights and Biases](https://www.wandb.com/) is a system for experiment tracking, model optimization, and dataset versioning.

The [Weights and Biases (W&B) Action](https://github.com/machine-learning-apps/wandb-action) can help you fetch runs from W&B for reporting in your GitHub workflows.  

**This Action saves a csv file called `wandb_report.csv` into the path specified by the [default environment variable](https://help.github.com/en/articles/virtual-environments-for-github-actions#environment-variables) `GITHUB_WORKSPACE` set for you in GitHub Actions**,  which allows this data to be accessed by subsequent Actions.  Information in this CSV can be displayed in a variety of ways, such as a markdown formatted comment in a pull request or via the [GitHub Checks](https://developer.github.com/v3/checks/) API.

This csv file always has the following fields:
- `run.url`: the url for the run in the W&B api.
- `run.name`: the name of the run. This is automatically set by wandb if not specified by the user.
- `run.tags`: a list with all of the tags assigned to the run.
- `run.id`: the id associated with the run.  This corresponds to the input `RUN_ID`
- `run.entity`: this name of the entity that contains the project the run can be found in.  This is similar to an org in GitHub.
- `run.project`: the name of the project that contains the run.  This is simlar to a repo in GitHub.
- `github_sha`: the config variable `github_sha`.
- `__eval.category`: this field will contain either the value `candiate` or `baseline`, depending on how the run was queried.

In addition to the above fields the user can specify additional fields.

Below is an example of how this Action can be used to fetch model runs:

{% raw %}
```yaml
name: Get WandB Runs
on: [issue_comment]

jobs:
  get-runs:
    if: (github.event.issue.pull_request != null) &&  contains(github.event.comment.body, '/get-runs')
    runs-on: ubuntu-latest

    steps:
  - name: Get the latest SHA for the PR that was commented on
    id: chatops
    uses: machine-learning-apps/actions-chatops@master
    with:
      TRIGGER_PHRASE: "/get-runs"
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      
  - name: Get Runs Using SHA
    uses: machine-learning-apps/wandb-action@master
    with:
      PROJECT_NAME: ${{ format('{0}/{1}', secrets.WANDB_ENTITY, secrets.WANDB_PROJECT) }}
      FILTER_GITHUB_SHA: ${{ steps.chatops.outputs.SHA }}
      BASELINE_TAGS: "['baseline', 'reference']"
      DISPLAY_METRICS: "['accuracy', 'loss', 'best_val_acc', 'best_val_loss', '_runtime']"
      WANDB_API_KEY: ${{ secrets.WANDB_API_KEY }}
      DEBUG: 'true'
```
{% endraw %}

See [this project](https://github.com/machine-learning-apps/wandb-action) for more information.
