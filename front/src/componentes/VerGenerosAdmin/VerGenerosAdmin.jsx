import React, { Component } from 'react';
import './VerGenerosAdmin.css';

class VerGenerosAdmin extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    
     const generos = this.props.verGenero;
        
        return ( <>
           <div className="contenedor-pricipal">
            <div className="contenedor-generos" >
                  <div className="nombre-contenedor">
                      <h4 className="titulo">Generos</h4>
                  </div>
                  {
                    generos.map((genero) => {
                      return (
                         <div className="generos" key={genero.ID_genero} onClick={() => this.props.seleccionarGenero(genero)}>
                                  <div className="genero-elemento">
                                  <p>{genero.nombre}</p>
                                  </div>
                          </div>
                      )
                  })
                } 
            </div>
           </div>
        </> );
    }
}
 
export default VerGenerosAdmin;