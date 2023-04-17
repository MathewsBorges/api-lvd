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
}

module.exports = new EmpresaController();
