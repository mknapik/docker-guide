FROM node:16-alpine AS dev
LABEL maintainer="michal.knapik@u2i.com"

RUN apk add --no-cache --update --quiet tini entr

ARG NPM_TOKEN
ARG NODE_ENV
ENV PORT 80
ENV NODE_ENV $NODE_ENV

RUN mkdir -p /code && chown node:node /code
COPY --chown=1000:1000 ._npmrc /root/.npmrc

RUN npm i --quiet -g @mknapik/rxjs-extensions

USER node
WORKDIR /code

COPY package.json /code/
COPY yarn.lock /code/
RUN yarn install --frozen-lockfile && yarn cache clean

USER root
RUN rm /root/.npmrc
USER node

COPY . /code/
RUN yarn run compile

EXPOSE 80

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["sh", "-c", "find dist | entr -r yarn start"]



FROM dev AS builder

RUN yarn pack --prod --frozen-lockfile



FROM node:16-alpine AS package

ENV PORT 80
EXPOSE 80

RUN apk add --no-cache --update --quiet tini

COPY --from=builder /code/mknapik-server-v0.0.1.tgz /
RUN npm i --quiet -g /mknapik-server-v0.0.1.tgz

USER 1000

ENTRYPOINT ["/sbin/tini", "--"]
CMD ["server"]
