---
title: papermill
parent: Jupyter
order_n: 5
permalink: /docs/papermill
---


## Refresh Jupyter Notebooks With [Papermill](https://github.com/nteract/papermill)

[papermill](https://github.com/nteract/papermill) is a great project for running notebooks programatically.  You can pass parameters to notebooks, use different kernels, etc.  

### Example: refresh notebooks every 6 hours

Put a shell script at the location`_action_files/run_notebooks.sh` with the following contents:

```sh

#!/bin/sh
set -e
cd $(dirname "$0")/..
cd _notebooks/

ERRORS=""

# Loop through all notebooks and run them with papermill
for file in *.ipynb
do
    if papermill --kernel python3 "${file}" "${file}"; then
        echo "Sucessfully refreshed ${file}\n\n\n\n"
    else
        echo "ERROR Refreshing ${file}"
        ERRORS="${ERRORS}, ${file}"
    fi
done

# Emit Errors If Exists So Downstream Task Can Open An Issue
if [ -z "$ERRORS" ]
then
    echo "::set-output name=error_bool::false"
else
    echo "These files failed to update properly: ${ERRORS}"
    echo "::set-output name=error_bool::true"
    echo "::set-output name=error_str::${ERRORS}"
fi
```

In the location `.github/workflows/update-nb.yaml` define an Actions workflow with the following contents

```yaml
name: Update Notebooks And Refresh Page
on:
  schedule:
    - cron:  '0 */6 * * *'

jobs:
  update-notebooks:
    runs-on: ubuntu-latest
    steps:
  

    - name: Copy Repository Contents
      uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v1
      with:
        python-version: 3.6

    - name: install dependencies
      run: |
        pip3 install -r ./_notebooks/requirements.txt
        python3 -m ipykernel install --user --name python3
        sudo chmod -R 777 .

    - name: update notebooks
      id: update_nb
      run: |
        ./_action_files/run_notebooks.sh
        
    - name: Create an issue if notebook update failure occurs
      if: steps.update_nb.outputs.error_bool == 'true'
      uses: actions/github-script@0.6.0
      with:
        github-token: ${{secrets.GITHUB_TOKEN}}
        script: |
          var err = process.env.ERROR_STRING;
          var run_id = process.env.RUN_ID;
          github.issues.create({
            owner: context.repo.owner,
            repo: context.repo.repo,
            title: "Error updating notebooks",
            body: `These are the notebooks that failed to update properly: \n${err}\n\n See run [${run_id}](https://github.com/github/covid19-dashboard/actions/runs/${run_id}) for more details.`
          })
      env:
        ERROR_STRING: ${{ steps.update_nb.outputs.error_str }}
        RUN_ID: ${{ github.run_id	 }}

```

This example is based on [covid19dashboards.com](https://covid19dashboards.com/), which uses [fastpages](https://github.com/fastai/fastpages) and papermill to refresh notebooks and serve them as dasbhoards.  You can see browse the [workflow files](https://github.com/github/covid19-dashboard/tree/master/.github/workflows) of this project to see how papermill is used.
