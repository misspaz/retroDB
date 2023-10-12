const express = require("express");
const { connectDb } = require("./src/utils/database");

const server = express();

server.use(express.json());

connectDb();

const PORT = 5000;
server.listen(PORT, () => {
  console.log("Escuchando por el puerto " + PORT);
});
