const router = require("express").Router();
const listRoutes = require("./list");

// Book routes
router.use("/list", listRoutes);

module.exports = router;