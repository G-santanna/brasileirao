var express = require("express");
var router = express.Router();

var cbfController = require("../controllers/cbfController");

router.post("/cadastrarCampTime", function (req, res) {
    cbfController.cadastrarCampTime(req, res);
});

module.exports = router;