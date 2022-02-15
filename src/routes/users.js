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
const access = require ("../middlewares/access");




router.get("/login", users.login);
router.get("/register", users.register);
router.get("/list",[access], users.list); //Listado de TODOS los ususarios
router.get("/editarUsuario/:id",[access], users.editarUsuario);
router.get("/:id",[access], users.show); //ruta dinamica


router.post("/",[upload.single()], users.save);

router.post("/access", [validate, upload.single()],users.access);
router.post ("/logout", users.logout);
router.put("/:id", users.modify);
router.delete("/delete", users.delete);

module.exports = router;