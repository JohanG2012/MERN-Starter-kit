require('dotenv').config();
const express = require('express');
const bunyanConfig = require('./configs/bunyan');

const port = process.env.PORT || 8080;
const app = express();

const log = bunyan.createLogger(bunyanConfig);

memwatch.on('leak', info => {
  log.fatal('Memory leak detected:\n', info);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

log.info('Application started');
