#!/bin/bash
echo "Starting application..."
# Change to the deployment directory
cd /var/www/html/app
echo "Current directory: $(pwd)"
ls -la package.json
# Fix node_modules permissions
chmod +x node_modules/.bin/* 2>/dev/null || true
# Start npm run dev in background
nohup npm run dev > /var/log/app.log 2>&1 &
echo $! > /var/run/app.pid
echo "Application started with PID: $(cat /var/run/app.pid)"
