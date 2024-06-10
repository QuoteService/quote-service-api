FROM node:22.2.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

ENV DATABASE_HOST=postgres
ENV DATABASE_PORT=5432
ENV DATABASE_USER=johnhoe
ENV DATABASE_PASSWORD=randompassword
ENV DATABASE_NAME=mydb
ENV NATS_URL=nats://nats:4222

EXPOSE 3000

CMD ["npm", "run", "start:prod"]