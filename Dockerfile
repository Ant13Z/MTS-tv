FROM node:14-alpine3.10
RUN apk update

WORKDIR /src
COPY ./src/package*.json ./
RUN yarn install

EXPOSE 8080
CMD cd src && yarn run start