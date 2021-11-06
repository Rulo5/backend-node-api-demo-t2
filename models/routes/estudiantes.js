/*ruta:/api/estudiantes */

const{Router} = require('express');
const router = Router();


//controlador, cuando se realice una consulta
router.get('/', (req, res) => {

    res.json({

        ok: true,
        msg:'hola'
    });
});

//exportacion 
module.exports = router;