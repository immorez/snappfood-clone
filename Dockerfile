#FROM node:16.16.0 AS builder
FROM node:18.12.0 AS builder
WORKDIR /app
RUN npm install -g npm@9.6.4
RUN npm install -g pnpm

COPY ./out/full .
RUN ls -lah

#RUN pnpm install
RUN yarn install
RUN ls -la /app
RUN yarn run build
RUN ls -lah  /app/snappfood-clone/dist/

FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
COPY --from=builder /app/snappfood-clone/dist/ /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
