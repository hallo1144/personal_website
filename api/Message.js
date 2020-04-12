var mysql = require("./tools/DbInstance");

module.exports = async function(req, res){
    ret_message = {}
    try{
        obj = await mysql("select * from messages");
        for(i = 0; i < obj.length; i++){
            if(obj[i].username === req.session.username){
                ret_message[obj[i].id] = {
                    username: obj[i].username,
                    message: obj[i].message,
                    own: true
                };
            }
            else{
                ret_message[obj[i].id] = {
                    username: obj[i].username,
                    message: obj[i].message,
                    own: false
                };
            }
        }

        return res.send({
            success: true,
            status: "",
            message: ret_message
        });
    }
    catch(err){
        console.log('at Message.js:')
        console.log(err);
        console.log('================================================');
        return res.send({
            success: false,
            status: "server_err",
            message: {}
        });
    }
}