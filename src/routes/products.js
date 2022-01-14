const express = require("express");
const products = require("../controllers/products");
const router = express.Router();

router.get("/", products.index);

router.get("/cart", products.cart);
router.get("/crearComentario", products.crearComentario);
router.get("/:id", products.productDetail);

module.exports = router;