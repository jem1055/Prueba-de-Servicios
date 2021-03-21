import React from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import Navegador from "../navegador/navegador";

class Usuario extends React.Component {
  constructor() {
    super();
    this.state = { id: "", nombre: "", tipo: "", descripcion: "", list: [] };
  }

  componentDidMount() {
    this.consultarServicios();
  }

  consultarServicios = async () => {
    this.setState({ list: [] });
    const url = "http://localhost:4000/api/servicio";
    await axios.get(url).then((post) => {
      this.setState({ list: post.data.rows });
    });
  };

  render() {
    return (
      <div>
        <Navegador></Navegador>
        <div className="container   mt-5">
          <h1>Usuario</h1>
          <div className="row">
            <Table striped bordered hover variant="table table-dark">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Tipo</th>
                  <th>Descripcion</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((e) => {
                  return (
                    <tr key={e.id}>
                      <th>{e.id}</th>
                      <th>{e.nombre}</th>
                      <th>{e.tipo_servicio}</th>
                      <th>{e.descripcion}</th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
export default Usuario;
