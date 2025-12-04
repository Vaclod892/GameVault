import React, { Component } from 'react';

class EdiciondeUsuario extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      const usuario = this.props.usuario;
      const foto = this.props.foto

      const comentariosUsuarios = this.props.usuarioComentarios.filter(
        (comen) => comen.ID_usuario === usuario.ID_usuario 
      );

      const comprasUsuarios =  this.props.usuarioCompras.filter(
        (compr) => compr.ID_usuario === usuario.ID_usuario
      );

      return (
        <div className="popup-admin">
          <button type="button" className="boton-bloquear-vista-usuario"> x </button>
            <div className="usuario-header">
                <img src={foto}  alt="Foto de perfil" className="foto-usuario-popup" />
                <h2>{usuario.nombreUsuario}</h2>
            </div>

            <p>Compras realizadas: {comprasUsuarios.length}</p>
            <p>Comentarios hechos: {comentariosUsuarios.length}</p>

        </div>
    );
    }
  }

export default EdiciondeUsuario;