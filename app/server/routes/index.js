const express = require('express');
const web = require('./web/index');
const api = require('./api/index');

const router = express.Router();

router.use('/api', api);
router.use('/', web);

module.exports = router;
