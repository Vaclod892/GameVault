import React, { Component } from 'react';

class CreaciondeGenero extends Component {
    constructor() {
        super();
    }

    render() { 
        return ( <>
        <div className="contenedor-principal">
            <h3>Añadir nuevo genero</h3>
            <form className="CreacionGenero-formulario"> 
                <input className="CreacionGenero-input" type="text" />
            </form>
        </div>
        </> );
    }
}
 
export default CreaciondeGenero;