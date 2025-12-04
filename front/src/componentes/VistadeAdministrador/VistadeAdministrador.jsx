import React, { Component } from 'react';

//import CreaciondeGenero from "../CreaciondeGenero/CreaciondeGenero";
//import CreaciondeJuego from "../CreaciondeJuego/CreaciondeJuego";
//import EdiciondeComentario from "../EdiciondeComentario/EdiciondeComentario";
//import EdiciondeComentarioUsuario from '../EdiciondeComentarioUsuario/EdiciondeComentarioUsuario';
//import EdiciondeGenero from "../EdiciondeGenero/EdiciondeGenero";
//import EdiciondeJuego from "../EdiciondeJuego/EdiciondeJuego";
//import EdiciondeUsuario from "../EdiciondeUsuario/EdiciondeUsuarios";
//import VerJuegosAdmin from "../VerJuegosAdmin/VerJuegosAdministrador";
//import VerGenerosAdmin from '../VerGenerosAdmin/VerGenerosAdmin';
//import VerUsuariosAdmin from '../VerUsuariosAdmin/VerUsuariosAdmin';


class VistadeAdministrador extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( <>

            <CreaciondeGenero />
            <CreaciondeJuego />
            <EdiciondeComentario /> 
            <EdiciondeComentarioUsuario />
            <EdiciondeGenero />
            <EdiciondeJuego />
            <EdiciondeUsuario />
            <VerJuegosAdmin />
            <VerGenerosAdmin />
            <VerUsuariosAdmin /> 

        </> );
    }
}

export default VistadeAdministrador;