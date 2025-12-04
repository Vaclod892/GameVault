import React, { Component } from 'react';
import './CreaciondeJuego.css';

class CreaciondeJuego extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( <>
        <div className="contenedor-principal">
          <button type="button" className="boton-bloquear-vista-juegoo" onClick={this.props.visualizarFormuarioJuego}> x </button>
            <form className="CreacionGenero-formulario" onSubmit={this.props.handleSubmitJuego}>
                    <label for="nombre">Nombre:</label> 
                <input type="text" id="nombre" value={this.props.valorJuego.titulo} className="CreacionGenero-input" name="titulo" onChange={this.props.handleChangeJuego}/>
                    <label for="descripcion">Descripcion:</label> 
                <input type="text" id="descripcion" value={this.props.valorJuego.descripcion} className="CreacionGenero-input" name="descripcion" onChange={this.props.handleChangeJuego} />
                    <label for="precio">Precio:</label> 
                <input type="text" id="precio" value={this.props.valorJuego.precio} className="CreacionGenero-input" name="precio" onChange={this.props.handleChangeJuego} />
                    <label for="genero">Genero:</label> 
                    <div className="contenedor-genero-formulario-juego">
                        <div className="contenedor-genero">
                        {this.props.dataGenero.map(genero => (
                         <button key={genero.ID_genero} type="button" className="genero-tarjeta-seleccion" name="genero" value={genero.nombre} onClick={(e) => this.props.handleChangeJuego(e)} >
                            {genero.nombre}
                        </button>
                    ))}
                        </div>
                   </div>
                <input type="submit" value="Crear" />
            </form>
        </div>    
        </> );
    }
}
 
export default CreaciondeJuego;