#!/bin/bash
echo "Installing dependencies..."
cd /var/www/html/app

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo "Error: package.json not found"
    exit 1
fi

# Install Node.js 18 if not present
if ! command -v node &> /dev/null; then
    curl -sL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs
fi

# Use npm ci for faster, reliable installs
npm ci
npm install -g @astrojs/cli
echo "Dependencies installed"

