const connection = require("../database/connection");

class Empresa {
  async getFuncionarios(loja) {
    const [rows] = await connection.query(
      `select * from colaborador where loja = ${loja} and status = 'A' and perfil != 11`
    );
    return rows;
  }

  async getMetaFarmacia(loja) {
    const [rows] = await connection.query(
      `select meta,codigo from metas where codigo = ${loja} order by numero desc limit 1`
    );
    return rows;
  }

  async getMetas(){
    const [rows] = await connection.query(
      'select meta, codigo from metas where mes = month(current_date()) and ano = year(current_date())'
    );
    return rows;
  }

  async getFarmacia(loja) {
    const [rows] = await connection.query(
      `select codigo, nome, nome_res,endereco,numero,bairro,cep,telefone,cnpj from empresa where codigo = ${loja}`
    );
    return rows;
  }

  async getVendasDiarias(loja) {
    const [rows] = await connection.query(
      `SELECT vendasm.numvenda, vendasm.datae, vendasm.horae, vendasm.atendente, vendasm.vlr_liquido, colaborador.nome AS nome_atendente FROM vendasm INNER JOIN colaborador ON vendasm.atendente = colaborador.codigo where datae=current_date() and empresa = ${loja} order by horae;`
    );
    return rows;
  }

  async getVendasMensal(loja) {
    const [rows] = await connection.query(
      `SELECT vendasm.numvenda, vendasm.datae, vendasm.horae, vendasm.atendente, vendasm.vlr_liquido, colaborador.nome AS nome_atendente FROM vendasm INNER JOIN colaborador ON vendasm.atendente = colaborador.codigo WHERE MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja}`
    );
    return rows;
  }

  async getValorVendasDiarias(loja) {
    const [rows] = await connection.query(
      `select sum(vlr_liquido) as total from vendasm where datae = current_date() and empresa = ${loja} and st_caixa = 'PA' and origem != 'REC'`
    );
    return rows;
  }

  async getValorVendasMensal(loja) {
    const [rows] = await connection.query(
      `select sum(vlr_liquido) as total from vendasm WHERE MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja} and st_caixa = 'PA' and origem != 'REC'`
    );
    return rows;
  }

  async getValorVendasAnuais(loja) {
    const [rows] = await connection.query(
      `select sum(vlr_liquido) as total from vendasm WHERE YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja} `
    );
    return rows;
  }

  async countVendasDiarias(loja) {
    const [rows] = await connection.query(
      `select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas, colaborador.nome as nome_atendente from vendasm inner join colaborador on vendasm.atendente = colaborador.codigo where datae = current_date() and empresa = ${loja} group by atendente`
    );
    return rows;
  }

  async countVendasMensais(loja) {
    const [rows] = await connection.query(
      `select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas, colaborador.nome as nome_atendente, perfil.nome as perfil from vendasm inner join colaborador on vendasm.atendente = colaborador.codigo inner join perfil on perfil.codigo  = colaborador.perfil where MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja} group by atendente order by total_vendas desc`
    );
    return rows;
  }

  async countVendasAnuais(loja) {
    const [rows] = await connection.query(
      `select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas from vendasm  where YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${loja}`
    );
    return rows;
  }

  //Todas as Farmacias

  async getValorMensal() {
    const [rows] = await connection.query(
      `select sum(vlr_liquido) as total from vendasm WHERE MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) `
    );
    return rows;
  }

  async getValorAnual() {
    const [rows] = await connection.query(
      `select sum(vlr_liquido) as total from vendasm WHERE YEAR(datae) = YEAR(CURRENT_DATE())`
    );
    return rows;
  }

  async getValorDiaria() {
    const [rows] = await connection.query(
      `select sum(vlr_liquido) as total from vendasm where datae = current_date()`
    );
    return rows;
  }

  async getRelatorioDiario() {
    const [rows] = await connection.query(
      `select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas, empresa.codigo, empresa.nome_res as empresa from vendasm inner join empresa on vendasm.empresa = empresa.codigo where datae = current_date() and obs_ven = '' group by empresa`
    );
    return rows;
  }

  async getRelatorioMensal() {
    const [rows] = await connection.query(
      `select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas, empresa.codigo, empresa.nome_res as empresa from vendasm inner join empresa on vendasm.empresa = empresa.codigo  where MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and obs_ven = '' group by empresa`
    );
    return rows;
  }

  async getRelatorioAnual() {
    const [rows] = await connection.query(
      `select count(*) as numero_vendas, sum(vlr_liquido) as total_vendas, empresa.codigo, empresa.nome_res as empresa from vendasm inner join empresa on vendasm.empresa = empresa.codigo where YEAR(datae) = YEAR(CURRENT_DATE()) and obs_ven = '' group by empresa`
    );
    return rows;
  }

  async getListaVendas(loja) {
    const [rows] = await connection.query(`SELECT v.empresa, v.numvenda,  v.datae, v.horae, v.vlr_liquido , GROUP_CONCAT(p.nome) AS produtos, c.nome AS colaborador
    FROM vendasm v
    INNER JOIN vendasi i ON v.numvenda = i.numvenda 
    INNER JOIN produto p ON i.cod_prod = p.codigo 
    INNER JOIN colaborador c ON v.atendente = c.codigo 
    WHERE v.datae = CURRENT_DATE() AND v.empresa = ${loja} 
    GROUP BY v.numvenda, v.empresa, v.datae, v.horae, v.vlr_liquido, c.nome
    ORDER BY v.horae DESC;`);
    return rows;
  }



async getNumeroVendas(id){
  const [rows] = await connection.query(`select count(*) as numero from vendasm WHERE MONTH(datae) = MONTH(CURRENT_DATE()) AND YEAR(datae) = YEAR(CURRENT_DATE()) and empresa = ${id}`)
  return rows;
}

}

module.exports = new Empresa();


