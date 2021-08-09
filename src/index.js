//Variables de Entorno
require('dotenv').config();

//Importa la configuración de Express
const app = require('./app');
require('./database');

//Correr en Asíncrono
const main = async () =>{
    await app.listen(app.get('port'));
    console.log(`Server on port ${app.get('port')}`);
}

main();