const express = require("express");
const products = require("../controllers/products");
const router = express.Router();
const path = require ("path");
const multer = require ("multer");
const upload = multer ({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve (__dirname, "../../uploads")),
      filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)),
})})
const validate = require("../validations/product.js")


router.get("/", products.index);

router.get("/cart", products.cart);
router.get("/crearComentario", products.crearComentario);
router.get("/compras", products.compras);
router.get("/:id", products.productDetail);
router.get("/editarProducto/:id", products.editarProducto);

router.put("/:id",[validate], products.modify);
router.delete("/", products.delete);




module.exports = router;