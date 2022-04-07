FROM node:lts
RUN mkdir /home/node/app
RUN mkdir /home/node/app/node_modules
WORKDIR  /home/node/app
RUN npm -g install @angular/cli@latest