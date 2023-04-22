const router = require('express').Router();
const userController =require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');


//ENDPOINTS

router.get('/profile/', verifyToken, userController.profile)

router.put('/update/', verifyToken, userController.updateUser)

router.delete('/delete/:id', verifyToken, userController.deleteUser)


module.exports = router;