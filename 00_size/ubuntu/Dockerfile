FROM ubuntu:20.04 AS a

RUN apt-get update
RUN apt-get install -y --no-install-recommends htop




FROM ubuntu:20.04 AS b

RUN apt-get update
RUN apt-get install -y --no-install-recommends htop
RUN rm -rf /var/lib/apt/lists/*




FROM ubuntu:20.04 AS c

RUN apt-get update && \
    apt-get install -y --no-install-recommends htop && \
    apt-get clean -y && apt-get autoclean




FROM ubuntu:20.04 AS d

RUN apt-get update && \
    apt-get install -y --no-install-recommends htop && \
    rm -rf /var/lib/apt/lists/*
