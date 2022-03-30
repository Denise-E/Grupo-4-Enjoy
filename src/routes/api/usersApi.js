const express = require("express");
const router = express.Router();
const usersApi = require("../../controllers/api/usersApi");


router.get('/', usersApi.list)
router.get('/:id', usersApi.show)

module.exports = router;