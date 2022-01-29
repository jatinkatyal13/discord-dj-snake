FROM node:14-alpine

WORKDIR /usr/src

RUN apk add ffmpeg

COPY package.json ./
COPY yarn.lock ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run", "start" ]
