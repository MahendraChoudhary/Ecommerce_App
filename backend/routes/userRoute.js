const express = require('express');
const {registerUser, loginUser, logout} = require('../controllers/userController');
const router = express.Router();

// Api for user registration
router.route('/register').post(registerUser);

// Api for login of user
router.route('/login').post(loginUser);

// Api for logout of user
router.route('/logout').get(logout);

module.exports = router;  