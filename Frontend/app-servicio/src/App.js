import "./App.css";
import React from "react";

import Home from "./component/home/home";
import InicioSesion from "./component/inicioSesion/inicioSesion";
import Registro from "./component/registro/registro";
import Usuario from "./component/usuario/usuario";
import Administrador from "./component/administrador/administrador";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/iniciosesion" component={InicioSesion}></Route>
            <Route path="/registro" component={Registro}></Route>
            <Route path="/usuario" component={Usuario}></Route>
            <Route path="/administrador" component={Administrador}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
