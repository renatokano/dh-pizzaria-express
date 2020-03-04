const express = require("express");
let router = express.Router();
let controller = require("../controllers/cardapioController");

router.get("/", controller.index);

router.get("/cadastrar/:nome/:preco", controller.cadastrar);

module.exports = router;