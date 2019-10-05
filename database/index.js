const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "moviedatabase"
});

connection.connect(() => {
  console.log("connected to db");
});

module.exports = connection;
