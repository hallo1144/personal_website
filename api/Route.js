var express = require("express");
var LoginHandler = require("./Login");
var RegisterHandler = require("./Register");
var ImageHandler = require("./UploadImage");
var RootHandler = require("./Root");
var ProfileHandler = require("./Profile");
var router = express.Router();

router.get("/", RootHandler);
router.post("/login", LoginHandler);
router.post("/register", RegisterHandler);
router.post("/upload", ImageHandler);
router.get("/profile", ProfileHandler);

module.exports = router;