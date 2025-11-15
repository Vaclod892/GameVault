import React, { Component } from 'react';

import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true, // V.D. - Estado para controlar la vista (Login/Crear cuenta)
        };
        this.cambiarVista = this.cambiarVista.bind(this);
    }

    cambiarVista() { // V.D. - Función para alternar la vista
        this.setState(prevState => ({
            isLogin: !prevState.isLogin,
        }));
    }

    renderLogin() {
        return (
            <>
                <h3>Iniciar sesion</h3>
                <form className="formulario-sesion">
                    <input type="text" placeholder="Usuario" className="login-input" />
                    <input type="password" placeholder="Contraseña" className="login-input" />
                    <p className="olvide-contrasena">Perdí mi contraseña</p>
                    <button type="button" className="alternar-vista-btn" onClick={this.cambiarVista}>Registrarse</button>
                    <button type="submit" className="iniciar-btn">Iniciar Sesión</button>
                </form>
            </>
        );
    }

    renderRegister() {
        return (
            <>
                <h3>Crear cuenta</h3>
                <form className="formulario-cuenta">
                    <input type="text" placeholder="Usuario" className="login-input" />
                    <input type="password" placeholder="Contraseña" className="login-input" />
                    <label className="etiqueta-foto">
                        Elige una foto
                    </label>
                    <div className="contenedor-foto">
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
                <div className="contenedor-login-simple"> {/* V.D. - Contenedor de la vista de Login */}
                    <div className="imagen-fondo-completa">
                        <img src="/img/origins tema.jpg" alt="Imagen de fondo" />
                    </div>
                    <div className="seccion-lateral">
                        {isLogin ? this.renderLogin() : this.renderRegister()} {/* V.D. - Alternancia de formularios */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;