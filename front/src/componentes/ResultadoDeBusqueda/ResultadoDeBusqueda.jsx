import React from 'react';
import TarjetaJuego from '../TarjetaJuego/TarjetaJuego';
import './ResultadoDeBusqueda.css';

function ResultadoDeBusqueda() {

    // Simulación de datos que vendrían de tu Backend (Node.js)
    // Fíjate que las claves (titulo, imageURL, precio...) coinciden con lo que tu TarjetaJuego busca en 'props.datos'
    const juegosEncontrados = [
        {
            id: 1,
            titulo: "The Last Of Us Part 1",
            descripcion: "En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro protagonista...",
            imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEHQBmHpmnU8ECCpRJjHfuxo.png",
            precioOriginal: 70000,
            precio: 20000,
            plataformas: ['PlayStation', 'Steam']
        },
        {
            id: 2,
            titulo: "Resident Evil 2",
            descripcion: "Un virus mortal envuelve a los residentes de Raccoon City en septiembre de 1998.",
            imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2vdR1Y7cW25v4y99w9f0g4d.png",
            precioOriginal: 20000,
            precio: 5000,
            plataformas: ['PlayStation', 'Xbox', 'Steam']
        },
        {
            id: 3,
            titulo: "Project Zomboid",
            descripcion: "Project Zomboid es lo último en supervivencia zombi. Solo o en MP: saqueas, construyes, crafteas, combates, cultivas y pescas.",
            imageURL: "https://cdn.akamai.steamstatic.com/steam/apps/108600/header.jpg",
            precioOriginal: 15000,
            precio: 5000,
            plataformas: ['Steam']
        }
    ];

    return (
        <div className='resultadoDeBusqueda'>
            <h2 className="titulo-seccion">Resultados de búsqueda</h2>
            
            <div className="lista-resultados">
                {juegosEncontrados.length > 0 ? (
                    juegosEncontrados.map((juego) => (
                        // IMPORTANTE: Pasamos el objeto completo como la prop 'datos'
                        // que es lo que tu constructor espera: props.datos
                        <TarjetaJuego key={juego.id} datos={juego} />
                    ))
                ) : (
                    <p>No se encontraron juegos :(</p>
                )}
            </div>
        </div>
    );
}

export default ResultadoDeBusqueda;