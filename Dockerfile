FROM node:alpine
WORKDIR /task-force-challenge
COPY . /task-force-challenge/
RUN npm run build
CMD ["npm", "start"]
