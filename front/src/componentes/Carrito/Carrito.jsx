import React from 'react';
import './Carrito.css';
import { FaSteam, FaXbox, FaPlaystation, } from 'react-icons/fa'; // V.D. - Iconos de React
import { SiNintendoswitch, } from 'react-icons/si';

// --- DICCIONARIO DE LOGOS (SVGs Inline) ---
const LOGOS = {
  PC: <FaSteam size="1.5em" />,
  PS5: <FaPlaystation size="1.5em" />,
  PS4: <FaPlaystation size="1.5em" color="black" />,
  XBOX: <FaXbox size="1.5em" />,
  SWITCH: <SiNintendoswitch size="1.5em" />,
};

const Carrito = (props) => {
  // V.V: Usamos el carrito real que viene de App.js
  const carrito = props.carrito || [];

  const handleFinalizarCompra = () => {
    if (props.usuario) {
      if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
      }

      // 1. Mensaje de éxito
      alert(`¡Compra realizada con éxito! Gracias ${props.usuario.nombreUsuario}, a jugar! 🎮`);

      // 2. Vaciamos el carrito (Llama a la función de App.js)
      props.vaciarCarrito();

      // 3. Redirigimos al Home
      props.history.push("/");

    } else {
      alert("Debes iniciar sesión para realizar una compra.");
      props.history.push("/Login");
    }
  };

  // V.V: Calculamos el total sumando los precios reales
  const total = carrito.reduce((acc, juego) => {
    // Aseguramos que sea número
    const precio = Number(juego.Precio || juego.precio) || 0;
    return acc + precio;
  }, 0);

  return (
    <div className="carrito-page">
      <div className="carrito-container">

        <div className="carrito-lista">
          {carrito.length > 0 ? (
            carrito.map((juego) => (
              <div key={juego.ID_Juego} className="carrito-card-juego">

                <div className="carrito-card-img-wrapper">
                  <img src={juego.imageURL || juego.img || "https://placeholder.com/img"} alt={juego.Titulo} />
                </div>

                <div className="carrito-card-contenido">
                  <div className="carrito-card-header">
                    <h3>{juego.Titulo || juego.titulo}</h3>
                    {/* BOTÓN ELIMINAR CONECTADO */}
                    <button
                      className="carrito-btn-eliminar"
                      title="Eliminar del carrito"
                      onClick={() => props.eliminarDelCarrito(juego.ID_Juego)}
                    >
                      🗑️
                    </button>
                  </div>

                  <p className="carrito-descripcion">{juego.Descripcion || juego.descripcion}</p>

                  <div className="carrito-card-footer">
                    {/* Puedes poner lógica de plataformas aquí si quieres */}
                    <div className="carrito-plataformas">
                      <span>Juego Digital</span>
                    </div>

                    <div className="carrito-precios-wrapper">
                      <span className="carrito-precio-final">
                        ${(juego.Precio || 0).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <h2>Tu carrito está vacío 😔</h2>
              <p>¡Ve al catálogo y agrega algunos juegos!</p>
            </div>
          )}
        </div>

        {/* RESUMEN */}
        <div className="carrito-resumen">
          <div className="carrito-resumen-box">
            <div className="carrito-resumen-fila">
              <span>Cantidad de juegos:</span>
              <span className="carrito-highlight-text">{carrito.length}</span>
            </div>

            <div className="carrito-resumen-fila carrito-total-fila">
              <span>Total de la compra:</span>
            </div>

            <div className="carrito-total-precio-box">
              ${total.toLocaleString()}
            </div>
          </div>

          <button className="carrito-btn-finalizar" onClick={handleFinalizarCompra}>
            Finalizar Compra
          </button>
        </div>

      </div>
    </div>
  );
};

export default Carrito;