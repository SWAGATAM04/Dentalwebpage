#!/bin/bash
cd /var/www/html/app
for zip in *.zip; do
    if [ -f "$zip" ]; then
        unzip -o "$zip"
        rm "$zip"
    fi
done

