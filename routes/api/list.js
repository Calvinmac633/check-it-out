const router = require("express").Router();
const listController = require("../../controllers/listController");

// Matches with "/api/list"
router.route("/")
  .get(listController.findAll)
  .post(listController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(listController.findById)
  .put(listController.update)
  .delete(listController.remove);

module.exports = router;