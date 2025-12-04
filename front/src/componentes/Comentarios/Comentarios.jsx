import React, { Component } from 'react';
import './Comentarios.css';

class Comentarios extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        const comentarios = this.props.comentarios;  
        const comentarioActual = this.props.comentarioActual;


        return (
            <>
                <div className="contenedor-principal">
                <form onSubmit={(e) => this.props.handleSubmitComentario(e, this.props.idJuego)}>
                        <div className="boton-recomenacion">
                            <button type="button" className={comentarioActual.recomienda ? "boton-like-activado" : "boton-like"} 
                                onClick={() => this.props.handleChangeComentario({ target: { name: "recomienda", value: true } }) } >👍 Recomiendo!  </button>
                            <button type="button" className={!comentarioActual.recomienda ? "boton-dislike-activado" : "boton-dislike"} onClick={() => this.props.handleChangeComentario({ target: { name: "recomienda", value: false }})} > 👎 No lo Recomiendo! </button>
                        </div>

                        <div className="resena-comentario">
                            <textarea value={comentarioActual.resena} name="resena" placeholder='Escribe un comentario...' onChange={this.props.handleChangeComentario} />
                        </div>

                        <input type="submit" value="Comentar"/>
                    </form>

                    {comentarios.map((comen) => (
                        <div key={comen.ID_comentario} className="comentario-individual">
                            <div className="informacion">
                                {comen.recomienda ? 
                                <p>Recomienda!</p> : 
                                <p>No lo Recomienda!</p>}
                            </div>

                            <div className="infodescripcion">
                                <p>{comen.resena}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    }
}

export default Comentarios;
