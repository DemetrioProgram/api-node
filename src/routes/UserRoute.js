const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController');

router.post('/', userController.save);

router.put('/', userController.update);

module.exports = app => app.use('/user', router);