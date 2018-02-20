require('dotenv').config();
const express = require('express');

const port = process.env.PORT || 8080;

const log = bunyan.createLogger({
  name: 'integrering',
  streams: [
    {
      level: 'debug',
      stream: process.stdout // log INFO and above to stdout
    },
    {
      level: 'info',
      path: `${process.env.APP_ROOT}/logs/app.json` // log ERROR and above to a file
    }
  ]
});

log.info('Application started');

memwatch.on('leak', info => {
  log.fatal('Memory leak detected:\n', info);
});
