const router = require('express').Router();
const adminController = require('../controllers/adminController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');


//ENDPOINTS

router.get('/getDressmaker', verifyToken, isAdmin, adminController.getDressmakers);

router.post('/createDressmaker', verifyToken, isAdmin, adminController.createDressmakers);

router.put('/updateDressmaker/:id', verifyToken, isAdmin, adminController.updateDressmakers);

router.delete('/deleteDressmaker/:id', verifyToken, isAdmin, adminController.deleteDressmakers);

module.exports = router;