const { response } = require('express');
const Estudiante = require('./../models/estudiantes')


const getEstudiantes = async(req,  res = response ) => {
    const estudiantes = await Estudiante.find();
    res.json({
            ok: true,
            estudiantes
 });

}
const getEstudiante = async(req,  res = response ) => {
    const uid = req.params.id;
    const estudiante = await Estudiante.findById(uid);
    res.json({
            ok: true,
            estudiante
 });

}

const crearEstudiante = async (req, res = response) => {
   
    const { 
        numero_matricula,
        email,
        codigo_carrera 
    } = req.body;


    try {

        const existeEmail = await Estudiante.findOne({ email });

        if ( existeEmail ) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya está registrado'
            });
        }
        const existeCodigo = await Estudiante.findOne({ codigo_carrera });
        
        if ( existeCodigo ) {
            return res.status(400).json({
                ok: false,
                msg: 'El codigo ya está registrado'
            });
        }

        const existeNumero_matricula= await Estudiante.findOne({ numero_matricula });

        if ( existeNumero_matricula ) {
            return res.status(400).json({
                ok: false,
                msg: 'El nuemro de matricula ya está registrado'
            });
        }
        const estudiante = new Estudiante(req.body);
            await estudiante.save(); 
            res.json({
                    ok: true,
                    estudiante
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado... revisar logs'
        });
    }
    


}

module.exports= {
    getEstudiantes,
    crearEstudiante,
    getEstudiante
}