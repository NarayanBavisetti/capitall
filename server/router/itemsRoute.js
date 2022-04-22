const express = require("express");
const router = express.Router();
const {sellItems,purchasedItems,soldItems,yourItems,allItems} = require("../controller/itemsController")
const protect = require("../middleware/authMiddleware")

router.post("/sell",protect,sellItems);
router.get("/purchased",purchasedItems);
router.get("/sold",protect,soldItems)
router.get("/youritems",protect,yourItems)
router.get("/",allItems)

module.exports = router;
