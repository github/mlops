---
title: Argo
order_n: 3
permalink: /docs/Argo
parent: Kubernetes
---

## Deploy Machine Learning Workflows With Argo

What are Argo Workflows?  

From [the docs](https://argoproj.github.io/docs/argo/readme.html):

- Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. Argo Workflows is implemented as a Kubernetes CRD (Custom Resource Definition).

- Define workflows where each step in the workflow is a container.
Model multi-step workflows as a sequence of tasks or capture the dependencies between tasks using a graph (DAG).
- Easily run compute intensive jobs for machine learning or data processing in a fraction of the time using Argo Workflows on Kubernetes.
- Run CI/CD pipelines natively on Kubernetes without configuring complex software development products.

## The [Argo GitHub Action](https://github.com/machine-learning-apps/actions-argo)

See [this repo](https://github.com/machine-learning-apps/actions-argo) for full context.

### A Hello-World Workflow

```yaml
name: ML Workflows Via Actions
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:

    # This copies the files in this repo, particulary the yaml workflow spec needed for Argo.
    - name: Step One - checkout files in repo
      uses: actions/checkout@master

    # Get credentials (the kubeconfig file) the k8 cluster. Copies kubeconfig into /github/workspace/.kube/config
    - name: Step Two - Get kubeconfig file from GKE
      uses: machine-learning-apps/gke-kubeconfig@master
      with:
        application_credentials: ${{ secrets.APPLICATION_CREDENTIALS }}
        project_id: ${{ secrets.PROJECT_ID }}
        location_zone: ${{ secrets.LOCATION_ZONE }}
        cluster_name: ${{ secrets.CLUSTER_NAME }}

      ###################################################
      # This is the action that submits the Argo Workflow 
    - name: Step Three - Submit Argo Workflow from the examples/ folder in this repo
      id: argo
      uses: machine-learning-apps/actions-argo@master
      with:
        argo_url: ${{ secrets.ARGO_URL }}
        # below is a reference to a YAML file in this repo that defines the workflow.
        workflow_yaml_path: "examples/coinflip.yaml"
        parameter_file_path: "examples/arguments-parameters.yaml"
      env:
        # KUBECONFIG tells kubectl where it can find your authentication information.  A config file was saved to this path in Step Two.
        KUBECONFIG: '/github/workspace/.kube/config'

      # This step displays the Argo URL, and illustrates how you can use the output of the previous Action.
    - name: test argo outputs
      run: echo "Argo URL $WORKFLOW_URL"
      env:
        WORKFLOW_URL: ${{ steps.argo.outputs.WORKFLOW_URL }}
```

## Running Argo On Self Hosted Runners

You can skip the `.kubeconfig` if your Actions runner is running on a self-hosted runner on your Kubernetes cluster that has access to Argo.  See [these docs](http://mlops-github.com/docs/k8s-self-hosted-runner) for further instructions.
