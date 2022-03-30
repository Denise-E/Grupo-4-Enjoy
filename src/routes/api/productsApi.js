const express = require("express");
const router = express.Router();
const productsApi = require("../../controllers/api/productsApi");


router.get('/', productsApi.list)
router.get('/:id', productsApi.show)

module.exports = router;