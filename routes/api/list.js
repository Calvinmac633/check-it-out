const router = require("express").Router();
const listController = require("../../controllers/listController");

// Matches with "/api/list"
router
  .route("/:codename")
  .get(listController.findOne)
  .post(listController.create);

module.exports = router;