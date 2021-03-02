const mysql = require('mysql');

const connect  = mysql.createConnection({
    host: '51.91.208.24',
    user: 'quentin',
    password: 'quentin2021',
    database: 'stock'
});

connect.connect();

module.exports = connect;