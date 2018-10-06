FROM node:10-alpine

WORKDIR /usr/src

COPY . .

RUN npm i
RUN npm run prepare
RUN npm t

RUN cd docs && npm i && npm run build && mv out /public

COPY docs/static/* /public/
