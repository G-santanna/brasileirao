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

function cadastrarJogos(idJogo,idCamp, rodada, mandante, visitante) {
    var instrucao = `
        INSERT INTO jogo (idJogo, idRodada, idCampeonato, idTime) VALUES 
        (${idJogo}, '${rodada}', '${idCamp}', '${mandante}'),
        (${idJogo}, '${rodada}', '${idCamp}', '${visitante}');
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

function buscarCampeonatos(){
    var instrucao = `
        select idCampeonato as id, nome from campeonato;
    `;
    return database.executar(instrucao);
}

function buscarRodadas(idCamp){
    var instrucao = `
        select idRodada as id from rodada where fkCampeonato = ${idCamp};
    `;
    return database.executar(instrucao);
}

function buscarTimes(){
    var instrucao = `
        select idTime as id, nome from team;
    `;
    return database.executar(instrucao);
}

module.exports = {
    cadastrarCamp,
    cadastrarRodadas,
    cadastrarTime,
    cadastrarJogos,
    selecionarTime,
    buscarCampeonatos,
    buscarRodadas,
    buscarTimes
};