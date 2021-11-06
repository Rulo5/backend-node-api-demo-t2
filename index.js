require('dotenv').config();
const express = require('express');
const cors = require('cors');


const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();
//configurar cors,
app.use(cors());

app.use(express.json());


// Base de datos
dbConnection();


//rutas 
// Rutas
app.use( '/api/estudiantes', require('./routes/estudiantes') );


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT );
});