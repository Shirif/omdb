# build environment
FROM node:14.15.4-alpine as builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

# To handle 'not get uid/gid'
RUN npm config set unsafe-perm true
RUN npm install --silent
RUN npm install react-scripts@4.0.1 -g --silent
COPY . /app
RUN npm run build

# production environment
FROM nginx:1.19.6-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]