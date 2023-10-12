const express = require("express")

const { register, login, profile, getUser } = require("../controllers/user.controller");
const { isAdmin } = require("../../middleware/auth")
const { isAuth } = require("../../middleware/auth")
const router = express.Router()

router.post("/register", register);
router.post("/login", login);
router.get("/profile", [isAuth], profile); 
router.get("/allusers", [isAdmin], getUser);




module.exports = router;