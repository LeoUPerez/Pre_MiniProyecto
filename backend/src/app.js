//TODO: Configuración del servidor
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

//Estableciendo puerto
app.set('port', process.env.PORT || 3000);

//---Middlewares--- //! Es una funcion que procesa datos antes de que nuestro servidor los reciba
app.use(cors()); //*Nos permite hacer peticiones desde otro servidor
app.use(morgan('dev')); //*Permite ver por consola lo que va llegando al servidor
app.use(express.urlencoded({extended: false})); //*Permite entender los datos que que vienen desde formularios, datos no muy pesados (EJE: textos)
app.use(express.json()); //*Permite al servidor recibir formatos JSON y entenderlos

app.get('/', (req, res)=>{
    res.send('API esta en funcionamiento');
})

// Ruta para api de usuario
app.use('/api/usuarios', require('./routes/usuario'));

module.exports = app;