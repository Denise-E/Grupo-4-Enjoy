const express = require("express");
const products = require("../controllers/products");
const router = express.Router();

router.get("/productDetail", products.productDetail);
router.get("/cart", products.cart);
router.get("/products/categories", products.categories);
router.get("/products/categories/gastronomia", products.gastronomia);
router.get("/products/categories/aventura", products.aventura);
router.get("/products/categories/estarBien", products.estarBien);
router.get("/products/categories/entretenimeinto", products.entretenimiento);
router.get("/products/categories/estadias", products.estadias);
router.get("/crearComentario", products.crearComentario)

module.exports = router;