FROM node:19.1.0-slim
    
RUN npm install pm2 -g

WORKDIR /app
COPY package*.json .
RUN npm ci

WORKDIR /app/client
COPY client/package*.json .
RUN npm ci

WORKDIR /app
COPY . .
RUN npm run build

WORKDIR /app/client
RUN npm run build

ENV NODE_ENV=production

WORKDIR /app
CMD [ "pm2-runtime", "ecosystem.config.js" ]