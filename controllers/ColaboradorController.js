const Colaborador = require('../models/Colaborador')

class ColaboradorController{


 async getColaborador(req,res){
    const colaborador =  await Colaborador.getColaboradores();
    res.json(colaborador)
}

async getColaboradorByID(req,res){
    const id = req.params.id
    const colaborador =  await Colaborador.getColaboradorByID(id);
    res.json(colaborador)
}


}


module.exports = new ColaboradorController();