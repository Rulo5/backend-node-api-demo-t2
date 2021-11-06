/*ruta:/api/estudiantes */

const { Router } = require('express');
const{ getEstudiantes,crearEstudiante,getEstudiante } = require('../controllers/estudiantes');

const router = Router();

router.get('/',getEstudiantes);

router.get('/:id',getEstudiante);

router.post('/',crearEstudiante);


//exportacion 
module.exports = router;