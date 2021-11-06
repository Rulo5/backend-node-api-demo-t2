/*ruta:/api/estudiantes */

const{Router} = require('express');
const{getEstudiantes} = require('../controllers/estudiantes');

const router = Router();

router.get('/',getEstudiantes);





//exportacion 
module.exports = router;