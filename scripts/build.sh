#!/usr/bin/env bash

# js transform
./node_modules/.bin/babel --presets react,es2015 www/js/source -d www/js/build/

# js package
./node_modules/.bin/browserify www/js/build/app.js -o www/js/bundle.js

# css package
cat www/css/*/* www/css/*.css | sed 's/..\/..\/images/..\/images/g' > www/css/bundle.css

# done
date; echo;
