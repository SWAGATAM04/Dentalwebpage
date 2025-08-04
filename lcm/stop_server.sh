#!/bin/bash
echo "Stopping all npm run dev processes..."
# Kill all npm run dev processes
pkill -f "npm run dev" 2>/dev/null || true
# Kill any node processes running dev server
pkill -f "node.*dev" 2>/dev/null || true
# Remove PID file if exists
if [ -f /var/run/app.pid ]; then
    kill $(cat /var/run/app.pid) 2>/dev/null || true
    rm -f /var/run/app.pid
fi
echo "Waiting for processes to stop..."
sleep 3
