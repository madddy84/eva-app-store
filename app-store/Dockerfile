# Use an official Node.js runtime as a parent image
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy only the source code and necessary files to the working directory
COPY src ./src
COPY public ./public
COPY .env ./
COPY tsconfig.json ./
COPY webpack.config.js ./

# Build the React app for production
RUN npm run build

# Use an official Nginx image to serve the built app
FROM nginx:alpine

# Copy the built app from the previous stage to the Nginx html directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]