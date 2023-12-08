var database = require("../database/config")

function cadastrarCamp(camp, patrocinador, premiacao) {
    var instrucao = `
        INSERT INTO campeonato (nome, patrocinador, premiacao) VALUES ('${camp}', '${patrocinador}', '${premiacao}');
    `;
    return database.executar(instrucao);
}


module.exports = {
    cadastrarCamp
};