var mysql = require('mysql');
var util = require('util');
require('dotenv').config();

var options = {
    "host"     : process.env.MYSQL_HOST || "127.0.0.1",
    "port"     : process.env.MYSQL_PORT || "3306",
    "user"     : process.env.MYSQL_USER || "username",
    "password" : process.env.MYSQL_PASSWORD || "password",
    "database" : process.env.MYSQL_DATABASE || "database"
}

var pool = mysql.createPool(options);

var query = "CREATE TABLE IF NOT EXISTS web_user (username char(50), password char(50), picture_name char(50), visit_time INT);";
pool.query(query);
query = "CREATE TABLE IF NOT EXISTS messages (id INT AUTO_INCREMENT, username char(50), message char(100), PRIMARY KEY (id));";
pool.query(query);

var query_async = util.promisify(pool.query).bind(pool);

module.exports = query_async;