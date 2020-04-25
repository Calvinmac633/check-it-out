const router = require("express").Router();
const listRoutes = require("./list");
const PassportRoutes = require("./passport");


// Book routes
router.use("/list", listRoutes);


router.get("/passport", (req, res) => {
    res.status(200).json({
      message: "You're authorized to see this secret message.",
      // user values passed through from auth middleware
      user: req.user
    });
  });

module.exports = router;