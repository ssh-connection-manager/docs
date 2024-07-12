FROM node:20.2.0

WORKDIR /app

COPY package.json ./

RUN apt-get update
RUN npm install -g npm@9.7.2
RUN npm i

COPY . .

RUN chown -R node:node /app

USER node

EXPOSE 8080

CMD npm run docs:dev -- --host