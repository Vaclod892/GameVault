
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
import Loggin from "./componentes/Loggin/Loggin"

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
          dataCompras: [],
          dataGeneros: [],
          dataUsuarios: [],

          informacionUsuarios: {
            nombreUsuario: "",
            contraseña: "",
            emaill: ""
          },
          fotoDePerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayIn4Sk056effKpGGnLYBdsIrLGI7Q5s9MA&s",
          usuarioSeleccionado: null,

          hazUnComentario: {
            recomienda: true,
            resena: ""   
          },

          crearGenero: {
            nombre: ""
          },
          generoSeleccionado: null,

          crearJuego: {
            titulo:"",
            descripcion: "",
            precio: "",
            genero: ""
          },
          juegoSeleccionado: null

        }

        this.handleChangeGenero = this.handleChangeGenero.bind(this);
        this.handleSubmitGenero = this.handleSubmitGenero.bind(this);
        this.handleChangeJuego = this.handleChangeJuego.bind(this);
        this.handleSubmitJuego = this.handleSubmitJuego.bind(this);
        this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
        this.handleSubmitUsuario = this.handleSubmitUsuario.bind(this)
        this.seleccionarUsuario = this.seleccionarUsuario.bind(this);  


}

      
// M.M
// Uso del metodo del ciclo de vida componentDidMount para obtener la informacion del back y mandar esa informacion del state      
      
      componentDidMount() {
        const URLjuegos = "http://localhost:3030/api/juegos/";
        const URLcomentarios = "http://localhost:3030/api/comentarios";
        const URLcompras = "http://localhost:3030/api/compras";
        const URLgeneros = "http://localhost:3030/api/generos";
        const URLusuarios = "http://localhost:3030/api/usuarios";

        axios.get(URLjuegos)
        .then((res) => { this.setState({ dataJuegos: res.data });
          console.log(res.data);
        })
        .catch((err) => { console.log(err) })


  //M.M
  //   
        axios.get(URLcomentarios)
        .then((res) => { this.setState({ dataComentarios: res.data });
          console.log(res.data);
        })
        .catch((err) => { console.log(err) })

      
  //M.M
  //      
        axios.get(URLgeneros)
        .then((res) => { this.setState({ dataGeneros: res.data });
        console.log(res.data);
         })
        .catch((err) => { console.log(err) })


//M.M
//      
        axios.get(URLcompras)
        .then((res) => { this.setState({ dataCompras: res.data });
        console.log(res.data);
         })
        .catch((err) => { console.log(err) })


  //M.M
  //
        axios.get(URLusuarios)
        .then((res) => { this.setState({ dataUsuarios: res.data });
          console.log(res.data);
        })
        .catch((err) => { console.log(err) })
    }   
//M.M
//      
      handleChangeGenero(e) {
        this.setState(prevState => ({
          crearGenero: {
           ...prevState.crearGenero,
           nombre: e.target.value
     }
    }));
  }
    
      handleSubmitGenero(e) {
        e.preventDefault();
        const genero = { nombre: this.state.crearGenero.nombre }
        const URLgenero = "http://localhost:3030/api/generos";
          axios.post(URLgenero, genero)
          .then((res) => {
            console.log("Estatus:", res.status);
            console.log("Datos:", res.data);
          } 
          )
          .catch((err) => {
           console.log("Error:", err);
           })
    }


      editGenero(e) {
        
      }        

//M.M
//    
     handleChangeJuego(e) {
       const nombre = e.target.name;
       const valor = e.target.value;

        this.setState(prevState => ({
            crearJuego: {
              ...prevState.crearJuego,
              [nombre]: valor
            }
        
        }))
  }
      

    handleSubmitJuego(e) {
        e.preventDefault();
        const juego = this.state.crearJuego;
        const URLjuego = "http://localhost:3030/api/juegos";
          axios.post(URLjuego, juego)
          .then((res) => {
            console.log("Estatus:", res.status);
            console.log("Datos:", res.data);
          } 
          )
          .catch((err) => {
           console.log("Error:", err);
           })
    }

//M.M
//    

    handleChangeComentario(e) {
      const target = e.target;
      const valor = target.type === 'checkbox' ? target.checked : target.value;
      const nombre = target.name;

       this.setState(prevState => ({
          hazUnComentario: {
             ...prevState.hazUnComentario,
             [nombre]: valor
           }
       
       }))
   }
     

   handleSubmitComentario(e) {
       e.preventDefault();
       const comentario = this.state.hazUnComentario;
       const URLcomentario = "http://localhost:3030/api/comentarios";
         axios.post(URLcomentario, comentario)
         .then((res) => {
           console.log("Estatus:", res.status);
           console.log("Datos:", res.data);
         } 
         )
         .catch((err) => {
          console.log("Error:", err);
          })
   }


   //M.M
//    

    handleChangeUsuario(e) {
    const nombre = e.target.name;
    const valor = e.target.value;
    
     this.setState(prevState => ({
          informacionUsuarios: {
           ...prevState.informacionUsuarios,
           [nombre]: valor
           }
        }))
      }       
     

   handleSubmitUsuario(e) {
       e.preventDefault();
       const usuario = this.state.informacionUsuarios;
       const URLuauario = "http://localhost:3030/api/usuarios";
         axios.post(URLcomentario, usuario)
         .then((res) => {
           console.log("Estatus:", res.status);
           console.log("Datos:", res.data);
         } 
         )
         .catch((err) => {
          console.log("Error:", err);
          })
   }


   seleccionarUsuario(usuario) {
    this.setState({ usuarioSeleccionado: usuario });
   }
  
// M.M
// Uso del metodo render para mostrar los datos y idear la interfaz para poder manipular esos datos 
     render () {
        return (
          <>
          <Router>
                
                <Switch>
                  <Route exact path="/" component={Home} />

                  <Route path="/VistadeJuego/:id" render={(props) => <VistaJuego {...props} 
                  dataJuego={this.state.dataJuegos} 
                  dataComentario={this.state.dataComentarios} 
                  handleChangeComentario={this.handleChangeComentario}
                  handleSubmitComentario={this.handleSubmitComentario} />} />
                  
                  <Route path="/Carrito" component={Carrito} /> 
                  
                  <Route path="/Loggin" render={(props) => <Loggin {...props} 
                  informacionUsuario={this.state.informacionUsuarios}  
                  handleChangeUsuario={this.handleChangeComentario}
                  handleSubmitUsuario={this.handleSubmitComentario} /> } />
                  
                  <Route path="/VistaAdmin" render={(props) => <VistadeAdministrador {...props} 
                  valorGenero={this.state.crearGenero.nombre}
                  handleChangeGenero={this.handleChangeGenero}
                  handleSubmitGenero={this.handleSubmitGenero}
                  valorJuego={this.state.crearJuego}
                  handleChangeJuego={this.handleChangeJuego}
                  handleSubmitJuego={this.handleSubmitJuego}
                  dataUsuario={this.state.dataUsuarios} 
                  imagenUsuario={this.state.fotoDePerfil}
                  dataGenero={this.state.dataGeneros}
                  dataJuego={this.state.dataJuegos}
                  dataComentario={this.state.dataComentarios}
                  dataCompra={this.state.dataCompras}
                  usuarioSeleccionado={this.state.usuarioSeleccionado}
                  seleccionarUsuario={this.seleccionarUsuario}
                  formularioGenero={this.handleChangeGenero} 
                  crearGenero={this.handleSubmitGenero}/> } />
                </Switch>

          </Router>
          </>
        ); 
     }
  }  

export default App;

