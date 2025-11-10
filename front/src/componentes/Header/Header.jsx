import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import Loggin from '../Loggin/Loggin';
import Carrito from '../Carrito/Carrito';

import './Header.css';

class Header extends Component {
    constructor() {
        super();
    }
    render() { 
        return ( <>
        <div className="encabezado">
            <nav>
            <Link to="/Loggin">Iniciar Sesion</Link> 
            <Link to="/Loggin">Crear cuenta</Link> 
                <h1>Hola</h1>
            <Link to="/Carrito">Iniciar Sesion</Link> 
            </nav>    
        </div>
        </> );
    }
}
 
export default Header;