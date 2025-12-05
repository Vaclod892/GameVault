import React, { Component } from 'react';
import './EdiciondeComentarios.css';

class EdiciondeComentario extends Component {
  constructor() {
      super();
  }

  render() { 
      return ( <>
      <div className="contenedor-principal">
          <h3>Editar comentario de:</h3>
          <form onSubmit={this.props.updateDtaComentario}>
                      <div className="boton-recomenacion">
                          <button type="button" className={this.props.valorComentario.recomienda ? "boton-like-activado" : "boton-like"} onClick={() => this.props.handleChangeComentario({ target: { name: "recomienda", value: true } }) } >👍 Recomiendo!  </button>
                          <button type="button" className={!this.props.valorComentario.recomienda ? "boton-dislike-activado" : "boton-dislike"} onClick={() => this.props.handleChangeComentario({ target: { name: "recomienda", value: false }})} > 👎 No lo Recomiendo! </button>
                      </div>

                      <div className="resena-comentario">
                          <textarea value={this.props.valorComentario.resena} name="resena" placeholder='Escribe un comentario...' onChange={this.props.handleChangeComentario} />
                      </div>

                      <input type="submit" value="Editor"/>
              </form>
      </div>
      </> );
  }
}

export default EdiciondeComentario;