# Docker
Docker is a contenarization platform for developing, packing, shipping, and runing applications.
<br>
It provieds the ability to run an application in isolated environment called containers.
<br>
Make development and deployment efficient.



### Why we need docker
**Problem** : You developed an application, and given it to the tester to test. It was working fine on your machine but throw error / not working on tester machine. There could be several reason such as OS, different versions of libraries/dependencies, external dependenciees. But it was working fine on your machine.

**Solution** : Docker 
<br>
Developer make package of all the neccessary things to run the application (dependencies, services, configuration files, libraries, etc) using docker.



### Container
A way to package an application with all neccessary dependencies and configuration.
<br>
It can be easily shared.
<br>
Makes Deployment and Development efficient.



### Architecture of Docker
![alt text](Assets/image.png)

#### Use Case 1 : Multiple Apps
Multiple Containers can also be run, in isolated environment. Means app1 don't know any thing about app2.
![alt text](Assets/image-1.png)

#### Use Case 2 : Same app of different version
**Approach 1**: Use two different virtual machine
<br>

**Approach 2**: Using Docker

![alt text](Assets/image-2.png)
<br>
App1 - using Node(13 version)
<br>
App2 - using Node(14 version)


#### Docker Vs Virtual Machines
| Docker Containers | VMs |
|---|---|
| Low impact on OS, very fast, low disk space usage | High impact on OS, slower, high disk space usage |
| Sharing, re-building and distribution is easy | Sharing, re-building and is challenging |
| Encapsulate apps instead of whole machine | Encapsulate whole machine |


### Flow and Components of Docker
![alt text](Assets/image-3.png)


#### Dockerfile
 A Dockerfile is a text file containing instructions that tells the docker how to build a Docker image.


#### Docker Image
A Docker image is a read-only package containing everything needed to create and run a container.


#### Docker Registry
A Docker Registry is a central repository for storing and distributing Docker Images.
<br>
Developer (Dockerfile) -> Image -> Docker Hub OR Private Repository -> Tester


#### Docker Hub
Docker Hub is a cloud-based registry where Docker images are stored, shared, and downloaded.



### Creating Docker File
- First we need the base : in our case its (node.js) `FROM <base>:<baseVersion>(optional)`
- Create Working directory in Container (currently empty container) `WORKDIR /myapp`
- Copy the file to the container WorkDir to use `COPY <Source : File/Folders> <Destination>
- Run the commands `RUN <commands>`
    - RUN commands will be used while creating the image (docker image)
- Expose is used to specify the port need to run the iamge on
- CMD : array of command word, to run the command after the image is start (running)
    - `CMD ["command:part1", "command:part2"]`
```DockerFile
FROM node:20
WORKDIR /myapp
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
```

**Create and Docker Image**
<br>
```bash
# Create Image
docker build /path/to/Dockerfile

# Run Image
docker run <Image-ID>
```

**Need to change something to use the vite on local from docker container**
```json
// In package.json
{
    ...,
    "scripts": {
    "dev": "vite --host"
    }
}
```

**Note**: When you are running the application on browser on local machine then you can easily access the project with its port. But when application is running in container then its isolated environment, to access the project on browser you need port forwarding.


### Running Docker in Detach Mode
**Detach Mode** : When we run image as container on terminal, our terminal got stuck and we are not able to perform any operation on it and need to user another terminal or stop it. That is running in foreground.

detach mode docker run : `docker run -d -p 3000:3000 testapp:v3`


### Image management
- We can give tag to our image to use in place of <image-id>, using `-t <name:version>`
- We can remoe image using `rmi <image-id>`
- IF we create image of same content with different tags. Image ID is still same untill content is different


### Multiple Version Image Running
- Version 1 : `docker run -d --rm -p 3001:3000 webapp:v1`
- Version 2 : `docker run -d --rm -p 3002:3000 webapp:v2`


### Pre-Defined Docker Images



## Commandsgit git
1) Build Image : `docker build /path/to/Dockerfile` <b>OR</b> `docker build -f /path/to/Dockerfile /path/to/`
2) Show Images : `docker image ls`
3) Show Running Containers (Process State) : `docker ps`
4) Stop Container : `docker stop <container-name-ps>`
5) Build Image with tag : `docker build -t <tagname> /path/to/Dockerfile`docdoododod
6) Start Container (Run Docker Image) : `docker run <image-id>` or `docker run <tag-name>`
7) Start Container with Port Forwarding : `docker run -p <local-port>:<container-port> <image-id>`
8) Run in Detach Mode : `docker run -d <image-id>` or `docker run -d -p <local-port>:<container-port> <image-id>`
9) Docker Image Running History : `docker ps -a`
10) Remove Image history : `docker rm <image-name> <image-name2>` or `docker rm <container-id>` 
11) Remove Image History force : `docker rm -f <container-id1> <container-id2>`
12) List Container ID in history  : `docker ps -aq`
13) Remove all Image using nested docker command : `docker rm -f $(docker ps -aq)`
14) Run Image and delete from History after stop : `docker run --rm <image-id>` or `docker run -d --rm <image-id>` or `docker run -d --rm -p <local-port>:<container-port> <image-id>`
15) Custom Container Name (before port) : `docker run -d --rm --name "<customName>" -p 3002:5173 <repository:tag>`
16) Image History : `docker images -a`
17) Image History (only image-id) : `docker images -aq`
19) Remove Image (multiple) : `docker rmi <image-id1> <image-id2> <repository:tag1>` <br>
**note** : `rm` to remove container <b>AND</b> `rmi` to remove image
