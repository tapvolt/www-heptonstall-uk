# clean up lat version
rm -rf __deployme
mkdir -p __deployme/js
mkdir -p __deployme/css
mkdir -p __deployme/images

# build
sh scripts/build.sh

# minify JS
uglify -s www/js/bundle.js -o __deployme/js/bundle.js

# minify CSS
./node_modules/.bin/cssshrink www/css/bundle.css > __deployme/css/bundle.css

# copy HTML and images
cp www/index.html __deployme/index.html
cp -r www/images/* __deployme/images/

# done
date; echo;
