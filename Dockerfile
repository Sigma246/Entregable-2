FROM node:16.20.1 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]