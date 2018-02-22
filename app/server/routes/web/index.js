const express = require('express');
const viewController = require('../../controllers/view');

const router = express.Router();
router.get('/', viewController);

module.exports = router;
