const {Schema, model} = require('mongoose');

const SchemeUser = new Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    telefono: Number,
    correo: String
})

module.exports = model('Usuario', SchemeUser);