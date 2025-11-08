import React, { Component } from "react";

import './TarjetaJuego.css'

class TarjetaJuego extends Component {
    constructor() {
        super();

    this.state = {
        imageURL: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png",
        titulo: "The Last of Us Parte 1",
        descripcion: "Joel y Ellie, dos personas conectadas por la brutalidad del mundo en el que viven, se ven obligados a enfrentarse a criaturas y asesinos ...",
        precio: 20000
    }

    }
    render() { 
        return ( <>
            <div className="contenedor-principal">
                <div className="imagen-portada">
                 <img src={this.state.imageURL} alt="imagen principal" />    
                </div>
                    <div className="contenedor-secundario">
                        <div className="informacion">
                            <h3>{this.state.titulo}</h3>
                             <p>{this.state.descripcion}</p>
                        </div>
                            <div className="precios">
                                <span className="precio-normal">70.000</span>   
                                <span className="precio-con-descuento">{this.state.precio}</span> 
                            </div>
                        <button>Agregar</button>  
                    </div>  
            </div>
        </> );
    }
}
 
export default TarjetaJuego;