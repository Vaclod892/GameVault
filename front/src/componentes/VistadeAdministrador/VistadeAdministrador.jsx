import React, { Component } from 'react';
import './VistadeAdministrador.css';

import CreaciondeGenero from "../CreaciondeGenero/CreaciondeGenero";
import CreaciondeJuego from "../CreaciondeJuego/CreaciondeJuego";
import EdiciondeComentario from "../EdiciondeComentario/EdiciondeComentario";
import EdiciondeComentarioUsuario from '../EdiciondeComentarioUsuario/EdiciondeComentarioUsuario';
import EdiciondeGenero from "../EdiciondeGenero/EdiciondeGenero";
import EdiciondeJuego from "../EdiciondeJuego/EdiciondeJuego";
import EdiciondeUsuario from "../EdiciondeUsuario/EdiciondeUsuario";
import VerJuegosAdmin from "../VerJuegosAdmin/VerJuegosAdmin";
import VerGenerosAdmin from '../VerGenerosAdmin/VerGenerosAdmin';
import VerUsuariosAdmin from '../VerUsuariosAdmin/VerUsuariosAdmin';


class VistadeAdministrador extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( <>
                    <div className="contenedor-principal-admin">

                        <div className="creacion-admin">
                            {this.props.mostrarCreacionGenero && (
                                <CreaciondeGenero 
                                visualizarFormuarioGenero={this.props.visualizarFormuarioGenero}
                                valorGenero={this.props.valorGenero}
                                handleChangeGenero={this.props.handleChangeGenero}
                                handleSubmitGenero={this.props.handleSubmitGenero}/>
                            )}


                            {this.props.mostrarCreacionJuego && (
                                <CreaciondeJuego 
                                visualizarFormuarioJuego={this.props.visualizarFormuarioJuego}
                                valorJuego={this.props.valorJuego}
                                handleChangeJuego={this.props.handleChangeJuego}
                                handleSubmitJuego={this.props.handleSubmitJuego}/>
                            )}
                            

                         </div>

                            {this.props.comentarioSeleccionado && (
                                <EdiciondeComentario 
                                generoSeleccionado={this.juegoSeleccionado}
                                valorJuego={this.props.valorJuego}
                                dataJuego={this.props.dataJuego}/>
                            )} 


                            {this.props.generoSeleccionado && (
                                <EdiciondeGenero 
                                generoSeleccionado={this.props.generoSeleccionado}
                                valorJuego={this.props.valorJuego}
                                dataJuego={this.props.dataJuego}/>
                            )}


                            {this.props.juegoSeleccionado && (
                                <EdiciondeJuego 
                                juegoSeleccionado={this.juegoSeleccionado}
                                valorJuego={this.props.valorJuego}
                                dataJuego={this.props.dataJuego}/>
                            )}

                        <div className="ver-secciones">
                        
                            <div className="tarjetas-juegos">
                                <h3 className='titulo-juego'>Juegos</h3>
                                <button type="button" className="boton-crear-juego" onClick={this.props.visualizarFormuarioJuego}> + </button>
                                <VerJuegosAdmin 
                                verJuego={this.props.dataJuegos}
                                juegoSeleccionado={this.props.juegoSeleccionado}/>
                            </div>    

                            <div className="tarjetas-Generos">
                                <h3 className="titulo-genero">Generos</h3>
                                <button type="button" className="boton-crear-genero" onClick={this.props.visualizarFormuarioGenero}> + </button>
                                <VerGenerosAdmin  
                                verGenero={this.props.dataGenero}
                                generoSeleccionado={this.props.generoSeleccionado}/>
                            </div>

                            <div className="tarjetas-usuarios">
                                <h3>Usuarios</h3>
                                <VerUsuariosAdmin  
                                mostrarUsuarios={this.props.dataUsuario} 
                                mostrarFoto={this.props.imagenUsuario} 
                                seleccionarUsuario={this.props.seleccionarUsuario}/>
                            </div>

                        </div>

                        {this.props.usuarioSeleccionado && (
                            <EdiciondeUsuario 
                            usuario={this.props.usuarioSeleccionado}
                            foto={this.props.imagenUsuario}
                            usuarioComentarios={this.props.dataComentario} 
                            usuarioCompras={this.props.dataCompra}/>
                        )}

                    </div>
        </> );
    }
}

export default VistadeAdministrador;