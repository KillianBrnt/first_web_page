FROM node:alpine

RUN apk --no-cache add --virtual native-deps \
  g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git && \
  npm install --quiet node-gyp -g

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production
RUN npm install -g pm2
RUN npm install --save method-override
RUN npm install mysql
RUN npm install

COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]