import React, { Component } from 'react';
import './JuegosDestacados.css';

class JuegosDestacados extends Component {

    // V.V: Función auxiliar para mezclar array (Algoritmo Fisher-Yates simple)
    // Esto hace que cada vez que entres, los destacados sean diferentes.
    mezclarJuegos(array) {
        const nuevoArray = [...array];
        for (let i = nuevoArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
        }
        return nuevoArray;
    }

    render() {
        const juegosReales = this.props.juegos || [];

        // V.V: Validamos si hay suficientes datos
        let juegosParaMostrar = [];

        if (juegosReales.length > 0) {
            // Si hay datos, mezclamos y tomamos 7
            // Si tienes menos de 7 juegos en total, repetimos el array para llenar los huecos visuales
            let mezclados = this.mezclarJuegos(juegosReales);
            while (mezclados.length < 7) {
                mezclados = [...mezclados, ...mezclados];
            }
            juegosParaMostrar = mezclados.slice(0, 7);
        } else {
            // V.V: Estado de carga / Fallback para mantener la estructura 3D mientras carga la DB
            // Usamos un array dummy de 7 elementos
            juegosParaMostrar = Array(7).fill({
                ID_Juego: 0,
                Titulo: "Cargando...",
                imageURL: "/img/origins tema.jpg" // Una imagen por defecto
            });
        }

        return (
            <div className="contenedor-juegos-destacados">
                <div className="juegos-listado">
                    {juegosParaMostrar.map((juego, index) => (
                        // Usamos index como key fallback por si repetimos juegos para rellenar
                        <div key={juego.ID_Juego || index} className="juego-card">
                            <img
                                src={juego.imageURL}
                                alt={juego.Titulo}
                                // Agregamos un onError para que si la imagen falla, no se vea roto
                                onError={(e) => { e.target.src = "/img/origins tema.jpg" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default JuegosDestacados;