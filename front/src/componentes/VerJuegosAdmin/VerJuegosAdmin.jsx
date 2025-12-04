import React, { Component } from 'react';
import './VerJuegosAdmin.css';

class VerJuegosAdmin extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        imageJuegoURL: "https://static.wikia.nocookie.net/callofduty/images/f/fa/Giant_mech_Origins_BOII.png/revision/latest?cb=20130827204332"
     }
    render() { 

        const juegos = this.props.verJuego

        if(!juegos || juegos.length === 0) {
            return <p>No hay juegos registrados.</p>;
        }

        return ( <>
                <div className="lista-juegos">
                {juegos.map(juego => (
                    <div className="juego-tarjeta" key={juego.ID_juego}>
                        <div className="juego-info">
                            <p className="juego-titulo">{juego.titulo}</p>
                            <span className="juego-precio">Precio: ${juego.precio}</span>
                        </div>
                        <div className="juego-botones">
                            <button 
                                className="boton-editar" 
                                onClick={() => this.props.seleccionarJuego(juego)}>
                                Editar
                            </button>
                            <button className="boton-eliminar">Eliminar</button>
                        </div>
                    </div>
                ))}
            </div>
        </> );
    }
}
 
export default VerJuegosAdmin;