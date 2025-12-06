import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            // Estado local para validación en tiempo real (opcional) o para el submit
            nombreUsuario: '',
            email: '',
            contrasena: ''
        };
        this.cambiarVista = this.cambiarVista.bind(this);
        this.handleLocalChange = this.handleLocalChange.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    cambiarVista() {
        this.setState(prevState => ({ isLogin: !prevState.isLogin }));
    }

    // V.V: Función auxiliar para detectar Emojis
    contieneEmojis(texto) {
        // Regex que cubre la mayoría de rangos de emojis
        const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
        return regex.test(texto);
    }

    handleLocalChange(e) {
        // Actualizamos estado local para poder validarlo al enviar
        this.setState({ [e.target.name]: e.target.value });

        // También llamamos a la función original del padre para que App.js tenga los datos
        this.props.handleChangeUsuario(e);
    }

    handleRegisterSubmit(e) {
        e.preventDefault();
        const { nombreUsuario, email, contrasena } = this.state;

        // V.V: Validación Anti-Emoji
        if (this.contieneEmojis(nombreUsuario) || this.contieneEmojis(email) || this.contieneEmojis(contrasena)) {
            alert("🚫 Por favor, no utilices emojis en los campos de texto.");
            return; // Detenemos el envío
        }

        // Si pasa la validación, llamamos a la función real de registro
        this.props.handleSubmitUsuario(e, this.props.history);
    }

    renderLogin() {
        return (
            <>
                <h3>Iniciar sesion</h3>
                <form className="formulario-sesion" onSubmit={(e) => this.props.handleLogin(e, this.props.history)}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="login-input"
                        value={this.props.loginForm.email}
                        onChange={this.props.handleChangeLogin}
                        required
                    />
                    <input
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                        className="login-input"
                        value={this.props.loginForm.contrasena}
                        onChange={this.props.handleChangeLogin}
                        required
                    />
                    <p className="olvide-contrasena">Perdí mi contraseña</p>
                    <button type="button" className="alternar-vista-btn" onClick={this.cambiarVista}>Registrarse</button>
                    <button type="submit" className="iniciar-btn">Iniciar Sesión</button>
                </form>
            </>
        );
    }

    renderRegister() {
        const avatares = [
            "/img/silla-default.jpg",
            "/img/auto-default.jpg",
            "/img/pelota-default.jpg"
        ];
        const fotoSeleccionada = this.props.informacionUsuario.foto;

        return (
            <>
                <h3>Crear cuenta</h3>
                {/* V.V: Cambiamos el onSubmit para usar nuestra validación local */}
                <form className="formulario-cuenta" onSubmit={this.handleRegisterSubmit}>

                    <input
                        type="text"
                        name="nombreUsuario"
                        placeholder="Usuario"
                        className="login-input"
                        /* V.V: Usamos handleLocalChange para capturar el valor aquí también */
                        onChange={this.handleLocalChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="login-input"
                        onChange={this.handleLocalChange}
                        required
                    />
                    <input
                        type="password"
                        name="contrasena"
                        placeholder="Contraseña"
                        className="login-input"
                        onChange={this.handleLocalChange}
                        required
                    />

                    <label className="etiqueta-foto">Elige tu avatar</label>
                    <div className="contenedor-seleccion-avatares">
                        {avatares.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Avatar ${index + 1}`}
                                className={`avatar-opcion ${fotoSeleccionada === img ? 'seleccionado' : ''}`}
                                onClick={() => this.props.handleSeleccionFoto(img)}
                            />
                        ))}
                    </div>

                    <button type="submit" className="crear-btn">Crear</button>
                    <button type="button" className="alternar-vista-btn" onClick={this.cambiarVista}>Iniciar Sesión</button>
                </form>
            </>
        );
    }

    render() {
        const { isLogin } = this.state;
        return (
            <div className='Login'>
                <div className="contenedor-login-simple">
                    <div className="imagen-fondo-completa">
                        <img src="/img/origins tema.jpg" alt="Imagen de fondo" />
                    </div>
                    <div className="seccion-lateral">
                        {isLogin ? this.renderLogin() : this.renderRegister()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;