# syntax=docker/dockerfile:1

FROM node:24-alpine AS build
WORKDIR /app

ENV CI=true

COPY package.json package-lock.json .npmrc ./
RUN npm ci

COPY astro.config.mjs tsconfig.json ./
COPY data ./data
COPY public ./public
COPY src ./src
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine AS runtime

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
	CMD wget -q -O /dev/null http://127.0.0.1:8080/ || exit 1
