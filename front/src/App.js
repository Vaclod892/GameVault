
import React, { Component } from 'react';
// import {  Route, Switch } from "wouter";

// M.M
// Importamos la biblioteca Axios
import axios from 'axios';

import './App.css';

// import Home from "./componentes/Home/Home"

// import Loggin from "./componentes/Loggin/Loggin"

// import Juego_seleccionado from "./componentes/Juego_seleccionado/Juego_seleccionado"

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

          </>
        ); 
     }
  }


export default App;

