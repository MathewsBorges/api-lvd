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
router.get('/colaborador/login/:cpf&:senha', ControllerColaborador.getLogin) //Busca Login 

//Rotas Empresas 
router.get('/empresa/funcionario/:loja', EmpresaController.getFuncionarios) //Busca Funcionários da Loja
router.get('/empresa/meta/:loja', EmpresaController.getMetaFarmacia) //Busca Meta da Farmácia 
router.get('/empresa/:loja', EmpresaController.getFarmacia) //Busca Informações da Farmácia
router.get('/empresa/vendas_diarias/:loja', EmpresaController.getVendasDiarias) //Busca vendas diárias da Farmácia
router.get('/empresa/vendas_mensal/:loja', EmpresaController.getVendasMensal) //Busca Vendas Mensais da Farmácia
router.get('/empresa/vendas_diarias/valor/:loja', EmpresaController.getValorVendasDiarias) //Busca o valor de vendas diárias da Farmácia
router.get('/empresa/vendas_mensal/valor/:loja', EmpresaController.getValorVendasMensal) //Busca o valor de vendas mensais da Farmácia 
router.get('/empresa/vendas_anuais/valor/:loja', EmpresaController.getValorVendasAnuais) //Busca o valor de vendas anuais da Farmácia 
router.get('/empresa/count_diarias/:loja', EmpresaController.countVendasDiarias) //Busca Quantidade de Vendas separados por funcionários por dia
router.get('/empresa/count_mensais/:loja', EmpresaController.countVendasMensais) //Busca Quantidade de Vendas separados por funcionários por mes
router.get('/empresa/count_anuais/:loja', EmpresaController.countVendasAnuais) //Busca Quantidade de Vendas por Ano
router.get('/empresa/relatorio/:loja', EmpresaController.getRelatorio) //Busca relatorio de vendas diarias, mensais e meta 



//Rotas para Gerar Valores arrecadados em todas as farmácias 
router.get('/empresa/vendas/mensal/', EmpresaController.getValorMensal);
router.get('/empresa/vendas/anual/', EmpresaController.getValorAnual);
router.get('/empresa/vendas/diaria/', EmpresaController.getValorDiaria);


//Rotas para Gerar vendas agrupados por farmácias
router.get('/empresa/relatorio_farmacia/diario/', EmpresaController.getRelatorioDiario)
router.get('/empresa/relatorio_farmacia/mensal/', EmpresaController.getRelatorioMensal)
router.get('/empresa/relatorio_farmacia/anual/', EmpresaController.getRelatorioAnual)
router.get('/empresa/relatorio_farmacia/geral/', EmpresaController.getRelatorioGeral)




//Pegar venda diárias da farmacia 

router.get('/empresa/listar_vendas/:loja', EmpresaController.getListaVendas)


//Relatorio Geral



module.exports = router;