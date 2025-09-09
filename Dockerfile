FROM node:22-alpine

WORKDIR /app

# Copy the rest of your application code
COPY . /app

# Expose the port the app runs on
EXPOSE 3000

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

#RUN cd .output/server/index.mjs



# Start the application
#CMD ["npm", "run", "start"]
#CMD ["npm", "run", "dev"]
CMD ["node", ".output/server/index.mjs"]

