const express = require("express");
const router = express.Router();
const { savecryptoData, getCryptoData } = require("../Controllers/cryptoController");

router.get("/savecryptoData", savecryptoData);
router.get("/", getCryptoData);

module.exports = router;