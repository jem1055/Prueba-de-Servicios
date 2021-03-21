"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mysql = _interopRequireDefault(require("mysql"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ConexionMysql = _mysql["default"].createConnection({
  host: "localhost",
  user: "admin",
  password: "1055",
  database: "db_servicios"
});

ConexionMysql.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("se conecto db");
  }
});
var _default = ConexionMysql;
exports["default"] = _default;