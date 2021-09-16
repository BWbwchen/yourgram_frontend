FROM node:lts-alpine AS build

COPY ./package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine AS deploy  

COPY --from=build /dist  /data/www
COPY ./nginx-conf.conf /etc/nginx/nginx.conf