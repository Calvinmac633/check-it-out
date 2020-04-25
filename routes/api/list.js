const router = require("express").Router();
const listController = require("../../controllers/listController");

// Matches with "/api/list"
router.route("/")
  .get(listController.findAll)


module.exports = router;