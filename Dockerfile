# base image
FROM node:latest

# set working directory
WORKDIR /app

## install and cache app dependencies
#COPY package.json package-lock.json ./
#RUN npm install
#
## add app
#COPY . /app
#
## start app
#CMD ["npm", "run", "start"]
ENTRYPOINT npm install && npm start
EXPOSE 8000
