var express = require("express");
var LoginHandler = require("../api/Login");
var router = express.Router();

router.get("/login", LoginHandler);

module.exports = router;