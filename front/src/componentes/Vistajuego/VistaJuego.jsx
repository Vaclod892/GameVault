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
       
       const juego = this.props.dataJuego;
       const comentarios = this.props.dataComentario;

       const juegoEspecifico = juego.find(juego => String(juego.id) === String(id));
       const comentariosDelJuego = comentarios.filter(comen => String(comen.ID_juego) === String(id));

        return ( <>
                <InformaciondeJuego juego={juegoEspecifico} />
                <Comentarios comentarios={comentariosDelJuego} 
                hacerComentario={this.props.hacerComentario}
                handleChangeComentarios={this.props.handleChangeComentario} 
                handleSubmitComentarios={this.props.handleSubmitComentario} />
              </> );
    }
}
 
export default VistaJuego;