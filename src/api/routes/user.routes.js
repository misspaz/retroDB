const express = require("express")

const { register, login, profile } = require("../controllers/user.controller")
const { isAuth } = require("../../middleware/auth")
const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.get("/profile", [isAuth], profile); 


module.exports = router;