import React, { Component } from 'react';

class EdiciondeJuego extends Component {
    constructor() {
        super();
    }

    render() { 
        return ( <>
        <div className="contenedor-principal">

            <form className="CreacionGenero-formulario">
                    <label for="imagen">Portada</label> 
                <input type="text" id="imagen" className="CreacionGenero-input"/>
                    <label for="imagen">Nombre:</label> 
                <input type="text" id="imagen" className="CreacionGenero-input"/>
                    <label for="imagen">Descripcion:</label> 
                <input type="text" id="imagen" className="CreacionGenero-input"/>
                    <label for="imagen">Genero:</label> 
                <input type="text" id="imagen" className="CreacionGenero-input"/>
            </form>
                <div className="contenedor-comentarios">
                </div>    

        </div>
        </> );
    }
}
 
export default EdiciondeJuego;