#!/bin/bash

# Assuming $1 is SOURCE_DIR and $2 is DEST_DIR
SOURCE_DIR="$1"
DEST_DIR="$2"

# Check if SOURCE_DIR exists and is not empty
if [ -d "$SOURCE_DIR" ] && [ "$(ls -A $SOURCE_DIR)" ]; then
    # Create DEST_DIR if it does not exist
    mkdir -p "$DEST_DIR"

    # Move all files from SOURCE_DIR to DEST_DIR
    mv "$SOURCE_DIR"/* "$DEST_DIR"
    echo "Moved HLS recordings from $SOURCE_DIR to $DEST_DIR"

    # Optional: Remove SOURCE_DIR after moving
    # rm -rf "$SOURCE_DIR"
else
    echo "Source directory does not exist or is empty: $SOURCE_DIR"
fi