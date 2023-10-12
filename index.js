const express = require("express");
const { connectDb } = require("./src/utils/database");
const routerVideogames = require("./src/api/routes/videogames.routes");
const routerShops = require("./src/api/routes/shop.routes");

const server = express();

server.use(express.json());

server.use("/videogames", routerVideogames);

server.use("/shops", routerShops);


connectDb();

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Escuchando por el puerto " + PORT);
});
