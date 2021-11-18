FROM node:16-alpine AS builder
COPY . ./recept-demo
WORKDIR /recept-demo
RUN npm i
RUN $(npm bin)/ng build

FROM nginx:1.15.8-alpine
COPY --from=builder /recept-demo/dist/recept-demo /usr/share/nginx/html
