#  Dockerfile for Node Express Backend

FROM node:14-slim

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["npm","start"]