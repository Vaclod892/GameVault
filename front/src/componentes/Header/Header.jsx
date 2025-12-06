import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // V.V: Agregué FaSignOutAlt por si quieres un icono de salida
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { busqueda: '' }; // 2. Estado local para el input
        this.handleChange = this.handleChange.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    handleChange(e) {
        this.setState({ busqueda: e.target.value });
    }
    onSearch() {
        // 3. Ejecutamos la búsqueda y navegamos
        if (this.state.busqueda.trim()) {
            this.props.handleSearch(this.state.busqueda); // Filtra en App.js
            this.props.history.push('/Resultados'); // Redirige
        }
    }

    render() {
        const { usuario, handleLogout } = this.props; // V.V: Desestructuramos las props

        return (
            <header className="header-container">

                {/* V.V: Sección Izquierda - Buscador (Igual que antes) */}
                <div className="header-left">
                    <div className="search-bar">
                        {/* 4. Conectamos el Input */}
                        <input
                            type="text"
                            placeholder="Search..."
                            value={this.state.busqueda}
                            onChange={this.handleChange}
                            onKeyPress={(e) => e.key === 'Enter' && this.onSearch()} // Buscar al dar Enter
                        />
                        <button className="search-btn" onClick={this.onSearch}>
                            <FaSearch />
                        </button>
                    </div>
                </div>

                {/* V.V: Sección Central - Logo (Igual que antes) */}
                <div className="header-center">
                    <Link to="/" className="logo-link">
                        <div className="logo-placeholder">
                            <span className="logo-icon">🎮</span>
                            <span className="logo-text">LUNG</span>
                        </div>
                    </Link>
                </div>

                {/* V.V: Sección Derecha - Usuario Dinámico */}
                <div className="header-right">

                    {usuario ? (
                        <div className="user-logged-section">
                            {/* V.V: Ahora la foto y el nombre llevan al perfil */}
                            <Link to="/Perfil" className="link-perfil-header">
                                <img
                                    src={usuario.foto || "/img/silla-default.jpg"}
                                    alt="Perfil"
                                    className="header-user-avatar"
                                />
                                <span className="header-user-name">{usuario.nombreUsuario}</span>
                            </Link>

                            <div className="header-user-info">
                                <button className="header-logout-btn" onClick={handleLogout}>
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    ) : (
                        /* VISTA NO LOGUEADO (La original) */
                        <div className="user-section">
                            <div className="user-text">
                                <Link to="/Login" className="login-link">Iniciar sesión</Link>
                                <Link to="/Login" className="register-link">crear cuenta</Link>
                            </div>
                            <FaUser className="icon-user" />
                        </div>
                    )}

                    {/* El carrito siempre visible */}
                    <Link to="/Carrito" className="cart-container">
                        <FaShoppingCart className="icon-cart" />
                    </Link>
                </div>

            </header>
        );
    }
}

export default withRouter(Header);