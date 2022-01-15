const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");


router.get("/crearProducto", admin.crearProducto);

router.post("/", admin.save);
router.put("/", admin.edit);
router.delete("/", admin.delete);

router.get("/editarProducto/:id", admin.editarProducto);

module.exports = router;