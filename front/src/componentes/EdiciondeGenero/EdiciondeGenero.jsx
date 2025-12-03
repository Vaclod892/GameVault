import React, { Component } from 'react';

class EdiciondeGenero extends Component {
    constructor(props) {
        super(props);
    }

    render() { 

       if(!this.props.genero) return null;

        return ( <>
        <div className="contenedor-principal">
            <h3>Editar Genero</h3>
            <form className="EdicionGenero-formulario" onSubmit={this.props.updateDtaGenero}> 
                <input type="text" className="EdicionGenero-input" value={this.props.genero} onChange={this.props.handleChangeGenero} />
                <input type="submit" value="Editar" />
            </form>
        </div>
        </> );
    }
}
 
export default EdiciondeGenero;