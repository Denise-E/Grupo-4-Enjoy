const express = require("express");
const products = require("../controllers/products");
const router = express.Router();

router.get("/", products.index);

router.get("/cart", products.cart);
router.get("/categories", products.categories);
router.get("/categories/gastronomia", products.gastronomia);
router.get("/categories/aventura", products.aventura);
router.get("/categories/estarBien", products.estarBien);
router.get("/categories/entretenimiento", products.entretenimiento);
router.get("/categories/estadias", products.estadias);
router.get("/crearComentario", products.crearComentario);
router.get("/:id", products.productDetail);

module.exports = router;