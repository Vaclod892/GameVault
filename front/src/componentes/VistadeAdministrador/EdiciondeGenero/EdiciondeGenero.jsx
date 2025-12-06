import React, { Component } from 'react';
import './EdiciondeGenero.css';

class EdiciondeGenero extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( <>
        <div className="contenedor-principal">
            <h3 className="titulo-creacion-genero">Editar Nombre</h3>
                <button type="button" className="boton-bloquear-vista-genero" onClick={this.props.visualizarFormularioGenero}> x </button>
                    <form className="CreacionGenero-formulario" onSubmit={this.props.updateDtaGenero}> 
                        <input type="text" className="CreacionGenero-input" value={this.props.valorGenero.nombre} onChange={this.props.handleChangeGenero} />
                        <input type="submit" value="Editar" />
                    </form>
        </div>
        </> );
    }
}
 
export default EdiciondeGenero;