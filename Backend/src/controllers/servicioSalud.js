import ConexionMysql from "../database";

export const createServicioSalud = async (req, res) => {
  const { tipo, nombre, descripcion } = req.body;

  const sql =
    "INSERT INTO servicios(tipo_servicio,nombre,descripcion) VALUES('" +
    tipo +
    "','" +
    nombre +
    "','" +
    descripcion +
    "')";

  ConexionMysql.query(sql, (err) => {
    if (!err) {
      res.json({ status: "se guardo corectamente" });
    } else {
      console.log(err);
    }
  });
};

export const getServiciosSalud = async (req, res) => {
  const sql = "SELECT * FROM servicios";

  ConexionMysql.query(sql, (err, rows) => {
    if (!err) {
      res.json({ rows });
    } else {
      console.log(err);
    }
  });
};

export const UpdateServiciosSalud = async (req, res) => {
  const { tipo, nombre, descripcion, id } = req.body;

  const sql =
    "update servicios set tipo_servicio='" +
    tipo +
    "'," +
    "nombre='" +
    nombre +
    "'," +
    "descripcion='" +
    descripcion +
    "' WHERE id=" +
    id +
    "";

  ConexionMysql.query(sql, (err, rows) => {
    if (!err) {
      res.json({ rows });
    } else {
      console.log(err);
    }
  });
};

export const deleteServicioSalud = async (req, res) => {
  const { id } = req.body;
  const sql = "DELETE FROM servicios WHERE id=" + id + "";

  ConexionMysql.query(sql, (err, rows) => {
    if (!err) {
      res.json({ rows });
    } else {
      console.log(err);
    }
  });
};
