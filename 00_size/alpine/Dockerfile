FROM alpine:3 AS big

RUN apk add htop




FROM alpine:3 AS same-as-big

RUN apk add htop
RUN rm -rf /var/cache/apk




FROM alpine:3 AS small

RUN apk add htop && \
  rm -rf /var/cache/apk




FROM alpine:3 AS same-as-small

RUN apk add --no-cache htop
