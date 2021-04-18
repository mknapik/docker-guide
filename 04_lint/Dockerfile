FROM alpine

RUN apk --no-cache add dumb-init

USER root

RUN cd /home && ls -lah

FROM ubuntu

RUN apt-get update && apt-get install -y curl
