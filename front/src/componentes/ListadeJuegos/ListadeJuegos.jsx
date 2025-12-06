import React, { Component } from "react";
import TarjetaJuego from "../TarjetaJuego/TarjetaJuego";

class ListadeJuegos extends Component {
    render() {
        // V.V: Recibimos la lista de juegos y la función para agregar al carrito
        const juegos = this.props.juegos || [];

        return (
            <div className="lista-juegos-container">
                {juegos.length > 0 ? (
                    // V.V: Si hay juegos, hacemos el map
                    juegos.map((juego) => (
                        <TarjetaJuego
                            key={juego.ID_Juego}
                            datos={juego}
                            agregarAlCarrito={this.props.agregarAlCarrito}
                        />
                    ))
                ) : (
                    // V.V: Si NO hay juegos (array vacío), mostramos mensaje
                    <div style={{ width: '100%', textAlign: 'center', color: 'white', padding: '20px' }}>
                        <p>Cargando juegos...</p>
                    </div>
                )}
            </div>
        );
    }
}

export default ListadeJuegos;