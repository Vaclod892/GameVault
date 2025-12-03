import React, { Component } from 'react';

import './InformaciondeJuego.css';

class InformaciondeJuego extends Component {
    constructor(props) {
        super(props);

       // this.state = {
       //     titulo: "The Last of Us Parte 1",
       //     descripcion: "The Last of Us Parte I es un videojuego de acción-aventura y survival horror en tercera persona que narra la historia de Joel y Ellie en un mundo postapocalíptico devastado por una pandemia de infección por Cordyceps. Joel, un contrabandista, debe proteger a Ellie, una joven que podría ser la clave para una cura, mientras viajan a través de Estados Unidos. El juego ofrece gráficos mejorados, mecánicas de juego modernizadas y controles mejorados.",
       //     precio: "20.000",
       //     imageURL: "https://trome.com/resizer/v2/WI6B3VAFMBECTJLMGTIX2GDOQY.webp?auth=baa3daab768c4a4daae2d053a1893cbac6e21803556fa45ea66d0c9fc6a45e3b&width=1920&height=1200&quality=90&smart=true"    
       // }
    }
    
    render() { 
       const juegos = this.props.juego;

       if(!juegos) return <p>Cargando Informacion... </p>

       return ( <>
        <div className="contenedorprincipal">
          <div className="informacion">
            <h2>{ juegos.titulo }</h2>
          </div>
          <div className="infodescripcion">
            <p>{ juegos.descripcion }</p>
            <div className="precio">
                <span className="precio-original">Precio Original: $70.000</span>   
                <span className="precio-descuento">Precio con descuento: {juegos.precio}</span>     
            </div>
          </div>   
        </div>
      </> )}; 
}      

export default InformaciondeJuego;