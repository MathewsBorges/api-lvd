const express = require('express')
const router = express.Router()

const ControllerColaborador  = require("../controllers/ColaboradorController");
const EmpresaController = require('../controllers/EmpresaController');

router.get('/', (req,res)=>{
    res.send('API REDE LVD')
} )

router.get('/colaborador/', ControllerColaborador.getColaborador)
router.get('/colaborador/:id', ControllerColaborador.getColaboradorByID)
router.get('/empresa/funcionario/:loja', EmpresaController.getFuncionarios)
router.get('/empresa/meta/:loja', EmpresaController.getMetaFarmacia)
router.get('/empresa/:loja', EmpresaController.getFarmacia)


module.exports = router;