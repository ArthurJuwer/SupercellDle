const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "supercelldle",

})

connection.connect((err) => {
    if(err){
        throw err
    } else {
        console.log("Banco de Dados conectado com sucesso!")
    }
})


module.exports = connection;