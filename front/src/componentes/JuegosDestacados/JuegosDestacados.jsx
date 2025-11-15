import React, { Component } from 'react';
import './JuegosDestacados.css';

class JuegosDestacados extends Component {
    constructor(props) {
        super(props);
        this.juegos = [ // V.D. - Datos hardcodeados para maquetación de 7 juegos
            { id: 1, titulo: "DIABLO", image: "/img/origins tema.jpg" },
            { id: 2, titulo: "JEDI SURVIVOR", image: "/img/origins tema.jpg" },
            { id: 3, titulo: "NBA 2K24", image: "/img/origins tema.jpg" },
            { id: 4, titulo: "STARFIELD", image: "/img/origins tema.jpg" },
            { id: 5, titulo: "FORZA MOTORSPORT", image: "/img/origins tema.jpg" },
            { id: 6, titulo: "SEA OF STARS", image: "/img/origins tema.jpg" },
            { id: 7, titulo: "JUEGO 7", image: "/img/origins tema.jpg" },
        ];
    }

    render() {
        return (
            <div className="contenedor-juegos-destacados">
                <div className="juegos-listado">
                    {this.juegos.map(juego => (
                        <div key={juego.id} className="juego-card">
                            <img src={juego.image} alt={juego.titulo} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default JuegosDestacados;