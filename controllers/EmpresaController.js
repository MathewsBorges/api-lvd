const { getListaVendas } = require("../models/Empresa");
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
    const numeroVendas = await Empresa.getNumeroVendas(loja);
    const meta = await Empresa.getMetaFarmacia(loja);
    const relatorio = {'codigo': loja, 'total_vendas':vendaMensal[0].total, 'totalVendasDiarias':vendaDiaria[0].total, 'meta':meta[0].meta, 'numero_vendas':numeroVendas[0].numero};
    res.json(relatorio);
  }

  async getRelatorioGeral (req, res){
    let vendasMensal = await Empresa.getRelatorioMensal();
    const vendasDiaria = await Empresa.getRelatorioDiario();
    const metas = await Empresa.getMetas();

    vendasMensal.forEach(relatorio => {
      for (let i = 0; i < metas.length; i++) {
          if(metas[i].codigo == relatorio.codigo){
            let meta = metas[i].meta;
            relatorio.meta = meta;
          }
        
      }

      for (let i = 0; i < vendasDiaria.length; i++) {
        if(vendasDiaria[i].codigo == relatorio.codigo){
          relatorio.vendasDiarias = vendasDiaria[i].numero_vendas
          relatorio.totalVendasDiarias = vendasDiaria[i].total_vendas
        }
        
      }



    });

    const relatorio = [...vendasMensal]
    res.json(relatorio)
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

async getListaVendas(req,res){
  const loja = req.params.loja;
  const relatorio = await Empresa.getListaVendas(loja);
  res.json(relatorio)
}






}

module.exports = new EmpresaController();
