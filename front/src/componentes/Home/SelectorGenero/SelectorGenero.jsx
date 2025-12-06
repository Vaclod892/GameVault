import React, { Component } from 'react';
import './SelectorGenero.css';

class SelectorGenero extends Component {
    constructor(props) {
        super(props);
        this.itemsPorPagina = 4; // Mostramos 4 géneros por vista
        this.state = {
            paginaActual: 0,
        };
        this.cambiarPagina = this.cambiarPagina.bind(this);
    }

    // V.V: Función auxiliar para asignar imagen y color a los datos de la DB
    obtenerEstilosGenero(nombreGenero) {
        const nombre = nombreGenero ? nombreGenero.toLowerCase() : "";

        // Estilo por defecto (si agregas uno nuevo en la DB y no está aquí, saldrá así)
        let estilo = { class: "accion", image: "/img/origins tema.jpg" };

        // Mapeo de tus géneros actuales a sus estilos visuales
        if (nombre.includes("acción") || nombre.includes("accion")) estilo = { class: "accion", image: "/img/origins tema.jpg" };
        else if (nombre.includes("aventura")) estilo = { class: "aventura", image: "/img/origins tema.jpg" };
        else if (nombre.includes("estrategia")) estilo = { class: "estrategia", image: "/img/origins tema.jpg" };
        else if (nombre.includes("deportes")) estilo = { class: "deportes", image: "/img/origins tema.jpg" };
        else if (nombre.includes("rpg")) estilo = { class: "rpg", image: "/img/origins tema.jpg" };
        else if (nombre.includes("shooter")) estilo = { class: "shooter", image: "/img/origins tema.jpg" };
        else if (nombre.includes("simulación")) estilo = { class: "simulacion", image: "/img/origins tema.jpg" };
        else if (nombre.includes("survival") || nombre.includes("supervivencia")) estilo = { class: "survival", image: "/img/origins tema.jpg" };
        else if (nombre.includes("moba")) estilo = { class: "moba", image: "/img/origins tema.jpg" };
        else if (nombre.includes("battle")) estilo = { class: "battleroyale", image: "/img/origins tema.jpg" };
        else if (nombre.includes("terror")) estilo = { class: "terror", image: "/img/origins tema.jpg" };
        else if (nombre.includes("puzzle") || nombre.includes("puzle")) estilo = { class: "puzzles", image: "/img/origins tema.jpg" };
        else if (nombre.includes("carreras")) estilo = { class: "carreras", image: "/img/origins tema.jpg" };
        else if (nombre.includes("metroidvania")) estilo = { class: "metroidvania", image: "/img/origins tema.jpg" };
        else if (nombre.includes("sandbox")) estilo = { class: "sandbox", image: "/img/origins tema.jpg" };

        return estilo;
    }

    cambiarPagina(delta) {
        // V.V: Calculamos el total de páginas basado en la cantidad REAL de géneros que vienen de la DB
        const generos = this.props.generos || [];
        const totalPaginas = Math.ceil(generos.length / this.itemsPorPagina);

        this.setState(prevState => {
            let nuevaPagina = prevState.paginaActual + delta;

            // Lógica de carrusel infinito
            if (nuevaPagina < 0) {
                nuevaPagina = totalPaginas - 1;
            } else if (nuevaPagina >= totalPaginas) {
                nuevaPagina = 0;
            }

            return { paginaActual: nuevaPagina };
        });
    }

    render() {
        const generosReales = this.props.generos || [];
        const { paginaActual } = this.state;
        const totalPaginas = Math.ceil(generosReales.length / this.itemsPorPagina);

        // V.V: Corrección matemática importante:
        // Desplazamos 100% del ancho del contenedor por cada página
        const offset = paginaActual * 100;

        if (generosReales.length === 0) return <div className="contenedor-explorar"><p style={{ color: 'white' }}>Cargando géneros...</p></div>;

        return (
            <div className="contenedor-explorar">
                <h6 className="titulo">EXPLORAR POR CATEGORIA</h6>
                <div className="mostrargenero">
                    <button className="botonizquierda" onClick={() => this.cambiarPagina(-1)}> &lt; </button>

                    <div className="generos">
                        {/* V.V: Aplicamos el desplazamiento calculado */}
                        <ol className="generosdemuestra" style={{ transform: `translateX(-${offset}%)` }}>
                            {generosReales.map((genero) => {
                                const estiloVisual = this.obtenerEstilosGenero(genero.nombre);

                                // 2. Decidimos qué imagen usar: ¿La de la DB o la por defecto?
                                // Si genero.imageURL existe, lo usamos. Si no, usamos la de estiloVisual.
                                const imagenAMostrar = genero.imageURL || estiloVisual.image;

                                return (
                                    <li key={genero.ID_genero} className={`genero-item ${estiloVisual.class}`}>
                                        <div className="genero-overlay"></div>
                                        {/* 3. Usamos la variable elegida */}
                                        <img src={imagenAMostrar} alt={genero.nombre} className="genero-img" />
                                        <span className="genero-nombre">{genero.nombre.toUpperCase()}</span>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>

                    <button className="botonderecha" onClick={() => this.cambiarPagina(1)}> &gt; </button>

                    <div className="paginacion-puntos">
                        {Array.from({ length: totalPaginas }).map((_, index) => (
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