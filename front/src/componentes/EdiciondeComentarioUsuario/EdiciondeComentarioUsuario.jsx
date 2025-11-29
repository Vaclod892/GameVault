import React, { Component } from 'react';

class EdiciondeComentarioUsuario extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( <>
         <div className="contenedor-principal">
            <h3>Editar comentario de:</h3>
            <form className="CreacionGenero-formulario"> 
                <input type="button" className="CreacionGenero-input" value="Recomendado!" />
                <input type="button" className="CreacionGenero-input" value="No lo recomiendo!" />
                <textarea cols="50" rows="20"></textarea>
                <input type="submit" class="submit-btn" value="Editar" />
            </form>
        </div>
        </> );
    }
}
 
export default EdiciondeComentarioUsuario;