import React, { Component } from 'react';

class Comentarios extends Component {
    constructor() {
        super();
    }
    render() { 
        return ( <>
            <div>
                <span>Que piensas?</span>
                <button>positivo</button>
                <button>negativo</button>
                <form>
                    <input type="text" placeholder="Escribe un comentario..."/>   
                </form>
                <div></div>
            </div>
        </> );
    }
}
 
export default Comentarios;