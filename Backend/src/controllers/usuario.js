import ConexionMysql from "../database";

export const createUsuario = async (req, res) => {
  const { correo, nombre, apellido, rol, contrasenia } = req.body;

  const sql =
    "INSERT INTO usuario(correo,nombre,apellido,rol,contrasenia) VALUES('" +
    correo +
    "','" +
    nombre +
    "','" +
    apellido +
    "','" +
    rol +
    "','" +
    contrasenia +
    "')";

  ConexionMysql.query(sql, (err) => {
    if (!err) {
      res.json({ status: "se guardo corectamente" });
    } else {
      console.log(err);
    }
  });
};

export const getUsuario = async (req, res) => {
  const sql = "SELECT * FROM usuario";

  ConexionMysql.query(sql, (err, rows) => {
    if (!err) {
      res.json({ rows });
    } else {
      console.log(err);
    }
  });
};

export const postLoginUsuario = async (req, res) => {
  const { correo, contrasenia } = req.body;
  const sql =
    "SELECT * FROM usuario WHERE correo='" +
    correo +
    "' && contrasenia='" +
    contrasenia +
    "'";

  ConexionMysql.query(sql, (err, rows) => {
    if (!err) {
      res.json({ rows });
    } else {
      console.log(err);
    }
  });
};
