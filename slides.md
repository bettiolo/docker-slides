## Pet vs Cattle

In the old times, we would created servers with names like Paperino, SuperMario or Marley. Each server was configured by hand and all were different, each one was an unique snowflake. 

When a server suddenly falls ill, we do everything we can to bring it back to health. We treat it like our own cute pet.














Instead of threating machines like pets, you should threat them like cattle. When they get sick, you shoot 'em in the head and replace 'em with a new one.

Shipping code is hard, but it shouldn't be. Today the software stack is complex and diverse. We have loosely coupled components running on distributed (micro)services. The software is built with different language, frameworks and dependencies. It must run on various kind of hardware: your laptop as well as colleagues, tester's machines, build agents, your test cluster, your public cloud cluster.

We need a standard way to pack our code and distribute it to all the environments. Welcome to containers!






## What is Docker?

> Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications.
>
> With Docker, developers can build any app in any language using any toolchain. “Dockerized” apps are completely portable and can run anywhere - colleagues’ OS X and Windows laptops, QA servers running in the cloud, and production data center VMs. (docker.com)














On docker, apps run in separate containers, they cannot interfer one with each other. We don't have to worry about installed libraries and conflicting dependencies. If different releases of the application require different versions of a library, the specific version must be installed in the specific container.
 


















## LXC Container

> It is an operating system-level virtualisation method for running multiple isolated Linux systems (containers) on a single host. (wikipedia)

From inside it looks like a vm, from outside it looks like a process.

















Like a virtual machine, containers do process segregation and virtual networking minus the overhead of an hypervisor and an emulated hardware, bios and operating system. 

You don't have to worry about disk, ram and hardware allocation as the apps will run on the same disk, memory and network. They will share the resources so the overhead is very little and the boot time is very fast.

















## Virtual Machines

> Each virtualized application includes not only the application - which may be only 10s of MB - and the necessary binaries and libraries, but also an entire guest operating system - which may weigh 10s of GB. (docker.com)















    App A     | App B
    Bins/Libs | Bins/Libs    App A     | App B
    Guest OS  | Guest OS     Bins/Libs | Bins/Libs
    --------------------- vs ---------------------
          Hypervisor             Docker engine
           Host OS                  Host OS
           server                   Server










## Docker 
  
A Docker container includes just the application and its dependencies. It runs as an isolated process in userspace on the host operating system, sharing the kernel with other containers. It enjoys the resource isolation and allocation benefits of VMs but is much more portable and efficient.















## Docker Images and Docker Hub

Docker Hub is a repository of Docker Images that you can use as dependencies for your apps. They vary in complexity from a minimal OS build to a complex set of programs.

A Docker Image is an immutable snapshot of a container, all the changes you make to a base image will be persisted in a spearate container layered on top of it. You can commit those changes and create your own images.



















## Running a container

_demo_

```
docker run -i --rm -t centos /bin/bash
cat /etc/centos-release

docker run -i --rm -t base/archlinux /bin/bash
pacman -S lsb-release
lsb_release -a
```

Starts a process with its own file system, its own networking, and its own isolated process tree. The environment will be based on the image specified.










 
## Dockerfile

_Demo_

```
docker build -t node-simple .
docker images
docker run -t -p 49100:3000 --name node-simple-1 -d node-simple
docker ps
boot2docker ip (ports [49000..49900])
docker attach node-simple-1
docker logs node-simple-1
docker stop node-simple-1
docker start node-simple-1
docker rm node-simple-1
docker rmi node-simple
```
 





## Dockerfile build caching

It will only execute steps that have changed compared to the previous build.

_Demo_
















 
## Fig

> Fast, isolated development environments using Docker (fig.sh)

Allows you to automagically spin up a set of dependent docker containers.

`fig.yml`: Definition of your app's dependencies
`fig up`: Build, (re)create, start and attach to containers for a service.

_demo_
















## Networking
 
    Host -> vRouter  -|-> container1:vNetwork1
     
                     -|-> container2:vNetwork2
                          container3:vNetwork2 
                          		--net=container:container2
                    
                     ---> container4:hostNetwork 
                    			--net=host
                         
                         container5:noNetwork 
                         		--net=none










## Questions ?




























   		
## Thank you :)


********** **                         **            
/////**/// /**                        /**            
    /**    /**       ******   ******* /**  **  ******
    /**    /******  //////** //**///**/** **  **//// 
    /**    /**///**  *******  /**  /**/****  //***** 
    /**    /**  /** **////**  /**  /**/**/**  /////**
    /**    /**  /**//******** ***  /**/**//** ****** 
    //     //   //  //////// ///   // //  // //////

                                  marco@bettiolo.it





