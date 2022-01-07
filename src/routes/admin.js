const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");


router.get("/crearProducto", admin.crearProducto);
router.get("/editarProducto", admin.editarProducto);

module.exports = router;