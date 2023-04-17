const express = require('express')
const router = express.Router()

const ControllerColaborador  = require("../controllers/ColaboradorController");
const EmpresaController = require('../controllers/EmpresaController');

router.get('/', (req,res)=>{
    res.send('API REDE LVD')
} )

//Rotas Colaboradores
router.get('/colaborador/', ControllerColaborador.getColaborador) //Busca todos os Colaboradores
router.get('/colaborador/:id', ControllerColaborador.getColaboradorByID) //Busca colaborador pelo id 

//Rotas Empresas 
router.get('/empresa/funcionario/:loja', EmpresaController.getFuncionarios) //Busca Funcionários da Loja
router.get('/empresa/meta/:loja', EmpresaController.getMetaFarmacia) //Busca Meta da Farmácia 
router.get('/empresa/:loja', EmpresaController.getFarmacia) //Busca Informações da Farmácia
router.get('/empresa/vendas_diarias/:loja', EmpresaController.getVendasDiarias) //Busca vendas diárias da Farmácia
router.get('/empresa/vendas_mensal/:loja', EmpresaController.getVendasMensal) //Busca Vendas Mensais da Farmácia
router.get('/empresa/vendas_diarias/valor/:loja', EmpresaController.getValorVendasDiarias) //Busca o valor de vendas diarias da Farmácia
router.get('/empresa/vendas_mensal/valor/:loja', EmpresaController.getValorVendasMensal) //Busca o valor de vendas mensais da Farmácia 
router.get('/empresa/count_diarias/:loja', EmpresaController.countVendasDiarias) //Busca Quantidade de Vendas separados por funcionários por dia
router.get('/empresa/count_mensais/:loja', EmpresaController.countVendasMensais) //Busca Quantidade de Vendas separados por funcionários por mes



module.exports = router;