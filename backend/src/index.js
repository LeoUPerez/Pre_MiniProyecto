//TODO: arranque del servidor
require('dotenv').config();

const app = require('../src/app.js');
require('./database.js')

//*Ejecución del servidor
//? async: nos permite crear eventos según los que se ejecutarán ciertas acciones. Esto quiere decir que podemos preparar acciones en caso de que ocurran ciertas situaciones.
//? await: provoca que la ejecución de una función async sea pausada hasta que una Promise sea terminada o rechazada

async function main(params) {
    await app.listen(app.get('port'));
    console.log(`App funcionando en el puerto ${app.get('port')}`);
}

main();