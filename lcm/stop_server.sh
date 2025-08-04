#!/bin/bash
echo "Stopping application..."
# Kill all npm run dev processes
pkill -f "npm run dev" 2>/dev/null || true
# Kill PID if exists
if [ -f /var/run/app.pid ]; then
    kill $(cat /var/run/app.pid) 2>/dev/null || true
    rm -f /var/run/app.pid
fi
echo "Application stopped"
