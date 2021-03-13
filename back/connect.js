const mysql = require('mysql');

const connect  = mysql.createConnection({
    host: '135.125.95.178',
    user: 'quentin',
    password: '&hs4YqUe{+V2WY;Z',
    database: 'fuel'
});

connect.connect();

module.exports = connect;