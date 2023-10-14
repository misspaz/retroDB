const mongoose = require("mongoose");

const url = "mongodb+srv://Betulioo:D363u7X1EplrpKkL@cluster0.josec2n.mongodb.net/retroshop?retryWrites=true&w=majority&appName=AtlasApp"; // link de mongodb

const connectDb = async () => {
    try {
        const db = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const { name, host } = db.connection;
        console.log(`Nombre de la BD ${name} host : ${host}`)

    } catch (error) {
        console.log(error)
    }
}
module.exports = { connectDb }