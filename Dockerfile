FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM httpd:2.4-alpine

COPY --from=builder /app/out/ /usr/local/apache2/htdocs/

EXPOSE 80