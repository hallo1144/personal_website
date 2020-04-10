var mysql = require('mysql');
var options = require('./DbOptions.json');
var util = require('util');

var pool = mysql.createPool(options);

var query = "CREATE TABLE IF NOT EXISTS web_user (username char(50), password char(50), picture_name char(50), visit_time INT);";
pool.query(query);
// query = "CREATE TABLE IF NOT EXISTS global_count (name char(50), value INT);";
// connection.query(query, );

var query_async = util.promisify(pool.query).bind(pool);

module.exports = query_async;