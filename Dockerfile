FROM node:14.17.3

WORKDIR /usr/src/ts/arc-api

COPY package*.json ./

RUN npm install pm2 -g
RUN npm install

COPY . .

EXPOSE 3000
EXPOSE 5858

CMD ["pm2-runtime", "ecosystem.config.js"] 
