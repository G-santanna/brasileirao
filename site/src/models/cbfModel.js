var database = require("../database/config")

function cadastrarCamp(camp, patrocinador, premiacao) {
    var instrucao = `
        INSERT INTO campeonato (nome, patrocinador, premiacao) VALUES ('${camp}', '${patrocinador}', '${premiacao}');
    `;
    return database.executar(instrucao);
}

function cadastrarRodadas(rodada, idCampeonato, datahora) {
    var instrucao = `
        INSERT INTO rodada (idRodada, fkCampeonato, dateHora) VALUES ('${rodada}', '${idCampeonato}', '${datahora}');
    `;
    return database.executar(instrucao);
}

function cadastrarTime(id, nome, fundacao, cidade, estado){
    var instrucao = `
        INSERT INTO team (idTime , nome, fundacao, cidade, estado) VALUES ('${id}', '${nome}', '${fundacao}', '${cidade}', '${estado}');
    `;
    return database.executar(instrucao);
}

function selecionarTime(){
    var instrucao = `
        select idTime from team;
    `;
    return database.executar(instrucao);
}


module.exports = {
    cadastrarCamp,
    cadastrarRodadas,
    cadastrarTime,
    selecionarTime
};