import React, { Component } from 'react';

import InformaciondeJuego from "../InformaciondeJuego/InformaciondeJuego"
import Comentarios from '../Comentarios/Comentarios';

import "./VistaJuego.css";

class VistaJuego extends Component {
    constructor(props) {
        super(props);
    }

render() {
    const { id } = this.props.match.params;
  
    const juegos = this.props.dataJuego || [];        
    const comentarios = this.props.dataComentario || []; 
  
    const juegoEspecifico = juegos.find(juego => String(juego.ID_Juego) === String(id));
  
    const comentariosDelJuego = comentarios.filter(comen => Number(comen.ID_juego) === Number(id) );

    return (
      <>
        <div className="contenedor-principal">
          <InformaciondeJuego juego={juegoEspecifico} />
          <Comentarios
            comentarios={comentariosDelJuego}
            comentarioActual={this.props.comentarioActual}
            handleChangeComentario={this.props.handleChangeComentario}
            handleSubmitComentario={(e) => this.props.handleSubmitComentario(e, id)}
            idJuego={id}
          />
        </div>
      </>
    );
  }
    
}     
 
export default VistaJuego;