require('dotenv').config();
const express = require('express');
const bunyanConfig = require('./configs/bunyan');
const compression = require('compression');

// Set port, init express
const port = process.env.PORT || 8080;
const app = express();

// Init bunyan logger
const log = bunyan.createLogger(bunyanConfig);

// Watch for memory leaks, log leaks as fatal
memwatch.on('leak', info => {
  log.fatal('Memory leak detected:', info);
});

// Parse json and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Compress responses
app.use(compression());

// Start application
log.info('Application started');
