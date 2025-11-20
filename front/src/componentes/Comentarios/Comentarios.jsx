import React, { Component } from 'react';

class Comentarios extends Component {
    constructor(props) {
        super(props);
    }
    render() { 

        const comentarios = this.props.comentarios;  
       
    return ( <>
            {
                comentarios.map((comen) => {
                  return (
                    <div key={comen.ID_comentario} className="contenedorprincipal">
                       <div className="informacion">
                        { comen.recomienda ?
                            <p>Recomienda!</p> : 
                            <p>No lo Recomienda!</p>
                        }
                       </div>
                      <div className="infodescripcion">
                    <p>{comen.resena}</p>
                  </div>   
                    </div>
                  )
             })
           }       
        </> );
    }
}
 
export default Comentarios;