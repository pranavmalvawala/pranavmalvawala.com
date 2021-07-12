---
layout: post
title: Run a Script Only on First Start of a Container
tags: ['docker', 'containers']
image: img/run-a-script-only-on-first-start.jpg
imageCredit: Photo by [Cupcake Media](https://unsplash.com/@thecupcakemedia)
date: 2021-07-12
draft: false
---

So before we dive into it, I want to point out the case where you don't need this,
- Setting up Env variables
- Installing dependencies
- Configuring Git (in case you're developing a container)

You get the idea what I mean right? Those type of commands should be written in Dockerfile itself.

>The entrypoint command (cmd/entrypoint) is supposed to say how to run your app and not, how to configure the app. 

Now if you are still reading I guess you sure as hell need this, so let me tell you there is no inbuilt command or some direct way to achieve this, all I've done here is create a workaround.

## Step 1: create entrypoint.sh file
There is no restriction on file name so feel free to pick any. Copy the following contents to this newly created file.

```bash
#!/bin/sh
# This script checks if the container is started for the first time.

CONTAINER_FIRST_STARTUP="CONTAINER_FIRST_STARTUP"
if [ ! -e /$CONTAINER_FIRST_STARTUP ]; then
    touch /$CONTAINER_FIRST_STARTUP
    # place your script that you only want to run on first startup.
    npm run initdb && npm run dev
else
    # script that should run the rest of the times (instances where you 
    # stop/restart containers).
    npm run dev
fi
```
From the comments in the code it must be clear, script that you want to run only on the first startup would go in `if` block and for the rest of the times it'll be `else` block. 

I've written `npm run dev` script as an example here just so that you can get the idea how it'd look, feel free to update it according to your needs.

## Step 2: Update Dockerfile

```docker
FROM node:12-alpine

WORKDIR /app

COPY . .

+ COPY entrypoint.sh /

RUN npm install

- CMD npm run initdb && npm run dev
+ ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 8300
```

From the code you can spot that I made 2 changes,
1. Adding entrypoint.sh to the root directory in `COPY entrypoint.sh /`
2. Replacing my `CMD npm run initdb && npm run dev` script with `ENTRYPOINT ["/entrypoint.sh"]`. What I did here is instead of running both parts of script everytime, I'm gonna let our `entrypoint.sh` file decide which part to run based on containers startup.

## Conclusion

Most of the project setup commands should lie in the Dockerfile itself so that those steps can be run while building the image and in turn simplifying and speeding up the container startup.

In case you are sure, you have to run a setup script on the first startup then create a shell file and let it decide which script to run.
