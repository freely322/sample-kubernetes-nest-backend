FROM node:13-alpine

RUN mkdir -p /usr/src/g2o && chown -R node:node /usr/src/g2o

WORKDIR /usr/src/g2o

COPY package.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
