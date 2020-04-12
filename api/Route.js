var express = require("express");
var path = require('path');
var LoginHandler = require("./Login");
var LogoutHandler = require("./Logout");
var RegisterHandler = require("./Register");
var ImageHandler = require("./UploadImage");
var RootHandler = require("./Root");
var ProfileHandler = require("./Profile");
var MessageHandler = require("./Message");
var SendMessageHandler = require("./SendMessage");
var router = express.Router();

router.get("/", RootHandler);
router.post("/login", LoginHandler);
router.get("/logout", LogoutHandler);
router.post("/register", RegisterHandler);
router.post("/upload", ImageHandler);
router.get("/profile", ProfileHandler);
router.get("/message", MessageHandler);
router.post("/sendMessage", SendMessageHandler);

router.get("/profileImage", function(req, res){
    try{
        res.sendFile(path.join(__dirname, 'upload', req.session.imgname))
    }
    catch(err){
        console.log('at ProfileImage.js:')
        console.log(req.session)
        console.log(err);
        console.log('================================================');
    }
})

module.exports = router;