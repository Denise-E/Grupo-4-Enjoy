const express = require("express");
const router = express.Router();
const last = require("../../controllers/api/lastApi");


router.get('/user', last.user);
router.get('/product', last.product);

module.exports = router;