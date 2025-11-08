import React, { Component } from 'react';

import './SelectorGenero.css';

class SelectorGenero extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <>
               <div className="mostrargenero">
                     <button className="botonizquierda"> &lt; </button>
                       <div className="titulo">
                        <h6>EXPLORAR POR CATEGORIA</h6>
                       </div>
                           <div className="generos"> 
                              <ol className="generosdemuestra">
                                 <li className="imagen"><a><img src="https://as.com/ocio/imagenes/2015/11/23/juegos/1448301090_914560_1448301729_noticia_grande.jpg" /></a></li>
                                 <li><a><img src="" /></a></li>
                                 <li><a><img src="" /></a></li>
                                 <li><a><img src="" /></a></li>
                              </ol>
                           </div>
                        <button className="botonderecha"> &gt; </button>
                  </div> 
            </>
         );
    }
}
 
export default SelectorGenero;