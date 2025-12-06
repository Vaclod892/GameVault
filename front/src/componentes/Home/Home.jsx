import React, { Component } from 'react';
import './Home.css';

import SelectorGenero from "./SelectorGenero/SelectorGenero";
import ListadeJuegos from "../ListadeJuegos/ListadeJuegos"
import JuegosDestacados from "../JuegosDestacados/JuegosDestacados";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='home'>

                {/* V.V: Ahora pasamos los juegos reales al banner de destacados */}
                <JuegosDestacados juegos={this.props.dataJuegos} />

                <h2 className="titulo-central">El mayor Catálogo de juegos y entretenimiento</h2>

                <SelectorGenero generos={this.props.dataGeneros} />

                <ListadeJuegos 
                    juegos={this.props.dataJuegos}
                    agregarAlCarrito={this.props.agregarAlCarrito} 
                />
            </div>
        );
    }
}

export default Home;