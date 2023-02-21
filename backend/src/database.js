// configuracion de base de datos
const mongoose = require('mongoose');

// conexión 
// ? 
const URI = 'mongodb+srv://Leo:Fabiolaperez1@personalcluster.cgy24qg.mongodb.net/test'

mongoose.set('strictQuery', false);
mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log(`Conectado a la base de datos ${URI}`);
})