FROM node:14-slim

# Add a work directory
WORKDIR /usr/src/app
# Cache and Install dependencies
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install
# Copy app files
COPY . .



# Expose port
EXPOSE 3000
# Start nginx
CMD ["npm", "start"]