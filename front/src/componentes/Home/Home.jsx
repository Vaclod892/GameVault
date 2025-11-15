import React, { Component } from 'react';
import './Home.css';

import SelectorGenero from "../SelectorGenero/SelectorGenero";
import ListadeJuegos from "../ListadeJuegos/ListadeJuegos"
import JuegosDestacados from "../JuegosDestacados/JuegosDestacados"; // V.D. - Componente JuegosDestacados importado

class Home extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className='home'>

                <JuegosDestacados />  {/* V.D. - Componente de banners destacados integrado */}

                <h2 className="titulo-central">El mayor Catalogo de juegos y entretenimiento</h2> {/* V.D. - Título principal */}

                <SelectorGenero /> {/* V.D. - Componente SelectorGenero */}

                <ListadeJuegos /> {/* V.D. - Componente ListadeJuegos */}
            </div>
        );
    }
}

export default Home;