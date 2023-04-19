const userController =require('../controllers/userController');
const router = require('express').Router();

//ENDPOINTS

router.get('/profile/', userController.profile)
router.put('/update/', userController.updateUser)

module.exports = router;