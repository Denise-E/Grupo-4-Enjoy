const express = require("express");
const products = require("../controllers/products");
const router = express.Router();
const path = require ("path");
const multer = require ("multer");
const upload = multer ({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve (__dirname, "../../uploads")),
      filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)),
})})
const validate = require("../validations/product.js");
const access = require ("../middlewares/access");
const auth = require ("../middlewares/auth");



router.get("/", products.index);

router.get("/cart",[access], products.cart);
router.get("/crearComentario",[access], products.crearComentario);
router.get("/compras",[access], products.compras);

router.get("/editarProducto/:id",[auth], products.editarProducto);
router.get("/:id", products.productDetail);
router.get("/favoritos",products.favoritos);//[access],

router.delete("/", products.delete);
router.post('/search', products.search);
router.put("/edit/:id",[upload.single("image")],[validate.edit], products.modify);

//carrito
router.post("/agregar", products.addCart)

router.post("/eliminar", products.eliminar)





module.exports = router;