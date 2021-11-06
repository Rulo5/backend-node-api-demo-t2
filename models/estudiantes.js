
const { Schema, model} = require('mongoose');

//contruccion de la tabla
const estudiante = Schema({
 
    numero_matricula:{
        type:Number,
        require: true,
        unique: true
    },
    fecha_matricula:{
        type: Date,
        require: true,
    },
    nombre:{
        type:String,
        require: true,
    },
    apellido_paterno:{
        type:String,
        require: true,
    }, 
    apellidp_mateno:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true,
        unique: true
    },
    codigo_carrera:{
        type:Number,
        require: true,
    },
});

module.exports = model ('estudiante',estudianteSchema);