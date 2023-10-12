const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, "kmcdolfsohs");
}

const generateToken = (id, email) => {
    return jwt.sign({ id, email }, "kmcdolfsohs", { expiresIn: '3h' })
}



module.exports = { generateToken, verifyToken }