var express = require("express");
var path = require('path');
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

router.get("/profileImage", function(req, res){
    try
    {
        console.log("require : " + path.join(__dirname, 'upload', req.session.imgname))
        res.sendFile(path.join(__dirname, 'upload', req.session.imgname))
        console.log('finish')
    }
    catch(err)
    {
        console.log(err)
    }
})

module.exports = router;