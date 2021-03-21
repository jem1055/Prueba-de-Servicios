import React from "react";

import Navegador from "../navegador/navegador";

import { Form, Button, Card } from "react-bootstrap";

class Registro extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      apellido: "",
      correo: "",
      contrasenia: "",
      rol: "administrador",
    };
  }

  crearUsuario = async () => {
    let data = {
      nombre: this.state.nombre,
      apellido: this.state.apellido,
      correo: this.state.correo,
      contrasenia: this.state.contrasenia,
      rol: this.state.rol,
    };
    const url = "http://localhost:4000/api/usuario";

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Navegador></Navegador>
        <div className=" container  mt-5">
          <div className="row">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <Card>
                <Card.Body>
                  <Card.Title>REGISTRO</Card.Title>

                  <Form>
                    <Form.Group controlId="formBasicCorreo">
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({ nombre: e.target.value })
                        }
                        type="text"
                        placeholder="Enter name"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicApellidos">
                      <Form.Label>Apellidos:</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({ apellido: e.target.value })
                        }
                        type="text"
                        placeholder="Enter Apellido"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Correo:</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({ correo: e.target.value })
                        }
                        type="email"
                        placeholder="Enter email"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña:</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          this.setState({ contrasenia: e.target.value })
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Group>

                    <Form.Control
                      as="select"
                      onChange={(e) => this.setState({ rol: e.target.value })}
                    >
                      <option>administrador</option>
                      <option>usuario</option>
                    </Form.Control>

                    <Button
                      onClick={this.crearUsuario}
                      className="mt-3"
                      variant="primary"
                      type="submit"
                    >
                      Ingresar
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
