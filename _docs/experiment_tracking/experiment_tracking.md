---
title: Experiment Tracking
order_n: 4
has_children: true
permalink: /docs/experiment-tracking
---

Experiment tracking for machine learning involves logging of metrics and artificacts associated with different training runs.  This is essential for effective mlops as it allows you to track your performance metrics and promotes reproduceability in a transparent, reuseable way.  

There are several experiment tracking systems available as third-party solutions that GitHub Actions can integrate with.  For example, the below example illustrates how results of a training run can be fetched from [Weights and Biases](https://www.wandb.com/) and dropped into a pull request:

<img src='https://raw.githubusercontent.com/machine-learning-apps/actions-ml-cicd/master/images/mlops.png'></img>

