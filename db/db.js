const mysql = require('mysql')
var conn = mysql.createConnection({
    host : '127.0.0.1', //数据库地址
    user:'root', //账户
    password:'1234',   //密码
    database:'pdd' //数据库名称
  });

  conn.connect();

module.exports = conn;