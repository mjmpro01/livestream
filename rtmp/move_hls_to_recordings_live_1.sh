#!/bin/bash

# Đường dẫn thư mục nguồn và đích
SOURCE_DIR="/tmp/hls/live_2"
DEST_DIR="/tmp/recordings/live_2"

# Tạo thư mục đích nếu nó không tồn tại
mkdir -p "$DEST_DIR"

# Di chuyển thư mục
mv "$SOURCE_DIR"/* "$DEST_DIR"

# Tùy chọn: Xóa thư mục nguồn sau khi di chuyển
# rm -rf "$SOURCE_DIR"

echo "Moved HLS recordings from $SOURCE_DIR to $DEST_DIR"