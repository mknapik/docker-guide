FROM alpine:3 AS novolumes

RUN apk add --no-cache bash

RUN bash -c 'mkdir -p /code/{a,b,c,d} && \
  touch /code/{a,b,c,d}/{1,2,3} && \
  chown -R 1000 /code/{a,b}'

FROM novolumes

RUN bash -c 'mkdir -p /mnt/{dir1,dir2}'

RUN touch /mnt/dir1/keep0

VOLUME /mnt/dir1

RUN touch /mnt/dir1/keep && test -e /mnt/dir1/keep
RUN ! test -e /mnt/dir1/keep

RUN touch /mnt/dir2/keep && test -e /mnt/dir2/keep
RUN test -e /mnt/dir2/keep

VOLUME /mnt/dir2

CMD find /mnt
