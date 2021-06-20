---
slug: k8s-labels-and-selectors
title: Kubernetes Labels and Selectors
author: Fabiana Fonseca
author_title: Software Engineer @ VTEX
author_url: https://github.com/fabianaferreira
author_image_url: https://avatars.githubusercontent.com/u/19495917?s=400&u=302696fe63b0bceec347a6b90dd42bddcea1cf43&v=4
tags: [k8s]
---

Kubernetes uses labels and selectors to get all the different APIs in a single abstraction. For instance, how does a deployment know that a pod belongs to him? Because there is a label saying so. 

Imagine that I start a pod, and it has a label to identify it. Now, let’s say that I want to scale it, so I create a replica set with the same label to have three replicas. What is going to happen now? It will provide only two replicas because there is already a pod with the same label as the one we’ve defined in the replica set. Here the name has not that much use; it’s useful for users to identify them.

Services also use labels and, by endpoint controllers, divide the requests equally, routing client traffic among the pods - it works like a load balancer. For instance, imagine that I changed the version in a replica set, but keeping the labels, the traffic will be divided among all the pods, from the two versions of replica sets, working like an A/B test.

Deployments have a label controller and use it to control the resources. The label controller creates a hash (?), which means that, in theory, you won’t have label conflicts. If you have any pod in the node with the same label that you define, it won’t be used because the controller label creates a hash and uses it as a label.