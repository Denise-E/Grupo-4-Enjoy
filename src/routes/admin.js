const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");

router.get("/crearProducto", admin.create);

router.post("/", admin.save);
router.post("/", admin.create);
router.put("/", admin.edit);
router.delete("/", admin.delete);

router.get("/editarProducto/:id", admin.editarProducto);

module.exports = router;
