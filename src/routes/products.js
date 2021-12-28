const express = require("express");
const products = require("../controllers/products");
const router = express.Router();

router.get("/productDetail", products.productDetail);
router.get("/cart", products.cart);

module.exports = router;