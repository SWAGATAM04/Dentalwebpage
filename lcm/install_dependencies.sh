#!/bin/bash
cd /var/www/html/app
# Install Node.js if not present
if ! command -v node &> /dev/null; then
    curl -fsSL https://fnm.vercel.app/install | bash
    export PATH="$HOME/.local/share/fnm:$PATH"
    eval "$(fnm env)"
    fnm install 18
    fnm use 18
fi
# Dependencies already included in zip from CodeBuild
echo "Dependencies ready from build artifacts"
