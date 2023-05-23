# FROM node:20-alpine

# WORKDIR /app

# COPY . .
# RUN npm install
# RUN npm run build
# RUN npm prune --production # Remove dev dependencies

# EXPOSE 5000
# ENV HOST=0.0.0.0

# CMD [ "npm", "start" ]

# FROM node:20-alpine AS build
FROM node:20-alpine

WORKDIR /app
COPY . .
# RUN yarn
# RUN yarn build
RUN npm install
# RUN npm run build

# FROM nginx:1.23.3-alpine-slim AS deploy-static

# WORKDIR /usr/share/nginx/html
# RUN rm -rf ./*
# COPY --from=build /app/build-static .
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# FROM node:18-alpine AS deploy-node

# WORKDIR /app
# RUN rm -rf ./*
# COPY --from=build /app/package.json .
# COPY --from=build /app/build-node .
# CMD ["node", "index.js"]

# EXPOSE 5173
# ENV HOST=0.0.0.0


CMD ["npm", "run", "dev"]