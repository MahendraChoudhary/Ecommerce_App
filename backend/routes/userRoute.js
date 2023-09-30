const express = require('express');
const {registerUser, loginUser} = require('../controllers/userController');
const router = express.Router();

// Api for user registration
router.route('/register').post(registerUser);

// Api for login of user
router.route('/login').post(loginUser);

module.exports = router;  