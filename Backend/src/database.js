import mysql from "mysql";

const ConexionMysql = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1055",
  database: "db_servicios",
});

ConexionMysql.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("se conecto db");
  }
});

export default ConexionMysql;
