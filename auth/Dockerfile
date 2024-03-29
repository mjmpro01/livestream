FROM node:12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY server.js ./
CMD ["npm", "start"]

COPY move_hls_to_recordings_live_2.sh /tmp/move_hls_to_recordings_live_2.sh

RUN chmod +x /tmp/move_hls_to_recordings_live_2.sh