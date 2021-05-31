(self.webpackChunkfabianafonseca=self.webpackChunkfabianafonseca||[]).push([[90],{2256:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var a=n(2122),o=n(9756),i=(n(7294),n(3905)),r=["components"],s={slug:"k8s-101",title:"Kubernetes 101",author:"Fabiana Fonseca",author_title:"Software Engineer @ VTEX",author_url:"https://github.com/fabianaferreira",author_image_url:"https://avatars.githubusercontent.com/u/19495917?s=400&u=302696fe63b0bceec347a6b90dd42bddcea1cf43&v=4",tags:["introduction","journal"]},l={permalink:"/personal-page/blog/k8s-101",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2021-05-30-k8s101.md",source:"@site/blog/2021-05-30-k8s101.md",title:"Kubernetes 101",description:"Node",date:"2021-05-30T00:00:00.000Z",formattedDate:"May 30, 2021",tags:[{label:"introduction",permalink:"/personal-page/blog/tags/introduction"},{label:"journal",permalink:"/personal-page/blog/tags/journal"}],readingTime:2.15,truncated:!1,nextItem:{title:"A little about myself and this journal",permalink:"/personal-page/blog/introduction"}},u=[{value:"<em>Node</em>",id:"node",children:[]},{value:"Cluster",id:"cluster",children:[]},{value:"Persisted volume",id:"persisted-volume",children:[]},{value:"Containers",id:"containers",children:[]},{value:"<em>Pods</em>",id:"pods",children:[]},{value:"<em>Deployments</em>",id:"deployments",children:[]},{value:"Ingress",id:"ingress",children:[]}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"node"},(0,i.kt)("em",{parentName:"h2"},"Node")),(0,i.kt)("p",null,"When it comes to hardware, a node is the smalled unit in Kubernetes. It represents a single machine in a cluster. We can think of a machine as a set of CPU and RAM resources; in that way, any machine can be replaced by another one in a cluster."),(0,i.kt)("h2",{id:"cluster"},"Cluster"),(0,i.kt)("p",null,"In Kubernetes, multiple nodes can be together, sharing resources to form a powerful machine. When we deploy an application, a cluster is smart to handle distributing work to the individual nodes. In case of adding or removing a node, the cluster will adapt and distribute work as necessary."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In the end, it shouldn't matter to the program or the programmer in which individual machine the application is running.")),(0,i.kt)("h2",{id:"persisted-volume"},"Persisted volume"),(0,i.kt)("p",null,"Since we cannot guarantee in which node the application is running on, we cannot rely on local storage to have any data that need to be persisted; the local storage of each node can be used as a cache. Meanwhile, for instance, the CPU and RAM are at a node level, and persisted volumes are not. Instead, local or cloud drives can be attached to a cluster as a persisted volume."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Persisted volumes provide a file system that can be mounted to the cluster.")),(0,i.kt)("h1",{id:"software"},"Software"),(0,i.kt)("h2",{id:"containers"},"Containers"),(0,i.kt)("p",null,"Programs that are running in Kubernetes are packed into containers. This concept allows programmers to create self-contained Linux execution environments. "),(0,i.kt)("h2",{id:"pods"},(0,i.kt)("em",{parentName:"h2"},"Pods")),(0,i.kt)("p",null,"Kubernetes does not run on containers directly; it wraps one or more containers into a higher-level structure called a pod. All the containers that are in the same pod share resources and local networks. Pods are used as the unit of replication in Kubernetes."),(0,i.kt)("h2",{id:"deployments"},(0,i.kt)("em",{parentName:"h2"},"Deployments")),(0,i.kt)("p",null,"Despite having pods as the basic computation unit in Kubernetes, they're usually not used to be launched at a cluster directly; to do that, we use a higher-level of abstraction, called deployment, in which the main purpose is to declare how many replicas of a pod should be running. When a deployment is made at a cluster, it will automatically spin up the requested number of pods and watch them; for instance, if a pod dies, the deployment will automatically recreate it. "),(0,i.kt)("h2",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,"That's how we deal with external traffic to a specific application. By default, when using Kubernetes, it automatically provides isolation between pods and outside the world. To establish communication with a service that is running in a pod, we need to open a channel for communication - we call it ingress."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note for myself"),": next post will go through daemonsets and side cars.")))}c.isMDXComponent=!0}}]);