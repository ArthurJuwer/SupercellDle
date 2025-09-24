const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "supercelldle",
  waitForConnections: true,
  connectionLimit: 10, // conexões simultâneas
  queueLimit: 0,
});


module.exports = pool.promise();