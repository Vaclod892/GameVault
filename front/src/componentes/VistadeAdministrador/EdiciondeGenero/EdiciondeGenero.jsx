import React, { Component } from 'react';

class EdiciondeGenero extends Component {
    constructor() {
        super();
    }

    render() { 
        return ( <>
        <div className="contenedor-principal">
            <div className="titulo-genero"> 
            <h3>Añadir nuevo genero</h3>
            </div>
                <div className="formulario-genero">
                    <form className="CreacionGenero-formulario"> 
                        <input className="CreacionGenero-input" type="text" />
                    </form>
                </div>
        </div>
        </> );
    }
}
 
export default EdiciondeGenero;