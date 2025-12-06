import React, { Component } from "react";

//M.M
//
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// M.M
// Importamos la biblioteca Axios
import axios from "axios";

import "./App.css";

// M.M
//
import Home from "./componentes/Home/Home";
import ResultadodeBusqueda from "./componentes/ResultadoDeBusqueda/ResultadoDeBusqueda";
import VistaJuego from "./componentes/Vistajuego/VistaJuego";
import Carrito from "./componentes/Carrito/Carrito";
import VistadeAdministrador from "./componentes/VistadeAdministrador/VistadeAdministrador";
import Login from "./componentes/Login/Login";
import Header from "./componentes/Header/Header";
import Footer from "./componentes/Footer/Footer";
import Perfil from "./componentes/Perfil/Perfil";

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

      carrito: [],
      cantidadJuegosCompra: [],
      resultadosBusqueda: [],

      loginForm: {
        email: "",
        contrasena: "",
      },

      informacionUsuarios: {
        nombreUsuario: "",
        contrasena: "",
        email: "",
        foto: "/img/silla-default.jpg",
      },
      fotoDePerfil:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayIn4Sk056effKpGGnLYBdsIrLGI7Q5s9MA&s",
      usuarioSeleccionado: null,
      hazUnComentario: {
        recomienda: true,
        resena: "",
      },
      comentarioSeleccionado: null,

      crearGenero: {
        nombre: "",
      },
      generoSeleccionado: null,
      crearJuego: {
        titulo: "",
        descripcion: "",
        precio: "",
        genero: "",
      },
      juegoSeleccionado: null,

      mostrarCreacionGenero: false,
      mostrarCreacionJuego: false,
    };
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
    this.handleSubmitUsuario = this.handleSubmitUsuario.bind(this);
    this.seleccionarUsuario = this.seleccionarUsuario.bind(this);
    this.seleccionarGenero = this.seleccionarGenero.bind(this);
    this.seleccionarJuego = this.seleccionarJuego.bind(this);
    this.seleccionarComentario = this.seleccionarComentario.bind(this);
    this.visualizarFormuarioGenero = this.visualizarFormuarioGenero.bind(this);
    this.visualizarFormuarioJuego = this.visualizarFormuarioJuego.bind(this);
    // V.V: Agregamos el bind para el logout
    this.handleLogout = this.handleLogout.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.agregarAlCarrito = this.agregarAlCarrito.bind(this);
    this.eliminarDelCarrito = this.eliminarDelCarrito.bind(this);
    this.vaciarCarrito = this.vaciarCarrito.bind(this);
  }

  // M.M
  // Uso del metodo del ciclo de vida componentDidMount para obtener la informacion del back y mandar esa informacion del state

  componentDidMount() {
    const URLjuegos = "http://localhost:3030/api/juegos/";
    const URLcomentarios = "http://localhost:3030/api/comentarios";
    const URLcompras = "http://localhost:3030/api/compras";
    const URLgeneros = "http://localhost:3030/api/generos";
    const URLusuarios = "http://localhost:3030/api/usuarios";

    const usuarioGuardado = localStorage.getItem("usuario");
    if (usuarioGuardado) {
      this.setState({ usuarioSeleccionado: JSON.parse(usuarioGuardado) });
    }

    const carritoGuardado = localStorage.getItem("carrito");
    if (carritoGuardado) {
      this.setState({ carrito: JSON.parse(carritoGuardado) });
    }

    axios
      .get(URLjuegos)
      .then((res) => {
        this.setState({ dataJuegos: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    //M.M
    //
    axios
      .get(URLcomentarios)
      .then((res) => {
        this.setState({ dataComentarios: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    //M.M
    //
    axios
      .get(URLgeneros)
      .then((res) => {
        this.setState({ dataGeneros: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    //M.M
    //
    axios
      .get(URLcompras)
      .then((res) => {
        this.setState({ dataCompras: res.data });
      })
      .catch((err) => {
        console.log(err);
      });

    //M.M
    //
    axios
      .get(URLusuarios)
      .then((res) => {
        this.setState({ dataUsuarios: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //M.M
  //
  handleChangeGenero(e) {
    this.setState((prevState) => ({
      crearGenero: {
        ...prevState.crearGenero,
        nombre: e.target.value,
      },
    }));
  }

  handleSubmitGenero(e) {
    e.preventDefault();
    const genero = { nombre: this.state.crearGenero.nombre };
    const URLgenero = "http://localhost:3030/api/generos";
    axios
      .post(URLgenero, genero)
      .then((res) => {
        console.log("Estatus:", res.status);
        console.log("Datos:", res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  updateDtaGenero(e) {
    e.preventDefault();

    const id = this.state.generoSeleccionado.id;
    const data = { nombre: this.state.crearGenero.nombre };

    axios
      .put(`http://localhost:3030/api/generos/${id}`, data)
      .then((response) => {
        console.log("Género actualizado:", response.data);
        this.setState((prev) => ({
          dataGeneros: prev.dataGeneros.map((genero) =>
            genero.id === id ? { ...genero, nombre: data.nombre } : genero
          ),
          generoSeleccionado: null,
          crearGenero: { nombre: "" },
        }));
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  }

  //M.M
  //
  handleChangeJuego(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    this.setState((prevState) => ({
      crearJuego: {
        ...prevState.crearJuego,
        [nombre]: valor,
      },
    }));
  }

  handleSubmitJuego(e, comentario) {
    e.preventDefault();
    const juego = this.state.crearJuego;
    const URLjuego = "http://localhost:3030/api/juegos";
    axios
      .post(URLjuego, juego)
      .then((res) => {
        console.log("Estatus:", res.status);
        console.log("Datos:", res.data);
        console.log("Enviando comentario:", comentario);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  updateDtaJuego(e) {
    e.preventDefault();

    const id = this.state.generoSeleccionado.id;
    const data = { nombre: this.state.crearGenero.nombre };

    axios
      .put(`http://localhost:3030/api/generos/${id}`, data)
      .then((response) => {
        console.log("Género actualizado:", response.data);
        this.setState((prev) => ({
          dataGeneros: prev.dataGeneros.map((genero) =>
            genero.id === id ? { ...genero, nombre: data.nombre } : genero
          ),
          generoSeleccionado: null,
          crearGenero: { nombre: "" },
        }));
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  }

  //M.M
  //

  handleChangeComentario(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    this.setState((prevState) => ({
      hazUnComentario: {
        ...prevState.hazUnComentario,
        [nombre]: valor,
      },
    }));
  }

  handleSubmitComentario(e, idJuego) {
    e.preventDefault();
    const comentario = {
      ...this.state.hazUnComentario,
      recomienda: this.state.hazUnComentario.recomienda ? 1 : 0,
      ID_juego: Number(idJuego),
      ID_usuario: 1,
    };

    console.log("Comentario que se envía:", comentario);
    console.log("Valor recomienda:", this.state.hazUnComentario.recomienda);

    const URLcomentario = "http://localhost:3030/api/comentarios";
    axios
      .post(URLcomentario, comentario)
      .then((res) => {
        console.log("Estatus:", res.status);
        console.log("Datos:", res.data);
      })
      .catch((err) => {
        console.log("Error:", err);
      });
  }

  updateDtaComentario(e) {
    e.preventDefault();

    const id = this.state.generoSeleccionado.id;
    const data = { nombre: this.state.crearGenero.nombre };

    axios
      .put(`http://localhost:3030/api/generos/${id}`, data)
      .then((response) => {
        console.log("Género actualizado:", response.data);
        this.setState((prev) => ({
          dataGeneros: prev.dataGeneros.map((genero) =>
            genero.id === id ? { ...genero, nombre: data.nombre } : genero
          ),
          generoSeleccionado: null,
          crearGenero: { nombre: "" },
        }));
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
        console.error("There was an error!", error);
      });
  }

  //M.M
  //

  handleChangeUsuario(e) {
    const nombre = e.target.name;
    const valor = e.target.value;

    this.setState((prevState) => ({
      informacionUsuarios: {
        ...prevState.informacionUsuarios,
        [nombre]: valor,
      },
    }));
  }

  handleSubmitUsuario(e, history) {
    e.preventDefault();
    const usuarioForm = this.state.informacionUsuarios;
    const URLusuario = "http://localhost:3030/api/usuarios";

    axios
      .post(URLusuario, usuarioForm)
      .then((res) => {
        if (res.status === 200) {
          alert("¡Usuario creado correctamente! Bienvenido a GameVault.");

          // V.V: Guardamos el usuario QUE VIENE DEL BACKEND (que ahora trae el ID_usuario)
          const usuarioConID = res.data.usuario;

          this.setState({ usuarioSeleccionado: usuarioConID });
          localStorage.setItem("usuario", JSON.stringify(usuarioConID));

          if (history) {
            history.push("/");
          }
        }
      })
      .catch((err) => {
        console.log("Error:", err);
        alert("Hubo un error al crear el usuario.");
      });
  }

  seleccionarUsuario(usuario) {
    this.setState({ usuarioSeleccionado: usuario });
  }

  seleccionarGenero(genero) {
    this.setState({
      generoSeleccionado: genero,
      crearGenero: { nombre: genero.nombre },
    });
  }

  seleccionarJuego(genero) {
    this.setState({
      generoSeleccionado: genero,
      crearGenero: { nombre: genero.nombre },
    });
  }

  seleccionarComentario(comentario) {
    this.setState({ comentarioSeleccionado: comentario });
  }

  //M.M
  //

  visualizarFormuarioGenero() {
    this.setState((prevState) => ({
      mostrarCreacionGenero: !prevState.mostrarCreacionGenero,
      mostrarCreacionJuego: false,
    }));
  }

  visualizarFormuarioJuego() {
    this.setState((prevState) => ({
      mostrarCreacionJuego: !prevState.mostrarCreacionJuego,
      mostrarCreacionGenero: false,
    }));
  }

  // Maneja los cambios en los inputs del Login
  handleChangeLogin(e) {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      loginForm: {
        ...prevState.loginForm,
        [name]: value,
      },
    }));
  }

  // Envía la petición al backend
  handleLogin(e, history) {
    e.preventDefault();
    const { email, contrasena } = this.state.loginForm;
    const URLLogin = "http://localhost:3030/api/usuarios/login";

    axios
      .post(URLLogin, { email, contrasena })
      .then((res) => {
        if (res.data.success) {
          // 1. Guardamos en localStorage (Convirtiendo el objeto a texto)
          localStorage.setItem("usuario", JSON.stringify(res.data.usuario));

          // 2. Actualizamos el estado
          this.setState({ usuarioSeleccionado: res.data.usuario });
          // Redireccionamos al Home (usando history de react-router)

          alert("Bienvenido PE");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Error: Usuario o contraseña incorrectos");
      });
  }

  handleLogout() {
    localStorage.removeItem("usuario");
    window.location.href = "/";
  }

  // V.V: Nueva función de búsqueda conectada a la Base de Datos
  handleSearch(termino) {
    // Si el término está vacío, no hacemos nada o traemos todo (opcional)
    if (!termino) return;

    // Hacemos la petición al backend enviando el parámetro 'buscar'
    const URL = `http://localhost:3030/api/juegos?buscar=${termino}`;

    axios
      .get(URL)
      .then((res) => {
        // Guardamos los resultados que vinieron de la DB en el estado
        this.setState({ resultadosBusqueda: res.data });
      })
      .catch((err) => {
        console.log("Error en la búsqueda:", err);
      });
  }
  handleSeleccionFoto = (urlFoto) => {
    this.setState((prevState) => ({
      informacionUsuarios: {
        ...prevState.informacionUsuarios,
        foto: urlFoto,
      },
    }));
  };

  // --- FUNCIONES DEL CARRITO ---
  agregarAlCarrito(juego) {
    const { carrito } = this.state;
    // Evitar duplicados: verificamos si el ID ya existe
    const yaExiste = carrito.find((item) => item.ID_Juego === juego.ID_Juego);

    if (yaExiste) {
      alert("¡Este juego ya está en tu carrito!");
      return;
    }

    const nuevoCarrito = [...carrito, juego];
    this.setState({ carrito: nuevoCarrito });
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito)); // Guardar en disco
    alert("Juego agregado al carrito 🛒");
  }

  eliminarDelCarrito(id) {
    const nuevoCarrito = this.state.carrito.filter(
      (juego) => juego.ID_Juego !== id
    );
    this.setState({ carrito: nuevoCarrito });
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  }

  vaciarCarrito() {
    this.setState({ carrito: [] }); // Borra del estado
    localStorage.removeItem("carrito"); // Borra del disco
  }

  // V.V: Función para actualizar datos del usuario (PUT)
  handleUpdateUsuario = (datosNuevos) => {
    const usuario = this.state.usuarioSeleccionado;
    const URL = `http://localhost:3030/api/usuarios/editar/${usuario.ID_usuario}`;

    axios
      .put(URL, datosNuevos)
      .then((res) => {
        alert("¡Datos actualizados correctamente!");
        // Actualizamos estado y localStorage con los nuevos datos que devuelve el back
        this.setState({ usuarioSeleccionado: res.data.usuario });
        localStorage.setItem("usuario", JSON.stringify(res.data.usuario));
      })
      .catch((err) => {
        console.log(err);
        alert("Error al actualizar perfil");
      });
  };

  // V.V: Función para eliminar usuario (DELETE)
  handleDeleteUsuario = (id) => {
    // Usamos la ruta que ya tenías en tu router: /borrar/:id
    const URL = `http://localhost:3030/api/usuarios/borrar/${id}`;

    axios
      .delete(URL)
      .then((res) => {
        alert("Tu cuenta ha sido eliminada. Lamentamos que te vayas.");
        this.handleLogout(); // Cerramos sesión y limpiamos todo
      })
      .catch((err) => {
        console.log(err);
        alert("Error al eliminar la cuenta");
      });
  };

  // M.M
  // Uso del metodo render para mostrar los datos y idear la interfaz para poder manipular esos datos
  render() {
    const funcionesCarrito = {
      agregarAlCarrito: this.agregarAlCarrito,
      carrito: this.state.carrito,
    };
    return (
      <Router>
        <Header
          usuario={this.state.usuarioSeleccionado}
          handleLogout={this.handleLogout}
          handleSearch={this.handleSearch}
          cantidadCarrito={this.state.carrito.length}
        />

        <Switch>
          {/* Ruta Home */}
          <Route
            exact
            path="/"
            render={(props) => (
              <Home
                {...props}
                dataJuegos={this.state.dataJuegos}
                dataGeneros={this.state.dataGeneros}
                usuario={this.state.usuarioSeleccionado}
                agregarAlCarrito={this.agregarAlCarrito}
              />
            )}
          />

          {/* Ruta Perfil */}
          <Route
            path="/Perfil"
            render={(props) =>
              this.state.usuarioSeleccionado ? (
                <Perfil
                  {...props}
                  usuario={this.state.usuarioSeleccionado}
                  handleUpdateUsuario={this.handleUpdateUsuario}
                  handleDeleteUsuario={this.handleDeleteUsuario}
                />
              ) : (
                <Redirect to="/Login" />
              )
            }
          />

          {/* Ruta VistaJuego con props */}
          <Route
            path="/VistaDeJuego/:id"
            render={(props) => (
              <VistaJuego
                {...props}
                dataJuego={this.state.dataJuegos}
                dataComentario={this.state.dataComentarios}
                comentarioActual={this.state.hazUnComentario}
                handleChangeComentario={this.handleChangeComentario}
                handleSubmitComentario={this.handleSubmitComentario}
                agregarAlCarrito={this.agregarAlCarrito}
              />
            )}
          />

          {/* Carrito */}
          <Route
            path="/Carrito"
            render={(props) => (
              <Carrito
                {...props}
                usuario={this.state.usuarioSeleccionado}
                carrito={this.state.carrito}
                eliminarDelCarrito={this.eliminarDelCarrito}
                vaciarCarrito={this.vaciarCarrito}
              />
            )}
          />

          {/* Ruta LOGIN con una G */}
          <Route
            path="/Login"
            render={(props) =>
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
            }
          />

          {/* Nueva Ruta para mostrar resultados */}
          <Route
            path="/Resultados"
            render={(props) => (
              <ResultadodeBusqueda
                {...props}
                juegos={this.state.resultadosBusqueda}
                agregarAlCarrito={this.agregarAlCarrito}
              />
            )}
          />

          {/* Ruta Admin (La más larga) */}
          <Route
            path="/VistaAdmin"
            render={(props) => (
              <VistadeAdministrador
                {...props}
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
                visualizarFormuarioGenero={this.visualizarFormuarioGenero}
              />
            )}
          />

          {/* Si tenías una ruta de Resultados de Búsqueda antigua, iría aquí */}
        </Switch>

        <Footer />
      </Router>
    );
  }
}

export default App;
