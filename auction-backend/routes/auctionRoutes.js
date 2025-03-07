const express = require("express");
const { getItems, addItem } = require("../controllers/auctionController");

const router = express.Router();

router.get("/", getItems);
router.post("/", addItem);

module.exports = router;
