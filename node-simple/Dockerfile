# DOCKER-VERSION 1.3.1

FROM base/archlinux:latest
RUN pacman -Sy
RUN pacman -S nodejs --noconfirm

COPY . .
RUN npm install

EXPOSE 3000
CMD npm start