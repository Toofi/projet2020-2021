const mysql = require('mysql');

const connect  = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'stocks'
});

connect.connect();

module.exports = connect;