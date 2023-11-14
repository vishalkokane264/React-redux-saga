# Use an official Node.js runtime as a parent image
FROM node:14-alpine as build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the React app files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use a smaller image for production
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the built files from the previous stage
COPY --from=build /usr/src/app/build /usr/src/app/build

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run your app
CMD ["npx", "http-server", "-p", "3000", "build"]