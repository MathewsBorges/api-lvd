const Empresa = require("../models/Empresa");

class EmpresaController {
  async getFarmacia(req, res) {
    const loja = req.params.loja;
    const empresa = await Empresa.getFarmacia(loja);
    res.json(empresa);
  }

  async getFuncionarios(req, res) {
    const loja = req.params.loja;
    const funcionario = await Empresa.getFuncionarios(loja);
    res.json(funcionario);
  }

  async getMetaFarmacia(req, res) {
    const loja = req.params.loja;
    const meta = await Empresa.getMetaFarmacia(loja);
    res.json(meta);
  }

  async getVendasDiarias(req, res) {
    const loja = req.params.loja;
    const vendas = await Empresa.getVendasDiarias(loja);
    res.json(vendas);
  }

  async getVendasMensal(req, res) {
    const loja = req.params.loja;
    const vendas = await Empresa.getVendasMensal(loja);
    res.json(vendas);
  }

  async getValorVendasDiarias(req, res) {
    const loja = req.params.loja;
    const vendas = await Empresa.getValorVendasDiarias(loja);
    res.json(vendas);
  }

  async getValorVendasMensal(req, res) {
    const loja = req.params.loja;
    const vendas = await Empresa.getValorVendasMensal(loja);
    res.json(vendas);
  }

  async getValorVendasAnuais(req, res) {
    const loja = req.params.loja;
    const vendas = await Empresa.getValorVendasAnuais(loja);
    res.json(vendas);
  }

  async getValorAnual(req, res) {
    const vendas = await Empresa.getValorAnual();
    res.json(vendas);
  }

  async getValorMensal(req, res) {
    const vendas = await Empresa.getValorMensal();
    res.json(vendas);
  }

  async getValorDiaria(req, res) {
    const vendas = await Empresa.getValorDiaria();
    res.json(vendas);
  }

  async countVendasDiarias(req, res) {
    const loja = req.params.loja;
    const count = await Empresa.countVendasDiarias(loja);
    res.json(count);
  }

  async countVendasMensais(req, res) {
    const loja = req.params.loja;
    const count = await Empresa.countVendasMensais(loja);
    res.json(count);
  }

  async countVendasAnuais(req, res) {
    const loja = req.params.loja;
    const count = await Empresa.countVendasAnuais(loja);
    res.json(count);
  }

  async getRelatorio(req, res) {
    const loja = req.params.loja;
    const vendaMensal = await Empresa.getValorVendasMensal(loja);
    const vendaDiaria = await Empresa.getValorVendasDiarias(loja);
    const meta = await Empresa.getMetaFarmacia(loja);
    const relatorio = {'vendaMensal':vendaMensal, 'vendaDiaria':vendaDiaria, 'meta':meta};
    res.json(relatorio);
  }

async getRelatorioDiario(req,res){
  const relatorio = await Empresa.getRelatorioDiario();
  res.json(relatorio)
}

async getRelatorioMensal(req,res){
  const relatorio = await Empresa.getRelatorioMensal();
  res.json(relatorio)
}

async getRelatorioAnual(req,res){
  const relatorio = await Empresa.getRelatorioAnual();
  res.json(relatorio)
}






}

module.exports = new EmpresaController();
