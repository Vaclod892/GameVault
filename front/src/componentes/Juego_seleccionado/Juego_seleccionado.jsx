import React, { Component } from 'react';
import axios from 'axios';

class Juego_seleccionado extends Component {
    constructor() {
        super();

     this.state = {
        data: []
      }
    
    }

    componentDidMount() {
      const URL = "/api/juegos/";
      axios.get(URL)
      .then((res) => { this.setState({ data: res.data })})
      .catch((err) => { console.log(err) })
    }
    
    render() { 
        return ( 
        <>

        </>
         );
    }
}
 
export default Juego_seleccionado;