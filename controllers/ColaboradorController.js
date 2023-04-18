const Colaborador = require("../models/Colaborador");

class ColaboradorController {
  async getColaborador(req, res) {
    const colaborador = await Colaborador.getColaboradores();
    res.json(colaborador);
  }

  async getColaboradorByID(req, res) {
    const id = req.params.id;
    const colaborador = await Colaborador.getColaboradorByID(id);
    res.json(colaborador);
  }

  async countVendasDiarias(req, res) {
    const id = req.params.id;
    const count = await Colaborador.countVendasDiarias(id);
    res.json(count);
  }

  async getLogin(req, res) {
    const cpf = req.params.cpf;
    const senha = req.params.senha;
    if (cpf === "000.000.000-00") {
      res.json("Dados Incorretos no Database, consulte um Administrador");
    }else{
      const colaborador = await Colaborador.getLogin(cpf, senha);
      colaborador.length > 0 ? res.json(colaborador) : res.json("Dados de Login incorretos, Tente Novamente");
    }


  }
}

module.exports = new ColaboradorController();
