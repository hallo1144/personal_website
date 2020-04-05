var Counter = require("./tools/Counter");

// session usage:
// isCounted: user is counted by global counter
// selfCounter: persional view times
// username: username of an account, undefined if not logged in
// imgname: personal image path of user, default.png if not set or not logged in

module.exports = function(req, res){
    if(req.session.isCounted === undefined){
        Counter.increaseGlobalCount();
        req.session.isCounted = true;
        req.session.selfCounter = 1;
        req.session.imgname = 'default.png'
    }
    res.send('')
}