import React, { Component } from 'react';
import './SelectorGenero.css';

class SelectorGenero extends Component {
    constructor(props) {
        super(props);
        this.generosTotales = [ // V.D. - Datos hardcodeados de 15 géneros
            { id: 1, nombre: "ACCIÓN", class: "accion", image: "/img/origins tema.jpg" },
            { id: 2, nombre: "AVENTURA", class: "aventura", image: "/img/origins tema.jpg" },
            { id: 3, nombre: "ESTRATEGIA", class: "estrategia", image: "/img/origins tema.jpg" },
            { id: 4, nombre: "DEPORTES", class: "deportes", image: "/img/origins tema.jpg" },
            { id: 5, nombre: "RPG", class: "rpg", image: "/img/origins tema.jpg" },
            { id: 6, nombre: "SHOOTER", class: "shooter", image: "/img/origins tema.jpg" },
            { id: 7, nombre: "SIMULACIÓN", class: "simulacion", image: "/img/origins tema.jpg" },
            { id: 8, nombre: "SUPERVIVENCIA", class: "survival", image: "/img/origins tema.jpg" },
            { id: 9, nombre: "MOBA", class: "moba", image: "/img/origins tema.jpg" },
            { id: 10, nombre: "BATTLE ROYALE", class: "battleroyale", image: "/img/origins tema.jpg" },
            { id: 11, nombre: "TERROR", class: "terror", image: "/img/origins tema.jpg" },
            { id: 12, nombre: "PUZLES", class: "puzzles", image: "/img/origins tema.jpg" },
            { id: 13, nombre: "CARRERAS", class: "carreras", image: "/img/origins tema.jpg" },
            { id: 14, nombre: "METROIDVANIA", class: "metroidvania", image: "/img/origins tema.jpg" },
            { id: 15, nombre: "SANDBOX", class: "sandbox", image: "/img/origins tema.jpg" },
        ];

        this.itemsPorPagina = 4;
        this.totalPaginas = Math.ceil(this.generosTotales.length / this.itemsPorPagina); // V.D. - Cálculo del total de páginas

        this.state = {
            paginaActual: 0,
        };

        this.cambiarPagina = this.cambiarPagina.bind(this);
    }

    cambiarPagina(delta) { // V.D. - Lógica de paginación/carrusel
        this.setState(prevState => {
            let nuevaPagina = prevState.paginaActual + delta;

            if (nuevaPagina < 0) {
                nuevaPagina = this.totalPaginas - 1;
            } else if (nuevaPagina >= this.totalPaginas) {
                nuevaPagina = 0;
            }

            return { paginaActual: nuevaPagina };
        });
    }

    render() {
        const { paginaActual } = this.state;
        const offset = paginaActual * (100 / this.itemsPorPagina);

        return (
            <div className="contenedor-explorar">
                <h6 className="titulo">EXPLORAR POR CATEGORIA</h6>
                <div className="mostrargenero">
                    <button className="botonizquierda" onClick={() => this.cambiarPagina(-1)}> &lt; </button>
                    <div className="generos">
                        <ol className="generosdemuestra" style={{ transform: `translateX(-${offset}%)` }}> {/* V.D. - Aplicación del desplazamiento */}
                            {this.generosTotales.map((genero) => (
                                <li key={genero.id} className={`genero-item ${genero.class}`}>
                                    <div className="genero-overlay"></div>
                                    <img src={genero.image} alt={genero.nombre} className="genero-img" />
                                    <span className="genero-nombre">{genero.nombre}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <button className="botonderecha" onClick={() => this.cambiarPagina(1)}> &gt; </button>

                    <div className="paginacion-puntos">
                        {Array.from({ length: this.totalPaginas }).map((_, index) => ( // V.D. - Renderizado de puntos de paginación
                            <div
                                key={index}
                                className={`punto ${index === paginaActual ? 'activo' : ''}`}
                                onClick={() => this.setState({ paginaActual: index })}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectorGenero;