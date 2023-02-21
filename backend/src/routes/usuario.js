const {Router} = require('express');
const router = Router();

const { ObtenerUsuario, CreateUsuario, ObtenerUsua, DeleteUsuario, UpdateUsuario } = require('../controller/usuario.controller.js')

router.route('/')
    .get(ObtenerUsuario)
    .post(CreateUsuario)

router.route('/:id')
    .get(ObtenerUsua) //*Este ObtenerUsua es en base al ID
    .delete(DeleteUsuario)
    .put(UpdateUsuario)

module.exports = router;