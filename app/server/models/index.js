const mongoose = require('mongoose');

module.exports.connect = (uri, errorHandler) => {
  mongoose.connect(uri);

  mongoose.Promise = global.Promise;

  mongoose.connection.on('error', err => {
    errorHandler(`Mongoose connection error ${err}`);
  });
};
