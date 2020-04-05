var Counter = require("./tools/Counter");

module.exports = function(req, res){
    if(req.session.isCounted === undefined){
        Counter.increaseGlobalCount();
        req.session.isCounted = true;
        req.session.selfCounter = 1;
    }
    res.send('')
}