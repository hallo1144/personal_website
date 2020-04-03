var express = require('express');
var app = module.exports = express();
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
 
var options = {
    host: 'localhost',
    port: 3306,
    user: 'session_test',
    password: 'password',
    database: 'session_test'
};

module.exports = function(req, res, next){
    console.log('aaa')
    return next()
}