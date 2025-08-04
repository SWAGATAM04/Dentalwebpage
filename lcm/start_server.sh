#!/bin/bash
echo "Starting application..."
cd /var/www/html/app
# Setup Node.js environment
export PATH="$HOME/.local/share/fnm:$PATH"
eval "$(fnm env)" 2>/dev/null || true
# Fix permissions
chmod +x node_modules/.bin/* 2>/dev/null || true
# Start application in background
echo "Running npm run dev..."
nohup npm run dev > /var/log/app.log 2>&1 &
echo $! > /var/run/app.pid
echo "Application started with PID: $(cat /var/run/app.pid)"
echo "Logs available at: /var/log/app.log"
