import React from "react";
import Navegador from "../navegador/navegador";
import { Form, Button, Card } from "react-bootstrap";

class InicioSesion extends React.Component {
  constructor() {
    super();
    this.state = { correo: "", password: "" };
  }

  Login = async (correo, password) => {
    console.log(this.state.correo, this.state.password);

    let data = {
      correo: this.state.correo,
      contrasenia: this.state.password,
    };
    const url = "http://localhost:4000/api/usuario/login";

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

        let usuario = responseJson.rows[0];

        console.log(usuario);
        if (!usuario) {
          alert("Credenciales incorrectas");
        } else {
          console.log(usuario.rol);

          if (usuario.rol === "administrador") {
            window.location.href = "administrador";
          } else {
            window.location.href = "usuario";
          }
        }
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
                  <Card.Title>INICIO SESIÓN</Card.Title>

                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Correo:</Form.Label>

                      <Form.Control
                        value={this.state.correo}
                        onChange={(e) =>
                          this.setState({ correo: e.target.value })
                        }
                        type="email"
                        placeholder="Ingrese Correo"
                      />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Contraseña:</Form.Label>

                      <Form.Control
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        type="password"
                        placeholder="Ingrese Password"
                      />
                    </Form.Group>

                    <Button
                      className="mx-1"
                      variant="primary"
                      type="button"
                      onClick={this.Login}
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

export default InicioSesion;
