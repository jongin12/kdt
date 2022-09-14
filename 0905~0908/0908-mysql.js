const mysql = require('mysql');
const conn = {
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'1111',
    database:'testdb'
};

var connection = mysql.createConnection(conn); // DB 커넥션 생성

const DB_test_INSERT = (idValue,pwValue,nicknameValue) => {
    connection.connect();   // DB 접속

    var sql = "INSERT INTO `testdb`.`id_test` (`id`, `pw`, `nickname`) VALUES " +
        `('${idValue}', '${pwValue}', '${nicknameValue}')`

    connection.query(sql, function (err, results, fields) { 
        if (err) {
            console.log(err);
        }
        console.log(results);
    });

    connection.end(); // DB 접속 종료
}


const DB_test_SELECT = () => {
    connection.connect();   // DB 접속

    var sql = "SELECT * FROM id_test";

    connection.query(sql, function (err, results, fields) { 
        if (err) {
            console.log(err);
        }
        console.log(results);
    });

    connection.end(); // DB 접속 종료
}


DB_test_INSERT('admin','t22s41t2','9999');
DB_test_SELECT();




















/*
connection.connect();   // DB 접속

var sql = "INSERT INTO `testdb`.`id_test` (`id`, `pw`, `nickname`) VALUES " +
        `('${idValue}', '${pwValue}', '${nicknameValue}')`


connection.query(sql, function (err, results, fields) { 
    if (err) {
        console.log(err);
    }
    console.log(results);
});

sql = "SELECT * FROM id_test";

connection.query(sql, function (err, results, fields) { 
    if (err) {
        console.log(err);
    }
    console.log(results);
});

connection.end(); // DB 접속 종료
*/