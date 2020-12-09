FROM node:13

WORKDIR /usr/web/app
COPY . .
RUN npm install
RUN npm audit fix

WORKDIR /usr/web/app/frontend
RUN npm install
RUN npm audit fix

RUN apt update
RUN apt install mysql-client -y

WORKDIR /usr/web/app

CMD [ "bash", "startup.sh" ]