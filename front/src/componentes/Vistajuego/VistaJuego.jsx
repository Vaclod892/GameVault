import React, { Component } from 'react';

import InformaciondeJuego from "../InformaciondeJuego/InformaciondeJuego"
import Comentarios from '../Comentarios/Comentarios';

import "./VistaJuego";

class VistaJuego extends Component {
    constructor(props) {
        super(props);
    }

    render() {

       const { id } = this.props.match.params;
       
       const juego = this.props.dataJuego;
       const comentarios = this.props.dataComentario;

       const juegoEspecifico = juego.find(j => String(j.id) === String(id));
       const comentariosDelJuego = comentarios.filter(c => String(c.ID_juego) === String(id));

        return ( <>
                <InformaciondeJuego juego={juegoEspecifico} />
                <Comentarios comentarios={comentariosDelJuego}/>
              </> );
    }
}
 
export default VistaJuego;