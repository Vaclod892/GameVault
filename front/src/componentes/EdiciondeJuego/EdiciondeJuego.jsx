import React, { Component } from 'react';

class EdiciondeJuego extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
   
        return ( <>
        <div className="contenedor-principal">
            <form className="CreacionGenero-formulario" onSubmit={this.props.handleSubmitJuego}>
                    <label for="nombre">Nombre:</label> 
                <input type="text" id="nombre" value={this.props.valorJuego.titulo} className="CreacionGenero-input" name="titulo" onChange={this.props.handleChangeJuego}/>
                    <label for="descripcion">Descripcion:</label> 
                <input type="text" id="descripcion" value={this.props.valorJuego.descripcion} className="CreacionGenero-input" name="descripcion" onChange={this.props.handleChangeJuego} />
                    <label for="precio">Precio:</label> 
                <input type="text" id="precio" value={this.props.valorJuego.precio} className="CreacionGenero-input" name="precio" onChange={this.props.handleChangeJuego} />
                    <label for="genero">Genero:</label> 
                <input type="text" id="genero" value={this.props.valorJuego.genero} className="CreacionGenero-input" name="genero" onChange={this.props.handleChangeJuego} />
                <input type="submit" value="Crear" />
            </form>
        </div>    
        </> );
    }
}
 
export default EdiciondeJuego;