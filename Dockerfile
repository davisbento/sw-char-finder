# build environment
FROM node:9-alpine as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/

RUN yarn install

COPY . /usr/src/app

RUN set -x \
  && cp .env.example .env \
  && yarn build-css \
  && yarn build

# production environment
FROM nginx:alpine

COPY --from=builder /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf