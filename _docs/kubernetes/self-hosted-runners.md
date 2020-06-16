---
title: Self-Hosted K8s Actions Runner
order_n: 3
permalink: /docs/k8s-self-hosted-runner
parent: Kubernetes
---



## Create A Self-Hosted Actions Runner On Your Kubernetes Cluster With 3 Commands

## Motivation

[GitHub Actions](https://github.com/features/actions) allow you to use [self hosted runners](https://help.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners).  From the docs:

> Self-hosted runners offer more control of hardware, operating system, and software tools than GitHub-hosted runners provide. With self-hosted runners, you can choose to create a custom hardware configuration with more processing power or memory to run larger jobs, install software available on your local network, and choose an operating system not offered by GitHub-hosted runners. Self-hosted runners can be physical, virtual, in a container, on-premises, or in a cloud.

[This repository](https://github.com/machine-learning-apps/self-hosted-k8s-runner) shows **how to run a self hosted runner in a Kubernetes cluster**, which is useful if your Actions runner needs to create resources or update deployments. 


