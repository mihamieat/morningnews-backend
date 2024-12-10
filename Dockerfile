# use latest Node.js with an alpine distribution
FROM node:23-alpine

# create new directory app/node_modules in the home of "node" user and change owner to node for the app directory and everything under
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# set the current working directory
WORKDIR /home/node/app

# copy project files
COPY --chown=node:node . .

# add curl into image
RUN apk --no-cache add curl

# set user to "node"
USER node

# install project
RUN yarn install

# expose the application port
EXPOSE 3000

# start the application
CMD [ "yarn", "start" ]