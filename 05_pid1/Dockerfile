FROM alpine:3 AS hangs

RUN apk --no-cache add dumb-init tini

CMD ["tail", "-f", "/dev/null"]




FROM hangs AS dumb-init

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["tail", "-f", "/dev/null"]


FROM hangs AS tini

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["tail", "-f", "/dev/null"]
