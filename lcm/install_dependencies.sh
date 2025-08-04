#!/bin/bash
echo "Installing dependencies..."
mkdir -p /var/www/html/app
cd /var/www/html/app


# Install Node.js 18 if not present
if ! command -v node &> /dev/null; then
    curl -sL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs
fi

# Use npm ci for faster, reliable installs
npm ci
npm install -g @astrojs/cli
echo "Dependencies installed"

