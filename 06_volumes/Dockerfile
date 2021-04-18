FROM alpine:3

RUN mkdir -p /mnt/dir1 /mnt/dir2

VOLUME /mnt/dir1

RUN touch /mnt/dir1/keep && test -e /mnt/dir1/keep
RUN ! test -e /mnt/dir1/keep

RUN touch /mnt/dir2/keep && test -e /mnt/dir2/keep
RUN test -e /mnt/dir2/keep

VOLUME /mnt/dir2

CMD find /mnt
