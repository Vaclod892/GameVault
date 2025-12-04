
import React, { Component } from 'react';

//M.M
//
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
      dataCompras: [],
      dataGeneros: [],
      dataUsuarios: [],

      cantidadJuegosCompra: [],

      loginForm: {
        email: "",
        contrasena: ""
      },

      informacionUsuarios: {
        nombreUsuario: "",
        contrasena: "",
        email: "",
        foto: "/img/silla-default.jpg"
      },
      fotoDePerfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayIn4Sk056effKpGGnLYBdsIrLGI7Q5s9MA&s",
      usuarioSeleccionado: null,
      hazUnComentario: {
        recomienda: true,
        resena: ""
      },
      comentarioSeleccionado: null,

      crearGenero: {
        nombre: ""
      },
      generoSeleccionado: null,
      crearJuego: {
        titulo: "",
        descripcion: "",
        precio: "",
        genero: ""
      },
      juegoSeleccionado: null,

      mostrarCreacionGenero: false,
      mostrarCreacionJuego: false




    }
    this.handleChangeLogin = this.handleChangeLogin.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChangeGenero = this.handleChangeGenero.bind(this);
    this.updateDtaGenero = this.updateDtaGenero.bind(this);
    this.handleSubmitGenero = this.handleSubmitGenero.bind(this);
    this.handleChangeJuego = this.handleChangeJuego.bind(this);
    this.handleSubmitJuego = this.handleSubmitJuego.bind(this);
    this.handleChangeComentario = this.handleChangeComentario.bind(this);
    this.handleSubmitComentario = this.handleSubmitComentario.bind(this);
    this.handleChangeUsuario = this.handleChangeUsuario.bind(this);
    this.handleSubmitUsuario = this.handleSubmitUsuario.bind(this)
    this.seleccionarUsuario = this.seleccionarUsuario.bind(this);
    this.seleccionarGenero = this.seleccionarGenero.bind(this);
    this.seleccionarJuego = this.seleccionarJuego.bind(this);
    this.seleccionarComentario = this.seleccionarComentario.bind(this)
    this.visualizarFormuarioGenero = this.visualizarFormuarioGenero.bind(this);
    this.visualizarFormuarioJuego = this.visualizarFormuarioJuego.bind(this);

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
      .then((res) => {
        this.setState({ dataJuegos: res.data });
        console.log(res.data);
      })
      .catch((err) => { console.log(err) })


    //M.M
    //   
    axios.get(URLcomentarios)
      .then((res) => {
        this.setState({ dataComentarios: res.data });
        console.log(res.data);
      })
      .catch((err) => { console.log(err) })


    //M.M
    //      
    axios.get(URLgeneros)
      .then((res) => {
        this.setState({ dataGeneros: res.data });
        console.log(res.data);
      })
      .catch((err) => { console.log(err) })


    //M.M
    //      
    axios.get(URLcompras)
      .then((res) => {
        this.setState({ dataCompras: res.data });
        console.log(res.data);
      })
      .catch((err) => { console.log(err) })


    //M.M
    //
    axios.get(URLusuarios)
      .then((res) => {
        this.setState({ dataUsuarios: res.data });
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


  updateDtaGenero(e) {
    e.preventDefault();

    const id = this.state.generoSeleccionado.id;
    const data = { nombre: this.state.crearGenero.nombre };

    axios.put(`http://localhost:3030/api/generos/${id}`, data)
      .then(response => {
        console.log("Género actualizado:", response.data)
        this.setState(prev => ({
          dataGeneros: prev.dataGeneros.map(genero =>
            genero.id === id ? { ...genero, nombre: data.nombre } : genero
          ),
          generoSeleccionado: null,
          crearGenero: { nombre: "" }
        }))
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
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


  handleSubmitJuego(e, comentario) {
    e.preventDefault();
    const juego = this.state.crearJuego;
    const URLjuego = "http://localhost:3030/api/juegos";
    axios.post(URLjuego, juego)
      .then((res) => {
        console.log("Estatus:", res.status);
        console.log("Datos:", res.data);
        console.log("Enviando comentario:", comentario);
      }
      )
      .catch((err) => {
        console.log("Error:", err);
      })
  }


  updateDtaJuego(e) {
    e.preventDefault();

    const id = this.state.generoSeleccionado.id;
    const data = { nombre: this.state.crearGenero.nombre };

    axios.put(`http://localhost:3030/api/generos/${id}`, data)
      .then(response => {
        console.log("Género actualizado:", response.data)
        this.setState(prev => ({
          dataGeneros: prev.dataGeneros.map(genero =>
            genero.id === id ? { ...genero, nombre: data.nombre } : genero
          ),
          generoSeleccionado: null,
          crearGenero: { nombre: "" }
        }))
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
  }



  //M.M
  //    

  handleChangeComentario(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    this.setState(prevState => ({
      hazUnComentario: {
        ...prevState.hazUnComentario,
        [nombre]: valor
      }

    }))
  }


  handleSubmitComentario(e, idJuego) {
    e.preventDefault();
    const comentario = {
      ...this.state.hazUnComentario,
      recomienda: this.state.hazUnComentario.recomienda ? 1 : 0,
      ID_juego: Number(idJuego),
      ID_usuario: 1
    };

    console.log("Comentario que se envía:", comentario);
    console.log("Valor recomienda:", this.state.hazUnComentario.recomienda);

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


  updateDtaComentario(e) {
    e.preventDefault();

    const id = this.state.generoSeleccionado.id;
    const data = { nombre: this.state.crearGenero.nombre };

    axios.put(`http://localhost:3030/api/generos/${id}`, data)
      .then(response => {
        console.log("Género actualizado:", response.data)
        this.setState(prev => ({
          dataGeneros: prev.dataGeneros.map(genero =>
            genero.id === id ? { ...genero, nombre: data.nombre } : genero
          ),
          generoSeleccionado: null,
          crearGenero: { nombre: "" }
        }))
      })
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
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


  handleSubmitUsuario(e, history) {
    e.preventDefault();
    const usuario = this.state.informacionUsuarios;
    const URLusuario = "http://localhost:3030/api/usuarios";

    axios.post(URLusuario, usuario)
      .then((res) => {
        if (res.status === 200) {
          alert("¡Usuario creado correctamente! Bienvenido a GameVault.");

          // PASO CLAVE: Actualizamos el estado para que la App sepa que estamos logueados
          // Nota: Asegúrate de que tu backend devuelva el usuario creado en res.data
          // Si no, usa la variable local 'usuario'
          this.setState({
            usuarioSeleccionado: res.data.usuario || usuario // Preferiblemente lo que devuelve el back
          });

          // Ahora sí redirigimos, y como hay usuario, el Home se mostrará bien
          if (history) {
            history.push("/");
          }
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Hubo un error al crear el usuario. Intenta nuevamente.");
      })
  }


  seleccionarUsuario(usuario) {
    this.setState({ usuarioSeleccionado: usuario });
  }


  seleccionarGenero(genero) {
    this.setState({
      generoSeleccionado: genero,
      crearGenero: { nombre: genero.nombre }
    });
  }

  seleccionarJuego(genero) {
    this.setState({
      generoSeleccionado: genero,
      crearGenero: { nombre: genero.nombre }
    });
  }

  seleccionarComentario(comentario) {
    this.setState({ comentarioSeleccionado: comentario });
  }


  //M.M
  //

  visualizarFormuarioGenero() {
    this.setState(prevState => ({
      mostrarCreacionGenero: !prevState.mostrarCreacionGenero,
      mostrarCreacionJuego: false
    }))
  }

  visualizarFormuarioJuego() {
    this.setState(prevState => ({
      mostrarCreacionJuego: !prevState.mostrarCreacionJuego,
      mostrarCreacionGenero: false
    }))
  }

  // Maneja los cambios en los inputs del Login
  handleChangeLogin(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginForm: {
        ...prevState.loginForm,
        [name]: value
      }
    }));
  }

  // Envía la petición al backend
  handleLogin(e, history) {
    e.preventDefault();
    const { email, contrasena } = this.state.loginForm;
    const URLLogin = "http://localhost:3030/api/usuarios/login";

    axios.post(URLLogin, { email, contrasena })
      .then((res) => {
        if (res.data.success) {
          alert(`Bienvenido ${res.data.usuario.nombreUsuario}`);
          // Guardamos el usuario en el estado global
          this.setState({ usuarioSeleccionado: res.data.usuario });
          // Redireccionamos al Home (usando history de react-router)
          // history.push("/");}
          window.location.href="/"


        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error: Usuario o contraseña incorrectos");
      });
  }

  handleSeleccionFoto = (urlFoto) => {
    this.setState(prevState => ({
      informacionUsuarios: {
        ...prevState.informacionUsuarios,
        foto: urlFoto
      }
    }));
  }


  // M.M
  // Uso del metodo render para mostrar los datos y idear la interfaz para poder manipular esos datos 
  render() {
    return (
      <Router>
        <Switch>
          {/* Ruta Home */}
          <Route exact path="/" render={(props) => (
            <Home
              {...props}
              dataJuegos={this.state.dataJuegos} // Pasamos la lista de juegos
              usuario={this.state.usuarioSeleccionado} // Pasamos el usuario (si lo necesitas en el header del home)
            // Agrega aquí cualquier otra prop que tu componente Home necesite
            />
          )} />

          {/* Ruta VistaJuego con props */}
          <Route path="/VistaDeJuego/:id" render={(props) => (
            <VistaJuego
              {...props}
              dataJuego={this.state.dataJuegos}
              dataComentario={this.state.dataComentarios}
              comentarioActual={this.state.hazUnComentario}
              handleChangeComentario={this.handleChangeComentario}
              handleSubmitComentario={this.handleSubmitComentario}
            />
          )} />

          {/* Carrito */}
          <Route path="/Carrito" render={(props) => (
            <Carrito
              {...props}
              usuario={this.state.usuarioSeleccionado}
            />
          )} />

          {/* Ruta LOGIN con una G */}
          <Route path="/Login" render={(props) => (

            this.state.usuarioSeleccionado ? (

              <Redirect to="/" /> // Importa 'Redirect' de 'react-router-dom'
            ) : (

              <Login
                {...props}
                informacionUsuario={this.state.informacionUsuarios}
                handleChangeUsuario={this.handleChangeUsuario}
                handleSubmitUsuario={this.handleSubmitUsuario}
                handleSeleccionFoto={this.handleSeleccionFoto}
                loginForm={this.state.loginForm}
                handleChangeLogin={this.handleChangeLogin}
                handleLogin={this.handleLogin}
              />
            )
          )} />

          {/* Ruta Admin (La más larga) */}
          <Route path="/VistaAdmin" render={(props) => <VistadeAdministrador {...props}
            valorGenero={this.state.crearGenero}
            handleChangeGenero={this.handleChangeGenero}
            handleSubmitGenero={this.handleSubmitGenero}
            valorJuego={this.state.crearJuego}
            handleChangeJuego={this.handleChangeJuego}
            handleSubmitJuego={this.handleSubmitJuego}
            dataUsuario={this.state.dataUsuarios}
            imagenUsuario={this.state.fotoDePerfil}
            dataGenero={this.state.dataGeneros}
            dataJuegos={this.state.dataJuegos}
            dataComentario={this.state.dataComentarios}
            dataCompra={this.state.dataCompras}
            usuarioSeleccionado={this.state.usuarioSeleccionado}
            seleccionarUsuario={this.seleccionarUsuario}
            generoSeleccionado={this.state.generoSeleccionado}
            seleccionarGenero={this.seleccionarGenero}
            juegoSeleccionado={this.state.juegoSeleccionado}
            seleccionarJuego={this.seleccionarJuego}
            comentarioSeleccionado={this.state.comentarioSeleccionado}
            seleccionarComentario={this.seleccionarComentario}
            formularioGenero={this.handleChangeGenero}
            crearGenero={this.handleSubmitGenero}
            updateDtaGenero={this.updateDtaGenero}
            mostrarCreacionJuego={this.state.mostrarCreacionJuego}
            visualizarFormuarioJuego={this.visualizarFormuarioJuego}
            mostrarCreacionGenero={this.state.mostrarCreacionGenero}
            visualizarFormuarioGenero={this.visualizarFormuarioGenero} />} />

          {/* Si tenías una ruta de Resultados de Búsqueda antigua, iría aquí */}

        </Switch>
      </Router>
    );
  }
}

export default App;

