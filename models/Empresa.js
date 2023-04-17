const connection = require('../database/connection')

class Empresa{

 async getFuncionarios(loja){
    const [rows] = await connection.query(`select * from colaborador where loja = ${loja}`)
    return rows
}

async getMetaFarmacia(loja){
    const [rows] = await connection.query(`select * from metas where codigo = ${loja} order by mes and ano desc limit 1`)
    return rows
}  


async getFarmacia(loja){
    const [rows] = await connection.query(`select * from empresa where codigo = ${loja}`)
    return rows
}  


}



module.exports = new Empresa()