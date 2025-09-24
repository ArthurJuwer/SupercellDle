const express = require("express")

const ClashRoyaleController = require("./controllers/ClashRoyaleController")

const router = express.Router();

router.get("/clashroyale", ClashRoyaleController.index);

module.exports = router

