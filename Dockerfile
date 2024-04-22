FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && echo 'Docker Image of PM2 project up and running'
COPY . .
EXPOSE 3001 3002 3003
EXPOSE 6665 6666 6667
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "pm2"]
