FROM node:10-alpine

WORKDIR /usr/src

COPY . .

RUN npm i
RUN npm t

RUN cd docs && npm i && npm run build

COPY docs/out /public/
COPY docs/static/* /public/
