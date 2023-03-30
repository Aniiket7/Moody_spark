FROM node:13-alpine
RUN mkdir -p /home/moody-spark/backend
RUN mkdir -p /home/moody-spark/frontend
COPY ./backend /home/moody-spark/backend
COPY ./frontend /home/moody-spark/frontend
WORKDIR /home/moody-spark/backend
RUN npm install --force
WORKDIR /home/moody-spark/frontend
RUN npm install --force
EXPOSE 5000
EXPOSE 3000
WORKDIR /home/moody-spark/
CMD npm start --prefix frontend & npm start --prefix backend
