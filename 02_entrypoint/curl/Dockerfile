FROM alpine:3 AS noentrypoint

RUN apk add --no-cache curl




FROM noentrypoint

ENTRYPOINT ["curl"]
