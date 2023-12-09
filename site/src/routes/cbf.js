var express = require("express");
var router = express.Router();

var cbfController = require("../controllers/cbfController");

router.post("/cadastrarCampTime", function (req, res) {
    cbfController.cadastrarCampTime(req, res);
});

router.post("/cadastrarTime", function (req, res) {
    cbfController.cadastrarTime(req, res);
});

router.post("/cadastrarJogos", function (req, res) {
    cbfController.cadastrarJogos(req, res);
});

router.get("/cadastrarJogador", function (req, res) {
    cbfController.cadastrarJogador(req, res);
});

router.get("/buscarCampeonatos", function (req, res) {
    cbfController.buscarCampeonatos(req, res);
});

router.get("/buscarRodadas/:idCamp", function (req, res) {
    cbfController.buscarRodadas(req, res);
});

router.get("/buscarTimes", function (req, res) {
    cbfController.buscarTimes(req, res);
});

module.exports = router;