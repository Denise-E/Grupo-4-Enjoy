const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");
const path = require ("path");
const auth = require ("../middlewares/auth");

const multer = require ("multer");
const upload = multer ({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve (__dirname, "../../uploads")),
      filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)),
})});
const validate = require("../validations/product.js")

router.get("/crearProducto",[auth], admin.create); 

router.post("/guardar",[upload.single("file"), validate.create], admin.save);






module.exports = router;
