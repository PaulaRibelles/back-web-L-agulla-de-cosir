const router = require('express').Router();
const authController = require('../controllers/authController');

// ENDPOINTS

router.post('/register', authController.register);

module.exports = router;