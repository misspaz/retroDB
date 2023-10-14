const mongoose = require('mongoose');
//const dotenv = require('dotenv');
//dotenv.config();

// Importamos el modelo videogame.models.js en este nuevo archivo.
const Videogame = require('../api/models/videogames.model');

const videogames = [{
    "title": "Cool World", 
    "genre": "Acción", 
    "year": 1993,
    "región": "Eu",
    "image": ""
},

{
    "title": "Mighty Morphin Power Rangers", 
    "genre": "Acción", 
    "year": 1993,
    "región": "USA",
    "image": ""
},

{
    "title": "Mega Man V", 
    "genre": "Acción", 
    "year": 1994,
    "región": "Eu",
    "image": ""
}, 

{
    "title": "Mario & Yoshi", 
    "genre": "Puzzle", 
    "year": 1992,
    "región": "Eu",
    "image": ""
}, 

{
    "title": "Mortal Kombat", 
    "genre": "Lucha", 
    "year": 1994,
    "región": "Eu",
    "image": ""
}, 

{
    "title": "Pokémon Blue Version", 
    "genre": "RPG", 
    "year": 1999,
    "región": "Eu",
    "image": ""
}, 

{
    "title": "Pokémon Red Version", 
    "genre": "RPG", 
    "year": 1999,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "Pokémon Yellow Version: Special Pikachu Edition", 
    "genre": "RPG", 
    "year": 2000,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "Superman", 
    "genre": "Acción", 
    "year": 1997,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "T2: The Arcade Game", 
    "genre": "Juego de Pistola", 
    "year": 1993,
    "región": "Usa",
    "image": ""
}, 
{
    "title": "The Amazing Spider-Man", 
    "genre": "Acción", 
    "year": 1990,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "The Amazing Spider-Man 2", 
    "genre": "Acción", 
    "year": 1992,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "The Legend of Zelda: Link's Awakening", 
    "genre": "Acción, Aventura", 
    "year": 1993,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "Who Framed Roger Rabbit", 
    "genre": "Aventura", 
    "year": 1991,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "Animaniacs", 
    "genre": "Acción", 
    "year": 1995,
    "región": "Usa",
    "image": ""
}, 
{
    "title": "Asterix & Obelix", 
    "genre": "Acción", 
    "year": 1995,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "Bart Simpson's Escape from Camp Deadly", 
    "genre": "Acción", 
    "year": 1993,
    "región": "Eu",
    "image": ""
}, 
{
    "title": "Batman: The Video Game", 
    "genre": "Acción", 
    "year": 1990,
    "región": "Usa",
    "image": ""
}, 
{
    "title": "Beetlejuice", 
    "genre": "Acción", 
    "year": 1992,
    "región": "USa",
    "image": ""
}, 
{
    "title": "Disney's Aladdin", 
    "genre": "Acción", 
    "year": 1993,
    "región": "Usa",
    "image": ""
} ];

// En este caso, nos conectaremos de nuevo a nuestra base de datos
// pero nos desconectaremos tras insertar los documentos
mongoose.connect("mongodb+srv://Betulioo:D363u7X1EplrpKkL@cluster0.josec2n.mongodb.net/retroshop?retryWrites=true&w=majority&appName=AtlasApp", { // aqui va el link de mongodb
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
		// Utilizando Videogame.find() obtendremos un array con todos los juegos de la db
    const allVideogames = await Videogame.find();
		
		// Si existen juegos previamente, dropearemos la colección
    if (allVideogames.length) {
      await Videogame.collection.drop(); //La función drop borra la colección
      console.log('Drop database')
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		// Una vez vaciada la db de los juegos, usaremos el array videogames
		// para llenar nuestra base de datos con todas los videojuegos.
		await Videogame.insertMany(videogames);
        console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
	// Por último nos desconectaremos de la DB.
  .finally(() => mongoose.disconnect());





  // node server/api/models/videogames.model.js


  // Si todo ha ido bien debería aparecer en consola el texto: DatabaseCreated