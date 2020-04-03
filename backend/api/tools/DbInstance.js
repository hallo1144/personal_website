var mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'b06901183',
    password : 'Chris0303',
    database : 'aa3na6j3sfvhuh'
});

connection.connect();

query = "CREATE TABLE web_user (account char(50), password char(50), picture_name char(50));";
connection.query(query, );

module.exports = connection;