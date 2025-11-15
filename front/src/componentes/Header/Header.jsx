import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Carrito from '../Carrito/Carrito';

import './Header.css';

class Header extends Component {
    constructor() {
        super();
    }
    render() {
        return (<>
            <div className="encabezado">
                <nav>
                    <Link to="/Login">Iniciar Sesion</Link> {/* V.D. - Enlace a /Login */}
                    <Link to="/Login">Crear cuenta</Link> {/* V.D. - Enlace a /Login */}
                    <Link to="/Carrito">Iniciar Sesion</Link>
                </nav>
            </div>
        </>);
    }
}

export default Header;