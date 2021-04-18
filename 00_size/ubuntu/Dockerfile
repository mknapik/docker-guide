FROM ubuntu:20.04 AS big

RUN apt-get update
RUN apt-get install -y --no-install-recommends htop




FROM ubuntu:20.04 AS same

RUN apt-get update
RUN apt-get install -y --no-install-recommends htop
RUN rm -rf /var/lib/apt/lists/*




FROM ubuntu:20.04 AS not-quite

RUN apt-get update && \
    apt-get install -y --no-install-recommends htop && \
    apt-get clean -y && apt-get autoclean




FROM ubuntu:20.04 AS small

RUN apt-get update && \
    apt-get install -y --no-install-recommends htop && \
    rm -rf /var/lib/apt/lists/*
