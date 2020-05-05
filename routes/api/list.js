const router = require("express").Router();
const listController = require("../../controllers/listController");

// Matches with "/api/list"

router.route('/:listname')
  .post(listController.create)

router
  .route("/:codename")
  .get(listController.findOne)
  .put(listController.findOneAndUpdate);

module.exports = router;