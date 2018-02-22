sudo apt-get install nodejs npm -y
sudo npm install -g n
sudo n latest
sudo apt-get purge nodejs -y
sudo npm install -g nodemon
cd /vagrant/app
npm install
cd server
nodemon --ignore 'logs' server.js -L | ../node_modules/.bin/bunyan
