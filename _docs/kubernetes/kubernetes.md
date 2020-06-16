---
title: Kubernetes
order_n: 3
has_children: true
permalink: /docs/k8s
---

Resources for MLOps on Kubernetes with GitHub.  This is useful if you need to access broader infrastructure resources in your machine learning workflows.  For example:
   - Deploying and serving models, including a [service mesh](https://en.wikipedia.org/wiki/Service_mesh)
   - Deploying and serving arbitrary applications, such as Jupyter Notebooks or documentation sites.
   - Accessing other resources that are visible from your internal k8s cluster, such as:
      - Databases, i.e. Presto, Hive
      - Storage, i.e. HDFS
      - Distributed data processing, such as Dask or Spark
      - Specialized computing such as GPUs.
      - Integration with experiment tracking systems.
   - Access to [secrets](https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure/).
   - Native resource management and kubernetes for scalability and resiliance.
   - Interoperability with machine learning or data pipelines, such as [Argo](https://argoproj.github.io/), [MLFlow](https://mlflow.org/), [Prefect](https://www.prefect.io/), etc.
   - ... and much more.
