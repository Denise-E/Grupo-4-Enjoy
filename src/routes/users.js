const express = require("express");
const users = require("../controllers/users");
const router = express.Router();
const {validate} = require("../models/user");
const path = require ("path");
const multer = require ("multer");
const upload = multer ({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve (__dirname, "../../uploads")),
      filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)),
})});



router.get("/login",[validate, upload.single()], users.login);

router.get("/register", users.register);
router.get("/list", users.list); //Listado de TODOS los ususarios
router.get("/editarUsuario/:id", users.editarUsuario);
router.get("/:id", users.show); //ruta dinamica


router.post("/", users.save);
router.post("/access", users.access);
router.put("/:id", users.modify);
router.delete("/delete", users.delete);

module.exports = router;