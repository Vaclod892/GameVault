import React, { Component } from 'react';
import './VerUsuariosAdmin.css';

class VerUsuariosAdmin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const usuarios = this.props.mostrarUsuarios;
        const fPerfil = this.props.mostrarFoto; 

        return (
            <>
                <div className="contenedor-principal">
                    {usuarios.map(usuario => (
                        <div className="tarjeta-usuario" key={usuario.ID_usuario} onClick={() => this.props.seleccionarUsuario(usuario)}>
                            <div className="informacion">
                                <img
                                    src={fPerfil} alt="Foto de usuario"
                                />
                            </div>
                            <div className="contenedor-secundario-tarjeta">
                                <div className="informacion-tarjeta">
                                    <p className="nombre-usuarios">
                                        {usuario.nombreUsuario}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default VerUsuariosAdmin;