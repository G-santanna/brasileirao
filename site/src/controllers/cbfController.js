var cbfModel = require("../models/cbfModel");

function cadastrarCampTime(req,res){
    var camp = req.body.campeonatoFront;
    var patrocinador = req.body.patrocinadorFront;
    var premiacao = req.body.premiacaoFront;
    var rodadas = req.body.rodadasFront;
    var times = req.body.timesFront;

    cbfModel.cadastrarCamp(camp,patrocinador,premiacao)
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
    cadastrarCampTime
}