%title: Non-Comprehensive Guide to writing Dockerfiles
%author: Michał Knapik
%date: 2021-04-19

--------------------------------------------------
-> # 00. Docker Layers & Image Size <-

--------------------------------------------------
-> # 01. Five Stages <-

--------------------------------------------------
-> # 02. ENTRYPOINT vs CMD <-

--------------------------------------------------
-> # 03. Alpine Linux - Small but Mighty <-

--------------------------------------------------
-> # 04. Dockerfile linter <-

[Hadolint Homepage](https://github.com/hadolint/hadolint)
[List of supported rules](https://github.com/hadolint/hadolint#rules)

--------------------------------------------------
-> # 05. pid1 and hanging processes <-

[Docker and the PID 1 zombie reaping problem](https://blog.phusion.nl/2015/01/20/docker-and-the-pid-1-zombie-reaping-problem/)
[dumb-init and tini](https://gist.github.com/StevenACoffman/41fee08e8782b411a4a26b9700ad7af5#dumb-init-or-tini)

--------------------------------------------------
-> # 06. Phantom Volumes <-

[What is the purpose of VOLUME in Dockerfile](https://stackoverflow.com/a/34810191)
[Avoid using VOLUME?](https://stackoverflow.com/a/62068396)

--------------------------------------------------
-> # 07. Single Dockerfile for Development & Production <-
