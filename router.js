const router = require('express').Router();

const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');
const adminRoutes = require('./views/adminRoutes');


router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/admin", adminRoutes);


module.exports = router;