const express = require("express")
const { getShop, postShop, putShop, deleteShop, getShopbyName } = require("../controllers/shop.controllers")

const router = express.Router()

router.get("/", getShop);
router.post("/", postShop);
router.get("/:nameShop", getShopbyName);
router.put("/:id", putShop);
router.delete("/:id", deleteShop)



module.exports = router;