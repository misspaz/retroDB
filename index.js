const express = require("express");
const { connectDb } = require("./src/utils/database");
const cors = require("cors")
const routerVideogames = require("./src/api/routes/videogames.routes");
const routerShops = require("./src/api/routes/shop.routes");
const routesUser = require("./src/api/routes/user.routes");


const server = express();
server.use(cors({
  origin:"http://localhost:5000",
  credentials:true
}));
server.use(express.json());
connectDb();

server.use("/videogames", routerVideogames);

server.use("/shops", routerShops);

server.use("/user", routesUser);

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Escuchando por el puerto " + PORT);
});
