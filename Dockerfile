# Use NodeJS base image
FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
# Copy app source
COPY . .

# Compile production version
RUN npm run prod

# Bind the port that the image will run on
EXPOSE 2310

# Define the Docker image's behavior at runtime
CMD ["node", "./www/server.js"]
