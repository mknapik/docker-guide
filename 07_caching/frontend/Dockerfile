FROM node:alpine AS builder

ENV PORT 80
RUN mkdir -p /code && chown node:node /code
USER node
WORKDIR /code

COPY --chown=node:node package.json /code
COPY --chown=node:node yarn.lock /code

RUN yarn install --frozen-lockfile

COPY --chown=node:node . /code

RUN yarn build

CMD [ "npm","run","dev" ]

FROM nginx:alpine AS static

COPY --chown=nginx:nginx --from=builder /code/public /usr/share/nginx/html
