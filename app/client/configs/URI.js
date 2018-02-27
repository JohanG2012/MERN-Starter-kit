const DEVELOPMENT = 'http://localhost:8088';
const PRODUCTION = '';
const BASE_URI = process.env.HOST === 'DEVELOPMENT' ? DEVELOPMENT : PRODUCTION;

module.exports = {
  BASE_URI
};
