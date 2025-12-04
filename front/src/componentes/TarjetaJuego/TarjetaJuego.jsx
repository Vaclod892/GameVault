import React, { Component } from "react";
import { FaShoppingCart, FaSteam, FaXbox, FaPlaystation } from 'react-icons/fa'; // V.D. - Iconos de React

import './TarjetaJuego.css'

class TarjetaJuego extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageURL: props.datos ? props.datos.imageURL : "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png",
            titulo: props.datos ? props.datos.titulo : "The Last of Us Parte 1",
            descripcion: props.datos ? props.datos.descripcion : "Joel y Ellie, dos personas conectadas por la brutalidad del mundo en el que viven, se ven obligados a enfrentarse a criaturas y asesinos ...",
            precio: props.datos ? props.datos.precio : 20000,
            precioOriginal: props.datos ? props.datos.precioOriginal : 70000,
            plataformas: props.datos && props.datos.plataformas ? props.datos.plataformas : ['PlayStation', 'Xbox', 'Steam'] // V.D. - Plataformas de ejemplo
        }
    }

    renderPlataformas() {
       // const iconos = {
       //     'Steam': FaSteam,
       //     'Xbox': FaXbox,
       //     'PlayStation': FaPlaystation
       // };
        
        return this.state.plataformas.map((plataforma, index) => {
            //const IconComponent = iconos[plataforma];
            //return IconComponent ? <IconComponent key={index} className="plataforma-icon" /> : null;
        });
    }

    render() { 
        return ( <>
            <div className="contenedor-principal-tarjeta">
                <div className="imagen-portada-tarjeta">
                 <img src={this.state.imageURL} alt="imagen principal" />    
                </div>
                <div className="contenedor-secundario-tarjeta">
                    <div className="informacion-tarjeta">
                        <h3>{this.state.titulo}</h3>
                         <p>{this.state.descripcion}</p>
                    </div>
                    
                    <div className="detalle-inferior-tarjeta">
                        <div className="precios-tarjeta">
                            <span className="precio-normal">
                                ${this.state.precioOriginal.toLocaleString('es-CL')}
                            </span>   
                            <span className="precio-con-descuento">
                                ${this.state.precio.toLocaleString('es-CL')}
                            </span> 
                        </div>
                        
                        <div className="acciones-plataformas">
                            <button className="agregar-btn">
                            <FaShoppingCart className="carrito-icon" />
                                Agregar
                            </button>  
                            <div className="iconos-plataforma">
                                {this.renderPlataformas()}
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </> );
    }
}
 
export default TarjetaJuego;