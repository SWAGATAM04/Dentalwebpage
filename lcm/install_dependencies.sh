#!/bin/bash
echo "Installing dependencies..."
# Install Node.js 18 if not present
if ! command -v node &> /dev/null; then
    curl -sL https://rpm.nodesource.com/setup_18.x | bash -
    yum install -y nodejs
fi
node --version
npm --version
echo "Dependencies ready from build artifacts"
