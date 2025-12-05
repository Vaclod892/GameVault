import React, { Component } from 'react';
import './EdiciondeJuego.css';

class EdiciondeJuego extends Component {
    constructor(props) {
        super(props);
    }

    render() { 

      const juego = this.props.juego;

      if (!Array.isArray(this.props.dataComentario)) return null;

      const comentariosJuegos = this.props.dataComentario.filter(
        (comen) => comen.ID_juego === juego.ID_Juego 
        ); 
        
        return ( <>
        <div className="contenedor-principal">
          <button type="button" className="boton-bloquear-vista-juegoo" onClick={this.props.visualizarEditorJuego}> x </button>
            <form className="CreacionGenero-formulario" onSubmit={this.props.updateDtaJuego}>
                    <label htmlFor="nombre">Nombre:</label> 
                <input type="text" id="nombre" value={this.props.valorJuego.Titulo} className="CreacionGenero-input" name="Titulo" onChange={this.props.handleChangeJuego}/>
                    <label htmlFor="descripcion">Descripcion:</label> 
                <input type="text" id="descripcion" value={this.props.valorJuego.Descripcion} className="CreacionGenero-input" name="Descripcion" onChange={this.props.handleChangeJuego} />
                    <label htmlFor="precio">Precio:</label> 
                <input type="text" id="precio" value={this.props.valorJuego.Precio} className="CreacionGenero-input" name="Precio" onChange={this.props.handleChangeJuego} />
                    <label htmlFor="genero">Genero:</label> 
                    <div className="contenedor-genero-formulario-juego">
                        <div className="contenedor-genero">
                        {this.props.dataGenero.map(genero => (
                         <button key={genero.ID_genero} type="button" className="genero-tarjeta-seleccion" name="genero" value={genero.nombre} onClick={() => this.props.handleSeleccionGeneroJuego(genero.nombre)} >
                            {genero.nombre}
                        </button>
                    ))}
                        </div>
                   </div>
                <input type="submit" value="Editar" />
            </form>
            <div className="edicion-comentarios">
                {comentariosJuegos.map((coment) => (
                    <div className="comentario-usuario" key={coment.ID_comentario} onClick={() => this.props.seleccionarComentario(coment)}>
                        <span className={coment.recomienda ? "reco" : "noreco"}>
                        {coment.recomienda ? "👍 Recomendó" : "👎 No recomendó"}
                        </span>
                      <p>{coment.resena}</p>
                    </div>
                ))}
            </div>
        </div>    
        </> );
    }
}
 
export default EdiciondeJuego;