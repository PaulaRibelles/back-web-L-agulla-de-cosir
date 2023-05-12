const router = require('express').Router();
const adminController = require('../controllers/adminController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');


//ENDPOINTS

router.post('/createDressmaker', verifyToken, isAdmin, adminController.createDressmakers);

router.put('/updateDressmaker/:id', verifyToken, isAdmin, adminController.updateDressmakers);

module.exports = router;