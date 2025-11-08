import React, { Component } from 'react';
// import { Link } from 'wouter';
import './Home.css';

import SelectorGenero from "../SelectorGenero/SelectorGenero";
import ListadeJuegos from "../ListadeJuegos/ListadeJuegos"

class Home extends Component {
    constructor() {
     super()


    }
    
    render() {
        return (
            <div className='home'>

            <SelectorGenero></SelectorGenero>

            <ListadeJuegos></ListadeJuegos>            

            <h1> NO ENTIENDO PORQUE NO FUNCIONA NADA DE LO QUE HAGO (soy el home)🤣🤣😂</h1>

            <div style={{ backgroundColor: 'red' }}>asadas</div>
            <span style={{ backgroundColor: 'red' }}>adasdas</span>

<div>
    <div>el mayor ctsojsoisogs</div>
    <div className='principal'>
        <div>grdgd</div>
        <div>
            <div></div>
            <div>
                <div>
                    <img src="" alt="" />
                    <p>accion</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </div>
        <div>gdrgdrgdr</div>
    </div>
</div>


        </div>
    );
  }
}

export default Home;
