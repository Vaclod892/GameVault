import React, { Component } from 'react';

class EdiciondeComentarioUsuario extends Component {
    constructor() {
        super();
    }

    render() { 
        return ( <>
        <div>
          <form onSubmit={this.props.handleSubmitComentarios}>
            <div className="boton-recomenacion"> 
            <button type="button"className={this.props.hacerComentario.recomienda ? "boton-like-activado" : "boton-like"} onClick={() => this.props.handleChangeComentarios({  target: { name: "recomienda", value: true } })}> 👍 Recomiendo! </button>
            <button type="button" className={!this.props.hacerComentario.recomienda ? "boton-dislike-activado" : "boton-dislike"} onClick={() => this.props.handleChangeComentarios({ target: { name: "recomienda", value: false } }) }> 👎 No lo Recomiendo! </button>
          
            </div>
            <div className="resena-comentario">
              <textarea value={this.props.hacerComentario.resena} name="resena" onChange={this.props.handleChangeComentarios} />
            </div>  
          </form>
        </div>
        </> );
    }
}
 
export default EdiciondeComentarioUsuario;