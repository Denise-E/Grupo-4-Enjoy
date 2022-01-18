const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");

router.get("/crearProducto", admin.create);

router.post("/guardar", admin.save);
router.post("/", admin.create);


router.get("/editarProducto/:id", admin.editarProducto);

router.put("/", admin.edit);
router.delete("/", admin.delete);


module.exports = router;
