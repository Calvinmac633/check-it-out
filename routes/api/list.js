const router = require("express").Router();
const listController = require("../../controllers/listController");

// Matches with "/api/list"

router.route('/:listname')
  .post(listController.create)

router
  .route("/:codename/:listname")
  .get(listController.findOne)

  // .post(listController.create)
  .put(listController.findOneAndUpdate)

  router
  .route("/:codename/:listname/:id/")
  .put(listController.remove);


module.exports = router;