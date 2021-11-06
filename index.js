require('dotenv').config();
const express = require('express');
const cors = require('cors');


const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();
//configurar cors,
app.use(cors());


// Base de datos
dbConnection();

console.log(process.env)


//rutas 
app.get('/', (req, res) => {

    res.json({

        ok: true,
        msg:'hola'
    });
});


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});