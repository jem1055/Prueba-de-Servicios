import React from "react";
import { Table, Form, Card, Button } from "react-bootstrap";
import axios from "axios";
import NavegadorAdmin from "../NavergadorTercero/navegadorTercero";

class Administrador extends React.Component {
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

  deleteServicio = async (id) => {
    console.log(id);

    let data = { id: id };
    /*   const config = {
      headers: { "Content-type": "application/json" },

      body: JSON.stringify(data),
    }; */

    const url = "http://localhost:4000/api/servicio";
    /* axios.delete(url, { body: JSON.stringify(data} ).then((respuesta) => {
      this.consultarServicios();
    }); */

    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.consultarServicios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  crearServicio = async () => {
    let data = {
      nombre: this.state.nombre,
      tipo: this.state.tipo,
      descripcion: this.state.descripcion,
    };
    const url = "http://localhost:4000/api/servicio";

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.consultarServicios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  updateServicio = async () => {
    let data = {
      id: this.state.id,
      nombre: this.state.nombre,
      tipo: this.state.tipo,
      descripcion: this.state.descripcion,
    };
    const url = "http://localhost:4000/api/servicio";

    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.consultarServicios();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  enviar(id, nombre, tipo, descripcion) {
    this.setState({ id: id });
    this.setState({ nombre: nombre });
    this.setState({ tipo: tipo });
    this.setState({ descripcion: descripcion });
  }

  render() {
    return (
      <div>
        <NavegadorAdmin></NavegadorAdmin>
        <div className="container  mt-5">
          <h1>Administrador</h1>
          <div className="row">
            <div className="col-sm-4">
              <Card>
                <Card.Body>
                  <Card.Title>Servicio</Card.Title>

                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control
                        value={this.state.nombre}
                        onChange={(e) =>
                          this.setState({ nombre: e.target.value })
                        }
                        type="text"
                        placeholder="Ingrese Nombre"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Tipo:</Form.Label>
                      <Form.Control
                        value={this.state.tipo}
                        onChange={(e) =>
                          this.setState({ tipo: e.target.value })
                        }
                        type="text"
                        placeholder="Ingrese Tipo"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Descripción:</Form.Label>
                      <Form.Control
                        value={this.state.descripcion}
                        onChange={(e) =>
                          this.setState({ descripcion: e.target.value })
                        }
                        type="text"
                        placeholder="Ingrese Descripción"
                      />
                    </Form.Group>

                    <Button
                      className="mx-1"
                      variant="primary"
                      type="button"
                      onClick={this.crearServicio}
                    >
                      Guardar
                    </Button>
                    <Button
                      onClick={this.updateServicio}
                      variant="warning"
                      type="submit"
                    >
                      Actualizar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>

            <div className="col-sm-8">
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Tipo</th>
                    <th>Descripcion</th>
                    <th>Accion</th>
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
                        <th>
                          <Button
                            onClick={() => this.deleteServicio(e.id)}
                            className="btn btn-danger mx-1"
                          >
                            Eliminar
                          </Button>

                          <Button
                            onClick={() =>
                              this.enviar(
                                e.id,
                                e.nombre,
                                e.tipo_servicio,
                                e.descripcion
                              )
                            }
                            className="btn btn-primary"
                          >
                            Actualizar
                          </Button>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Administrador;
