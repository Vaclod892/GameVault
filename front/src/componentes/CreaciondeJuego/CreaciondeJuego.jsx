import React, { Component } from 'react';

class CreaciondeJuego extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( <>
        <div className="contenedor-principal">
            <form className="CreacionGenero-formulario">
                    <label for="imagen">Portada</label> 
                <input type="text" id="imagen" className="CreacionGenero-inputImagen"/>
                    <label for="imagen">Nombre:</label> 
                <input type="text" id="imagen" className="CreacionGenero-inputNombre"/>
                    <label for="imagen">Descripcion:</label> 
                <input type="text" id="imagen" className="CreacionGenero-inputDescripcion"/>
                    <label for="imagen">Genero:</label> 
                <input type="text" id="imagen" className="CreacionGenero-inputGenero"/>
            </form>
                <div className="contenedor-comentarios">

                </div>    
        </div>
        </> );
    }
}
 
export default CreaciondeJuego;