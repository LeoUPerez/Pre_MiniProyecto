const usuario = {};

const modelo = require('../models/ModelUsuario.js');

usuario.ObtenerUsuario = async (req, res) =>{
    const usuarios = await modelo.find();
    res.json(usuarios);
}
usuario.CreateUsuario = async (req, res) =>{
    const {nombre, apellido, edad, telefono, correo} = req.body;
    const NuevoUsuario = new modelo({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        telefono: telefono,
        correo: correo
    }) 
    await NuevoUsuario.save();
    res.json({message:"El usuario ha sido guardao"})
}
usuario.ObtenerUsua = async (req, res) =>{
    const usuario = await modelo.findById(req.params.id);
    res.json(usuario);
}
usuario.DeleteUsuario = async (req, res) =>{
    await modelo.findByIdAndDelete(req.params.id);
    res.json({message: "Usuario ha sido eliminao"})
}
usuario.UpdateUsuario = async (req, res) =>{
    const {nombre, apellido, edad, telefono, correo} = req.body;
    await modelo.findByIdAndUpdate(req.params.id,{
        nombre,
        apellido,
        edad,
        telefono,
        correo
    });
    res.json({message: "Usuario actualizao"})
}

module.exports = usuario;