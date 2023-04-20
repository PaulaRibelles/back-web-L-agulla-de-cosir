const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');

//ENDPOINTS

router.post('/create', verifyToken, appointmentController.createAppointments)

router.put('/update/:id', verifyToken, appointmentController.updateAppointments)

router.delete('/delete/:id', verifyToken, appointmentController.deleteAppointments)

router.get("/getClient", verifyToken, appointmentController.getClientAppointments)
router.get("/getDressmaker", verifyToken, appointmentController.getDressmakerAppointments)
router.get("/getAll", verifyToken, isAdmin, appointmentController.getAllAppointments)


module.exports = router;