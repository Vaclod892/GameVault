import React, { Component } from 'react';
import './CreaciondeGenero.css';

class CreaciondeGenero extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( <>
        <div className="contenedor-principal">
            <h3 className="titulo-creacion-genero">Añadir nuevo genero</h3>
                <button type="button" className="boton-bloquear-vista-genero" onClick={this.props.visualizarFormuarioGenero}> x </button>
                    <form className="CreacionGenero-formulario" onSubmit={this.props.handleSubmitGenero}> 
                        <input type="text" className="CreacionGenero-input" value={this.props.valorGenero.nombre} onChange={this.props.handleChangeGenero} />
                        <input type="submit" value="Crear" />
                    </form>
        </div>
        </> );
    }
}
 
export default CreaciondeGenero;