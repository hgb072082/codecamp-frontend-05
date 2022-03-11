FROM node:16

WORKDIR /build/
COPY . /build/

RUN yarn install
RUN yarn build:ssr
CMD yarn start