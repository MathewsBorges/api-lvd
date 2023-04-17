const connection = require('../database/connection')

class Empresa{

 async getFuncionarios(loja){
    const [rows] = await connection.query(`select * from colaborador where loja = ${loja} and status = 'A'`)
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

async getVendasDiarias(loja){
    const [rows] = await connection.query(`SELECT vendasm.numvenda, vendasm.datae, vendasm.horae, vendasm.atendente, vendasm.vlr_liquido, colaborador.nome AS nome_atendente FROM vendasm INNER JOIN colaborador ON vendasm.atendente = colaborador.codigo where datae=current_date() and empresa = ${loja} order by horae;`)
    return rows

}

async getVendasMensal(loja){
    const [rows] = await connection.query(`SELECT vendasm.numvenda, vendasm.datae, vendasm.horae, vendasm.atendente, vendasm.vlr_liquido, colaborador.nome AS nome_atendente FROM vendasm INNER JOIN colaborador ON vendasm.atendente = colaborador.codigo WHERE MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja}`)
    return rows
}

async getValorVendasDiarias(loja){
    const [rows] = await connection.query(`select sum(vlr_liquido) as total from vendasm where datae = current_date() and empresa = ${loja} `)
    return rows
}


async getValorVendasMensal(loja){
    const [rows] = await connection.query(`select sum(vlr_liquido) as total from vendasm WHERE MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja} `)
    return rows
}

async getValorVendasAnuais(loja){
    const [rows] = await connection.query(`select sum(vlr_liquido) as total from vendasm WHERE YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja} `)
    return rows
}

async countVendasDiarias(loja){
    const [rows] = await connection.query(`select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas, colaborador.nome as nome_atendente from vendasm inner join colaborador on vendasm.atendente = colaborador.codigo where datae = current_date() and empresa = ${loja} group by atendente`)
    return rows
}

async countVendasMensais(loja){
    const [rows] = await connection.query(`select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas, colaborador.nome as nome_atendente from vendasm inner join colaborador on vendasm.atendente = colaborador.codigo where MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja} group by atendente`)
    return rows
}

async countVendasAnuais(loja){
    const [rows] = await connection.query(`select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas from vendasm  where YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja}`)
    return rows
}



}



module.exports = new Empresa()