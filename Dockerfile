FROM node:14
WORKDIR /usr/src/app
COPY package*.json app.js fetchjson.js ./
RUN npm install
EXPOSE 3001
CMD ["node", "app.js"]