const express = require("express");
const categories = require("../controllers/categories");
const router = express.Router();

router.get("/", categories.index)
router.get("/:id", categories.categories)

router.delete("/", categories.delete)

module.exports = router;
