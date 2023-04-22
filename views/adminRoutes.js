const router = require('express').Router();
const adminController = require('../controllers/adminController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');


//ENDPOINTS

router.post('/createDressmaker', verifyToken, isAdmin, function(req,res){adminController.createDressmakers});


module.exports = router;