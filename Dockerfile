# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /myapp/dist/myapp

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Stage 2: Serve app with Nginx
FROM nginx:alpine

COPY --from=builder /myapp/dist/myapp /usr/share/nginx/html

# Optional: Copy custom nginx config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]