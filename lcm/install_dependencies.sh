#!/bin/bash
echo "Installing dependencies..."
# Install Node.js 18 if not present
if ! command -v node &> /dev/null; then
    curl -sL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs
fi
node --version
npm --version
# Install npm dependencies
cd /var/www/html/app
npm install
echo "Dependencies installed"
npm install -g @astrojs/cli

echo "astro cli install"

