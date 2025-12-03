
import React, { Component } from 'react';

//M.M
//
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

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
// Inicializacion del state
       this.state = {
          data: []
        }
      
      }
      
// M.M
// Uso del metodo del ciclo de vica componentDidMount para obtener la informacion del back y mandar esa informacion del state      
      
      componentDidMount() {
        const URL = "http://localhost:3030/api/juegos/";
        axios.get(URL)
        .then((res) => { this.setState({ data: res.data });
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
                <Routes>
                  <Route path="/" element={<Home />} />  
                  <Route path="/VistadeJuego" element={<VistaJuego />} /> 
                  <Route path="/Carrito" element={<Carrito />} /> 
                  <Route path="/Login" element={<Login />} />
                  <Route path="/resultadoDeBusqueda" element={<ResultadodeBusqueda />} />
                </Routes>
          </Router>
          </>
        ); 
     }
  }


export default App;

