const express = require('express');
const userController = require('../../controllers/user');

const router = express.Router();

router.get('/:email', userController.find);

router.post('/', userController.create);

module.exports = router;
