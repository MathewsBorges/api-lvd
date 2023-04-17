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



}



module.exports = new Colaborador()