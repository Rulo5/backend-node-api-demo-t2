
const { Schema, model} = require('mongoose');

//contruccion de la tabla
const estudianteSchema = Schema({
 
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

estudianteSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    return {uid:_id,...object};
})




module.exports = model ('estudiante',estudianteSchema);