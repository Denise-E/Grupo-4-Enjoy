const express = require("express");
const file = require("../controllers/files");
const router = express.Router();
const path = require ("path");
const multer = require ("multer");
const upload = multer ({storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, path.resolve (__dirname, "../../uploads")),
      filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)),
})})

router.get("/", file.upload);

router.post("/", [upload.any()],file.store);

module.exports = router;