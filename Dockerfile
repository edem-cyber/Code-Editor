FROM node:14.15.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json  ./

EXPOSE 3000

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]