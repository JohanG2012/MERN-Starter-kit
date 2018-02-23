sudo apt-get install nodejs npm -y
sudo npm install -g n
sudo n latest
sudo apt-get purge nodejs -y
sudo npm install -g nodemon
cd /vagrant
npm install
nodemon --ignore './app/server/logs' ./app/server/server.js -L | node_modules/.bin/bunyan
