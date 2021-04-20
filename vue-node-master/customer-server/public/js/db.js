/**
 * 封装操作数据库api
 */
 const mysql = require('mysql');

 module.exports = (sql, data, callback) => {
     //创建数据库连接
     const connection = mysql.createConnection({
         host: 'localhost', //数据库所在的服务器或IP
         user: 'root', //登录数据库账号
         password: '123456', //登录数据库密码
         database: 'info' //数据库名称
     });
     //执行连接操作
     connection.connect();
     //操作数据库 （验证数据库是否正常 结果为2数据库正常）
 
     connection.query(sql, data, function (error, results, fields) {
         if (error) {
             console.log(error);
         };
        callback(results);
     });
     //关闭数据库
     connection.end();
 }