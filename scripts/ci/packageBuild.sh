# <- this is a comment and won't be executed
# Feel free to delete all the comments and type in your own commands
# Each line is treated like a command that you execute in a local shell.
# i.e.: rvm use 2.2.2
# i.e.: bundle install
cs project-root
npm install --global grunt
npm install --global browserify
npm install --global babel-cli
npm install --global uglify
npm install --production
sh scripts/deploy.sh
