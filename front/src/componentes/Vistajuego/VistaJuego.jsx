import React, { Component } from 'react';

import InformaciondeJuego from "../InformaciondeJuego/InformaciondeJuego"

import "./VistaJuego";

class VistaJuego extends Component {
    constructor() {
        super();
    }

    state = {  }
    render() { 
        return ( <>
                <InformaciondeJuego></InformaciondeJuego>
              </> );
    }
}
 
export default VistaJuego;