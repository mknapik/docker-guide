FROM alpine:3 AS a

RUN apk add --no-cache build-base curl

RUN echo "build step"

RUN apk del --no-cache build-base curl




FROM alpine:3 AS b

RUN apk add --no-cache --virtual deps build-base curl && \
    echo "build step" && \
    apk del --no-cache deps
