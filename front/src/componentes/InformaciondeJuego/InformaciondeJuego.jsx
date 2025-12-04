import React, { Component } from 'react';

import './InformaciondeJuego.css';

class InformaciondeJuego extends Component {
    constructor(props) {
        super(props);

       this.state = {
           imageURL: "https://static.wikia.nocookie.net/callofduty/images/f/fa/Giant_mech_Origins_BOII.png/revision/latest?cb=20130827204332"    
        }
    }
    
    render() { 
       const juegos = this.props.juego;

       if(!juegos) return <p>Cargando Informacion... </p>

       return ( <>
        <div className="contenedorprincipal">
                <div className="layout-dos-columnas"> 
                    
                    <div className="columna-principal"> 
                        <div className="imagen-vistajuego">
                            <h2 className="titulo-juego">{juegos.Titulo}</h2>
                            <img src={this.state.imageURL} className="imagen-prin" alt="Imagen Principal"></img>
                        </div>
                        <div className="infodescripcion">
                            <p>{juegos.Descripcion}</p>
                        </div>
                    </div>

                    <div className="columna-lateral"> 
                        <div className="detalles-juego">
                            <h3>Plataformas: 🎮</h3>
                            <p>Plataformas: 3</p>
                            <h3>Género: Aventura</h3>
                            <p>Un jugador</p>
                            <div className="precio-compra">
                                <span className="precio-original">$70.000</span>
                                <span className="precio-descuento-lateral">$20.000</span>
                                <button className="boton-comprar">🛒 Agregar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </> ) 
   }      
}

export default InformaciondeJuego;