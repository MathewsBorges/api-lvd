const connection = require('../database/connection')

class Colaborador{

 async getColaboradores(){
    const [rows] = await connection.query("select * from colaborador where status = 'A'")
    return rows
}

async getColaboradorByID(id){
    const [rows] = await connection.query(`select * from colaborador where codigo = ${id}`)
    return rows 
}

async getLogin(cpf, senha) {
    const [rows] = await connection.query(`select * from colaborador where cpf = '${cpf}' and data_n = '${senha}' and perfil=2 or perfil = 7 `)
    return rows
}



}



module.exports = new Colaborador()