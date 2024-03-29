
FROM tiangolo/nginx-rtmp

COPY nginx.conf /etc/nginx/nginx.conf
COPY index.html /www/
COPY privkey.pem /etc/nginx/ssl/yourdomain.com/privkey.pem
COPY fullchain.pem /etc/nginx/ssl/yourdomain.com/fullchain.pem
# COPY move_hls_to_recordings_live_2.sh /tmp/move_hls_to_recordings_live_2.sh
# COPY move_hls_to_recordings_live_1.sh /tmp/move_hls_to_recordings_live_1.sh

# RUN chmod +x /tmp/move_hls_to_recordings_live_2.sh
# RUN chmod +x /tmp/move_hls_to_recordings_live_1.sh

