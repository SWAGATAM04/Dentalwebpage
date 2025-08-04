#!/bin/bash
echo "Starting application..."
# We're already in the extracted app directory
echo "Current directory: $(pwd)"
ls -la
# Start npm run dev in background
nohup npm run dev > /var/log/app.log 2>&1 &
echo $! > /var/run/app.pid
echo "Application started with PID: $(cat /var/run/app.pid)"
