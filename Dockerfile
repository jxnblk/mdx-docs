FROM node:10-alpine

WORKDIR /usr/src

COPY . .

RUN npm ci
RUN npm t

RUN cd docs && npm i && npm run build

COPY docs/out /public/
COPY docs/static/* /public/
