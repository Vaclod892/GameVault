import React, { Component } from 'react';

import InformaciondeJuego from "../InformaciondeJuego/InformaciondeJuego"
import Comentarios from '../Comentarios/Comentarios';

import "./VistaJuego";

class VistaJuego extends Component {
    constructor() {
        super();
    }

    state = {  }
    render() { 
        return ( <>
                <InformaciondeJuego></InformaciondeJuego>
                <Comentarios></Comentarios>
              </> );
    }
}
 
export default VistaJuego;