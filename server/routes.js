const express = require('express');
const router = express.Router();

const userController = require(__dirname + '/controllers/user');

router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
