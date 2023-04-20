const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');

//ENDPOINTS

router.post('/create', verifyToken, appointmentController.createAppointments)
router.put('/update/:id', verifyToken, appointmentController.updateAppointments)
router.delete('/delete/:id', verifyToken, appointmentController.deleteAppointments)