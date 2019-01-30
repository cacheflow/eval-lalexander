FROM node:10.10.0-alpine

ENV APP_HOME /app
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

COPY package.json ./

ENV PATH=$APP_HOME/node_modules/.bin:$PATH

RUN npm install -g webpack &&\
  npm install

ADD . $APP_HOME

CMD ["npm", "start"]
