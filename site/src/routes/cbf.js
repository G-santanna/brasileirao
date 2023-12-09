var express = require("express");
var router = express.Router();

var cbfController = require("../controllers/cbfController");

router.post("/cadastrarCampTime", function (req, res) {
    cbfController.cadastrarCampTime(req, res);
});

router.post("/cadastrarTime", function (req, res) {
    cbfController.cadastrarTime(req, res);
});

router.get("/cadastrarJogador", function (req, res) {
    cbfController.cadastrarJogador(req, res);
});


module.exports = router;