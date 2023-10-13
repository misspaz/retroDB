const express = require("express")
const { getVideogame, postVideogame,  putVideogame, deleteVideogame, getVideogamebyTitle } = require("../controllers/videogames.controllers")

const router = express.Router()

router.get("/allvideogames", getVideogame);
router.post("/uploadvideogame", postVideogame);
router.get("/:titleVideogame", getVideogamebyTitle);
router.put("/:id", putVideogame);
router.delete("/:id", deleteVideogame)



module.exports = router;