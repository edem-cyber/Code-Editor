FROM node:14.15.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json  ./

EXPOSE 3000

RUN npm install --silent 

COPY . ./

RUN npm install @auth0/auth0-react @material-ui/core @material-ui/icons @material-ui/lab @monaco-editor/react monaco-editor @reduxjs/toolkit lodash @types/lodash react-redux @types/react-redux react-router-dom @types/react-router-dom uuid @types/uuid redux-persist @types/redux-persist

CMD ["npm", "start"]