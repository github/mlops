---
title: repo2docker
parent: Jupyter
permalink: /docs/repo2docker
---

## The [repo2docker Action](https://github.com/machine-learning-apps/repo2docker-action) 

[repo2docker](https://repo2docker.readthedocs.io/) is a project that will automatically create a docker image of your GitHub repository based on configuration files found in the repository, with additional Jupyter or RStudio support (depending upon the configuration files found).  

This is extremely useful for serving Jupyter notebooks automatically from GitHub repos.  

[The repo2docker action](https://github.com/machine-learning-apps/repo2docker-action) packages this functionality in an easy-to-use interface that can be triggered in your GitHub workflows. For example, you can build a Jupyter-enabled Docker image of your repository like so:

```yaml
name: Build Notebook Container
on: [push] # You may want to trigger this Action on other things than a push.
jobs:
  build:
    runs-on: ubuntu-latest
    steps:

    - name: checkout files in repo
      uses: actions/checkout@master

    - name: update jupyter dependencies with repo2docker
      uses: machine-learning-apps/repo2docker-action@master
      with:
        DOCKER_USERNAME: ${{ secrets.DOCKER_USERNAME }}
        DOCKER_PASSWORD: ${{ secrets.DOCKER_PASSWORD }}
```

Additionally, this action allows you to pre-cache images for your own [BinderHub cluster](https://binderhub.readthedocs.io/en/latest/zero-to-binderhub/setup-binderhub.html), or for [mybinder.org](https://mybinder.org/).