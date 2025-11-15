import React, { Component } from "react";
import TarjetaJuego from "../TarjetaJuego/TarjetaJuego";

class ListadeJuegos extends Component {
    constructor() {
        super();
        this.juegosFicticios = [ // V.D. - Datos hardcodeados de 6 juegos para la lista
            { id: 1, titulo: "The Last of Us Part I", descripcion: "Joel y Ellie, dos personas conectadas por la brutalidad del mundo en el que viven, se ven obligados a enfrentarse a criaturas y asesinos ...", precio: 20000, precioOriginal: 70000, imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png" },
            { id: 2, titulo: "Red Dead Redemption 2", descripcion: "Red Dead Redemption 2 es un videojuego de acción y aventura en un mundo abierto ambientado en 1899 ...", precio: 15000, precioOriginal: 60000, imageURL: "https://i.imgur.com/uN8YvK5.png" },
            { id: 3, titulo: "Project Zomboid", descripcion: "Project Zomboid es un videojuego de terror y supervivencia con vista isométrica, desarrollado por The Indie Stone ...", precio: 5000, precioOriginal: 45000, imageURL: "https://i.imgur.com/tYt3LpS.png" },
            { id: 4, titulo: "Street Fighters 6", descripcion: "Street Fighter 6 es la sexta entrega principal de la franquicia Street Fighter, trayendo consigo nuevas mecánicas y experiencia renovada con tres modos de juego ...", precio: 15000, precioOriginal: 50000, imageURL: "https://i.imgur.com/vHq1Q2j.png" },
            { id: 5, titulo: "Resident evil 2", descripcion: "Publicado originalmente en 1998, Resident Evil 2, uno de los juegos más influyentes de todos los tiempos, vuelve completamente ...", precio: 10000, precioOriginal: 40000, imageURL: "https://i.imgur.com/vHq1Q2j.png" },
            { id: 6, titulo: "Mad Max", descripcion: "Mad Max: Fury Road (2015) es un videojuego de acción y mundo abierto ambientado en un universo post-apocalíptico ...", precio: 8000, precioOriginal: 30000, imageURL: "https://i.imgur.com/uN8YvK5.png" }
        ];
    }

    render() {
        return (
            <div className="lista-juegos-container">
                {this.juegosFicticios.map(juego => (
                    <TarjetaJuego key={juego.id} datos={juego} />
                ))}
            </div>
        );
    }
}

export default ListadeJuegos;