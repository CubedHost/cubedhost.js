FROM node:6.10

# Create app directory
RUN mkdir ~/cubedhost.js
WORKDIR ~/cubedhost.js

# Install app dependencies
COPY package.json ~/cubedhost.js
RUN npm install

# Copy app source
COPY . ~/cubedhost.js

# Run tests
CMD ["npm", "test"]
