const router = require('express').Router();

const userRoutes = require('./views/userRoutes');

router.use("/user", userRoutes);

module.exports = router;