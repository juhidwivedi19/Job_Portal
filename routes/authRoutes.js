const express = require('express');
const authController = require('../controller/authController');
const authMiddleware = require('../Middleware/authMiddleware');

const router = express.Router();

// Grouped route for register
router.route('/register')
    .post(authController.register);

// Grouped route for login
router.route('/login')
    .post(authController.login);

// Protected route
router.route('/protected')
    .get(authMiddleware, (req, res) => {
        res.json({
            message: "You accessed protected route",
            user: req.user
        });
    });

module.exports = router;