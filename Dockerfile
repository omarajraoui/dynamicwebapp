ARG BUILD_IMAGE=node:16-stretch-slim
ARG RUNTIME_IMAGE=httpd:2.4.54-alpine

FROM ${BUILD_IMAGE} as builder
WORKDIR /app
ENV PATH /output/node_modules/.bin:$PATH
COPY package.json ./
RUN npm install --silent
COPY . ./
RUN npm run build

FROM ${RUNTIME_IMAGE} as production 
COPY --from=builder /app/dist /usr/local/apache2/htdocs/envproject
EXPOSE 3000
CMD ["httpd-foreground"]
