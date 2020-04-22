const router = require("express").Router();
const listRoutes = require("./user");

// Book routes
router.use("/user", userRoutes);

module.exports = router;