# Use a Node.js base image
FROM node:lts AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Use an Nginx base image for serving static files
FROM nginx:latest
EXPOSE 3000
# Copy the build output from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

