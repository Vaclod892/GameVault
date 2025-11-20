import React, { Component } from 'react';

import CreaciondeGenero from "../CreaciondeGenero/CreaciondeGenero";
import CreaciondeJuego from "../CreaciondeJuego/CreaciondeJuego";
import EdiciondeComentario from "../EdiciondeComentario/EdiciondeComentario";
import EdiciondeGenero from "../EdiciondeGenero/EdiciondeGenero";
import EdiciondeJuego from "../EdiciondeJuego/EdiciondeJuego";
import EdiciondeUsuario from "../EdiciondeUsuario/EdiciondeUsuarios"

class VistadeAdministrador extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <>
            <h1> Vista de Administrador </h1>
        </> );
    }
}
 
export default VistadeAdministrador;