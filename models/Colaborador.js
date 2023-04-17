const connection = require('../database/connection')

class Colaborador{

 async getColaboradores(){
    const [rows] = await connection.query('select * from colaborador')
    return rows
}

async getColaboradorByID(id){
    const [rows] = await connection.query(`select * from colaborador where codigo = ${id}`)
    return rows 
}



}



module.exports = new Colaborador()