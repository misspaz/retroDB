const express = require("express");
const { connectDb } = require("./src/utils/database");
const routerVideogames = require("./src/api/routes/videogames.routes");
const routerShops = require("./src/api/routes/shop.routes");
const routesUser = require("./src/api/routes/user.routes");
const cors = require("cors")
const cloudinary = require("cloudinary").v2 // importar cloudinary
const server = express();

//En este paso añadimos cors y definimos las direcciones que van a tener permiso para utilizar nuestra API. De momento en local:
server.use(cors({
  origin: 'http://localhost:5000',
  credentials: true
}));

cloudinary.config({ 
  cloud_name: 'dn6ydeyei', 
  api_key: '181969568793396', 
  api_secret: 'tIzCdeIzuNVyypIBPwBAyilhsac' 
});


server.use(express.json());
connectDb();

server.use("/videogames", routerVideogames);

server.use("/shops", routerShops);

server.use("/user", routesUser);



server.disable('x-powered-by');
const PORT = 5000;
server.listen(PORT, () => {
  console.log("Escuchando por el puerto " + PORT);
});
