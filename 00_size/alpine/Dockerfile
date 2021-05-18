FROM alpine:3 AS a

RUN apk add htop




FROM alpine:3 AS b

RUN apk add htop
RUN rm -rf /var/cache/apk




FROM alpine:3 AS c

RUN apk add htop && \
  rm -rf /var/cache/apk




FROM alpine:3 AS d

RUN apk add --no-cache htop
