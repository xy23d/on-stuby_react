FROM node:18-alpine AS deps

WORKDIR /app

COPY ./spa/package*.json ./

RUN npm install

FROM node:18-alpine

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
