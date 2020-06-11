The problem we are trying to solve is we want to be able to curate all of the below assets in a central place that is easy for people to browse and discover.  We want to host this on GitHub Pages (we can figure out how to deploy it if you are not familiar with GitHub Pages)  


# Categories of Assets We have created (a seperate page for each)

1. Blog Posts
    - [Providing Data Scientists With New Superpowers](https://fastpages.fast.ai/actions/markdown/2020/03/06/fastpages-actions.html)
    - [Microsoft Official Blog Post](https://techcommunity.microsoft.com/t5/azure-ai/using-github-actions-amp-azure-machine-learning-for-mlops/ba-p/1419027)
    - Pending - GitHub Official Blog Post - TBD

2. GitHub Actions
    - [Action: Submit Argo Workflows on GKE](https://github.com/marketplace/actions/submit-argo-workflows-to-gke) - leverages the gcloud cli to authenticate to your GKE cluster and submit argo workflows.
   - [Action: Submit Argo Workflows on K8s (Cloud agnostic)](https://github.com/marketplace/actions/submit-argo-workflows-from-github) - requires that you supply a kubeconfig file to authenticate to your k8 cluster.
    - [Action: Fetch runs from Weights & Biases](https://github.com/marketplace/actions/get-runs-from-weights-biases) - W&B is an experiment tracking and logging system for machine learning, and is free for open source projects.
    - [Action: To compile, deploy and run Kubeflow pipeline](https://github.com/marketplace/actions/kubeflow-compile-deploy-and-run). This action allows you to instantiate [Kubeflow pipelines](https://www.kubeflow.org/docs/pipelines/overview/pipelines-overview/) from GitHub directly.
    - [Action: Dockerize GitHub repositories automatically as a Jupyter Server](https://github.com/machine-learning-apps/repo2docker-action)
    -  [aml-workspace](https://github.com/marketplace/actions/azure-machine-learning-workspace) - creates an Azure Machine Learning workspace.
     - [aml-compute](https://github.com/marketplace/actions/azure-machine-learning-compute-action) - Manage Azure Compute Resources.
     - [aml-run](https://github.com/marketplace/actions/azure-machine-learning-run-action) - Run a training job, experiment or pipeline on Azure.
     - [aml-registermodel](https://github.com/marketplace/actions/azure-machine-learning-register-model-action) - Register a model on Azure Machine Learning.
     - [aml-deploy](https://github.com/marketplace/actions/azure-machine-learning-deploy-action) - Deploy a model to AKS or ACI.

3. Repository Templates
    - [fastpages](https://github.com/fastai/fastpages)
    - [Azure ML + Actions](https://github.com/machine-learning-apps/ml-template-azure)

4. Live Demos / Tutorials
   - [GitHub Universe Talk - MLOps](https://www.youtube.com/watch?v=Ll50l3fsoYs)
   - [Live Demo Actions & ML Workflows](https://www.youtube.com/watch?v=S-kn4mmlxFU)
    - [Azure ML + Actions Webinar](https://www.youtube.com/watch?v=V8MRYtNeqUc)

5. Documentation
   TBD we have not made this yet, but we want to create documentation as well, and want the documentation theme to be coherent with the rest of the website. 
   When I say documentation.  Documentation site should look like [this page](https://primer.style/css/tools/prototyping)
   
6. Team Page
    We want to list all the members of our team like [this page](https://primer.style/about/#team/)
    You can use our GitHub profiles to get this started, the team is:
    - [@awmatheson](https://github.com/awmatheson)
    - [@hamelsmu](https://github.com/hamelsmu)
    - [@inc0](https://github.com/inc0)

# Asthetics / Creative Inspiration

- We like the asthetics of [primer.style](https://primer.style/) something along those lines as a front page with cards as links to various sections
    - primer.style is also a design system like Jekyll you can use CSS or Gatsby if you are so inclined to use these assets.
- We also like the look and feel of this page https://github.com/features/actions
- Some assets you can try to use (but it is not necessary)
    - [Primer CSS](https://primer.style/css/)
    - [GitHub Icons](https://ghicons.github.com/)
    
    
# Requirements
  - Preferred static site generator is either [Jekyll](https://jekyllrb.com/), [Gatsby](https://www.gatsbyjs.org/), or [Eleventy](https://github.com/11ty/eleventy)
  - We want to make it such that we can update the content any of the pages that have a list of resources with CSV or JSON files  ourselves.  This will make it easy for us to maintain. You can make this happen for example with [Jekyll Datafiles](https://jekyllrb.com/docs/datafiles/).  For anything that is a list, we want an image thumbnail that we can add a reference to in the csv or json and that will get rendered for us automatically to make things look nice.
  - All youtube videos we supply via a csv/json list for the "Live Demos / Tutorials" page should appear as embedded in the site. 
  - For other pages we want to be able to update those with markdown.
  - **All work on this project must be done in this GitHub repo**
  
  
  ----
  
  # Phase Two Requirements
  
  **Please Read Carefully**
  
  - Enable Search on every page, similar to [Just the docs](https://github.com/pmarsceill/just-the-docs)
        - The search is fast because it is happening on the client side (this is the only option you have anyways because of static site)
        - As you search, keywords are highlighted
        - [lunr.js](https://lunrjs.com/) might be helpful.  I have used this project for [fastpages](https://github.com/fastai/fastpages/blob/master/_pages/search.html)
        
  - Implement **ALL** the features of [Just The Docs navigation](https://pmarsceill.github.io/just-the-docs/docs/navigation-structure/)
        - Ordering pages
        - Exluding pages
        - Pages with children
            - child pages
            - Auto generating Table of Contents
            - children with children
        - Auxilary Navigation
        - In page navigation with Table of Contents
