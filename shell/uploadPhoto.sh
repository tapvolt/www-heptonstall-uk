#!/bin/bash

cd /Users/heptonstall/Scripts/

if [ -f image.jpg ]; then
    rm image.jpg
fi

# take a photo and save it in the same directory here
osascript securitySpyTakePhoto.scpt

# capture json from WeatherSnoop App
curl http://localhost:8003/99503E3B-1133-4F50-8984-F4F4B769A57C.json > weatherData.json

/usr/local/bin/s3cmd --no-mime-magic put image.jpg s3://www.heptonstall.info
/usr/local/bin/s3cmd --no-mime-magic put weatherData.json s3://www.heptonstall.info
