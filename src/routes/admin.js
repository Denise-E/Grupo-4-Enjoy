const express = require("express");
const router = express.Router();
const admin = require("../controllers/admin");
const path = require ("path");
const multer = require ("multer");
const auth = require ("../middlewares/auth");
const upload = multer ({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve (__dirname, "../../uploads")),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)),
})})

//[auth]
router.get("/crearProducto",[auth], admin.create);

router.post("/guardar",[upload.any()], admin.save);
router.post("/", admin.create);






module.exports = router;
