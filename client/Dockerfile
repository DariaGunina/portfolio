FROM node:22.5.1-slim

WORKDIR /app
COPY . .
RUN npm i --legacy-peer-deps

CMD ["npm", "run", "dev"]

