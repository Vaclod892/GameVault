
import React, { Component } from 'react';

//M.M
//
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom'; 

// M.M
// Importamos la biblioteca Axios
import axios from 'axios';

import './App.css';

// M.M
//
import Home from "./componentes/Home/Home"
import ResultadodeBusqueda from "./componentes/ResultadoDeBusqueda/ResultadoDeBusqueda"
import VistaJuego from "./componentes/Vistajuego/VistaJuego"
import Carrito from "./componentes/Carrito/Carrito"
import VistadeAdministrador from './componentes/VistadeAdministrador/VistadeAdministrador';
import Login from "./componentes/Login/Login"

// function App() {
  //return (

// M.M
// Creacion de la clase App   
class App extends Component {
      constructor() {
          super();
// M.M
// Inicializacion del state y agregado de mas propiedades para que el estado general cumpla mejor su proposito
       this.state = {
          dataJuegos: [],

          dataComentarios: [],

          dataGeneros: [],

          informacionDelUsuarios: {
            nombreUsuario: "",
            contraseña: "",
            emaill: ""
          },

          hazUnComentario: {
            resena: "",
            recomienda: true   
          },

          crearGenero: {
            nombre: ""
          },

          crearJuego: {
            titulo:"",
            descripcion: "",
            precio: "",
            genero: []
          }
        }

}
      
// M.M
// Uso del metodo del ciclo de vica componentDidMount para obtener la informacion del back y mandar esa informacion del state      
      
      componentDidMount() {
        const URLjuegos = "http://localhost:3030/api/juegos/";
        const URLcomentarios = "http://localhost:3030/api/comentarios";

        axios.get(URLjuegos)
        .then((res) => { this.setState({ dataJuegos: res.data });
          console.log(res);
        })
        .catch((err) => { console.log(err) })


  //M.M
  //   
        axios.get(URLcomentarios)
        .then((res) => { this.setState({ dataComentarios: res.data });
          console.log(res);
        })
        .catch((err) => { console.log(err) })
      }

// M.M
// Uso del metodo render para mostrar los datos y idear la interfaz para poder manipular esos datos 
     render () {
        return (
          <>
          <Router>
                <Switch>
                  <Route exact path="/" component={Home} />  
                  <Route path="/VistadeJuego/:id" render={(props) => <VistaJuego {...props} dataJuego={this.state.dataJuegos} dataComentario={this.state.dataComentarios} />} />
                  <Route path="/Carrito" component={Carrito} /> 
                  <Route path="/Login" component={Login} />
                </Switch>
          </Router>
          </>
        ); 
     }
  }


export default App;

