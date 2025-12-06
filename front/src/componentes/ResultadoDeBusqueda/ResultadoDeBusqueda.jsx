import React from 'react';
import { Link } from 'react-router-dom';
import TarjetaJuego from '../TarjetaJuego/TarjetaJuego';
import './ResultadoDeBusqueda.css';

function ResultadoDeBusqueda(props) {

    const juegosEncontrados = props.juegos || [];

    return (
        <div className='resultadoDeBusqueda'>
            <div className="contenedor-resultados-limitado">
                
                <div className="cabecera-resultados">
                    <h2 className="titulo-seccion">Resultados de búsqueda</h2>
                    <Link to="/" className="btn-volver">
                        ← Volver al Inicio
                    </Link>
                </div>
                
                <div className="lista-resultados">
                    {juegosEncontrados.length > 0 ? (
                        juegosEncontrados.map((juego) => (
                            <TarjetaJuego 
                                key={juego.ID_Juego} 
                                datos={juego}
                                agregarAlCarrito={props.agregarAlCarrito} 
                            />
                        ))
                    ) : (
                        <div className="sin-resultados">
                            <span style={{ fontSize: '3rem' }}>🔍</span>
                            <h3>No encontramos juegos con ese nombre</h3>
                            <p>Intenta con otra palabra o revisa nuestro catálogo completo.</p>
                            <Link to="/" className="btn-volver-grande">Ir al Catálogo</Link>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default ResultadoDeBusqueda;