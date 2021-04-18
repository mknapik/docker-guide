FROM node:alpine AS builder

WORKDIR /code
RUN touch a b c


FROM alpine AS final

WORKDIR /code
COPY --from=builder --chown=1000 /code/a /code
USER 1000

CMD ls -la .
