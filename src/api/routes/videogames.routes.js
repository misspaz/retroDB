const express = require("express")
const { getVideogame, postVideogame,  putVideogame, deleteVideogame, getVideogamebyTitle } = require("../controllers/videogames.controllers")

const router = express.Router()
const upload = require("../../middleware/upload.file")

router.get("/", getVideogame);
router.post("/", upload.single("image"), postVideogame); // aqui debo tener el middleware para las imagenes

router.get("/:titleVideogame", getVideogamebyTitle);
router.put("/:id", putVideogame);
router.delete("/:id", deleteVideogame)



module.exports = router;