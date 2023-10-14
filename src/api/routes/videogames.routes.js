const express = require("express")
const { getVideogame, postVideogame,  putVideogame, deleteVideogame, getVideogamebyTitle } = require("../controllers/videogames.controllers")

const router = express.Router()

router.get("/getallvideogames", getVideogame);
router.post("/uploadvideogames", postVideogame);
router.get("/:titleVideogame", getVideogamebyTitle);
router.put("/:id", putVideogame);
router.delete("/:id", deleteVideogame)



module.exports = router;