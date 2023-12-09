var cbfModel = require("../models/cbfModel");

function cadastrarCampTime(req,res){
    var camp = req.body.campeonatoFront;
    var patrocinador = req.body.patrocinadorFront;
    var premiacao = req.body.premiacaoFront;
    var rodadas = req.body.rodadasFront;

    cbfModel.cadastrarCamp(camp,patrocinador,premiacao)
            .then(
                function (resultado) {
                    // res.status(200).json(resultado);
                    for (let i = 0; i < rodadas; i++) {
                        // const element = array[i];
                        let data = new Date(Date.now()+(2.592e+8*i)).toISOString().slice(0, 10)+" 16:00:00";

                        cbfModel.cadastrarRodadas(i+1, resultado.insertId, data).then((resultado) =>{
                            // res.status(200).json(resultado);
                        })
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao coletar os dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function cadastrarTime(req, res){
    var times = req.body.times;

    for (let i = 0; i < times.length; i++) {
        const time = times[i];
        cbfModel.cadastrarTime(time.team.id, time.team.name, time.team.founded, time.venue.city.split(',')[0], time.venue.city.split(',')[1])
            .then(
                function (resultado) {
                    // res.status(200).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao coletar os dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarJogos(req, res){
    var camp = req.body.camp;
    var rodada = req.body.rodada;
    var jogos = req.body.jogos;

    for (let i = 0; i < jogos.length; i++) {
        cbfModel.cadastrarJogos(i+1,camp, rodada, jogos[i].mandante, jogos[i].visitante)
            .then(
                function (resultado) {
                    // res.status(200).json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao coletar os dados! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrarJogador(req, res){
    cbfModel.selecionarTime()
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao coletar os dados! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function buscarCampeonatos(req, res){
    cbfModel.buscarCampeonatos()
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao coletar os dados! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function buscarRodadas(req, res){
    cbfModel.buscarRodadas(req.params.idCamp)
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao coletar os dados! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

function buscarTimes(req, res){
    cbfModel.buscarTimes()
    .then(
        function (resultado) {
            res.status(200).json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log(
                "\nHouve um erro ao coletar os dados! Erro: ",
                erro.sqlMessage
            );
            res.status(500).json(erro.sqlMessage);
        }
    );
}

module.exports = {
    cadastrarCampTime,
    cadastrarTime,
    cadastrarJogos,
    cadastrarJogador,
    buscarCampeonatos,
    buscarRodadas,
    buscarTimes
}