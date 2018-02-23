const express = require('express');
const web = require('./web/index');
const api = require('./api/index');
const auth = require('./auth/index');
const authCheckMiddleware = require('../middleware/auth-check');

const router = express.Router();

router.use('/', web);
router.use('/api', authCheckMiddleware);
router.use('/api', api);
router.use('/auth', auth);

module.exports = router;
