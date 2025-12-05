import React, { Component } from 'react';


class EdiciondeUsuario extends Component {
    constructor(props) {
        super(props);

      this.state = {
        imageURL: "https://static.wikia.nocookie.net/callofduty/images/f/fa/Giant_mech_Origins_BOII.png/revision/latest?cb=20130827204332"    
     }
        
    }
    render() {
      const usuario = this.props.usuario;
      const foto = this.props.foto

      const comentariosUsuarios = this.props.dataComentarios.filter(
        (comen) => comen.ID_usuario === usuario.ID_usuario 
      );

      const comprasUsuarios =  this.props.dataCompras.filter(
        (compr) => compr.ID_usuario === usuario.ID_usuario
      );

      return (
        <div className="popup-admin">
          <button type="button" className="boton-bloquear-vista-usuario" onClick={this.props.visualizarDatosUsuario}> x </button>
            <div className="usuario-header">
                <img src={foto}  alt="Foto de perfil" className="foto-usuario-popup" />
                <h2>{usuario.nombreUsuario}</h2>
            </div>
              <h3 className="titulo-seccion">Juegos comprados:</h3>

                <div className="lista-de-compras">

                {comprasUsuarios.map((compra) => {
                const juego = this.props.dataJuegos.find(
                (juego) => juego.ID_Juego === compra.ID_juego
                 );

               if (!juego) return null;

                return (
                <div className="tarjeta-compra" key={compra.ID_compra}>

                <img src={this.state.imageURL} alt="portada-juego" className="portada-compra" />

                <div className="info-compra">
                    <h4>{juego.Titulo}</h4>
                    <p>{juego.Descripcion.slice(0, 70)}...</p>
                    <span className="precio-compra">${juego.Precio}</span>
                </div>

            </div>
         );
      })}

      </div>
      <div className="contenedor-comentarios">
        <h3>Comentarios hechos:</h3>

          {comentariosUsuarios.length === 0 && <p>No hizo comentarios todavía.</p>}

          {comentariosUsuarios.map((coment) => (
              <div className="comentario-usuario" key={coment.ID_comentario} onClick={() => this.props.seleccionarComentario(coment)}>
                <span className={coment.recomienda ? "reco" : "noreco"}>
                    {coment.recomienda ? "👍 Recomendó" : "👎 No recomendó"}
                </span>
            <p>{coment.resena}</p>
        </div>
        ))}
      </div>
    </div>
      
    );
    }
  }

export default EdiciondeUsuario;