#!/bin/bash
# Create directory if it doesn't exist and clean it
mkdir -p /var/www/html/app
cd /var/www/html/app
# Remove contents but keep the directory
find . -mindepth 1 -delete 2>/dev/null || true

