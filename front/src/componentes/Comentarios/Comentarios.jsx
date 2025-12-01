import React, { Component } from 'react';
import './Comentarios.css';

class Comentarios extends Component {
    constructor(props) {
        super(props);
    }
    render() { 

        const comentarios = this.props.comentarios;  
       
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
            {
                comentarios.map((comen) => {
                  return (
                    <div key={comen.ID_comentario} className="contenedorprincipal">
                       <div className="informacion">
                        { comen.recomienda ?
                            <p>Recomienda!</p> : 
                            <p>No lo Recomienda!</p>
                        }
                       </div>
                      <div className="infodescripcion">
                    <p>{comen.resena}</p>
                  </div>   
                    </div>
                  )
             })
           }
        </div>         
        </> );
    }
}
 
export default Comentarios;