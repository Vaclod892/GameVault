import React from 'react';
import './Carrito.css';
import { FaSteam, FaXbox, FaPlaystation, } from 'react-icons/fa'; // V.D. - Iconos de React
import { SiNintendoswitch, } from 'react-icons/si';

// --- DICCIONARIO DE LOGOS (SVGs Inline) ---
// Esto permite renderizar iconos sin descargar imagenes externas
const LOGOS = {
  PC: <FaSteam size="1.5em" />,           // Usamos el logo de Steam para PC
  PS5: <FaPlaystation size="1.5em" />,    // Logo de PlayStation
  PS4: <FaPlaystation size="1.5em" color="black" />,    // Mismo logo para PS4
  XBOX: <FaXbox size="1.5em" />,          // Logo de Xbox
  SWITCH: <SiNintendoswitch size="1.5em" />,          // Logo de Xbox

};

const Carrito = (props) => {

  // DATOS SIMULADOS 
  const carritoDePrueba = [
    {
      id: 1,
      nombre: "The Last Of Us Part I",
      descripcion: "En una civilización asolada, plagada de infectados y crueles supervivientes, Joel, nuestro exhausto protagonista, es contratado para sacar a escondidas a una chica de 14 años, Ellie.",
      precioOriginal: 70000,
      precio: 20000,
      plataformas: ["PS5", "PC"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/eEILY9mcSv1kSmc06r156k5i.png"
    },
    {
      id: 2,
      nombre: "Resident Evil 7",
      descripcion: "Resident Evil 7: Biohazard es un videojuego de survival horror en primera persona que marca un nuevo rumbo para la franquicia Resident Evil.",
      precioOriginal: 30000,
      precio: 10000,
      plataformas: ["XBOX", "PC"],
      img: "https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7YUeSY9tbGqX2l27VFt8qQIXiuEtqGSOGTlUb55vfYONSNgvsv.png"
    },
    {
      id: 3,
      nombre: "Resident Evil 2 Remake",
      descripcion: "Resident Evil 2 (2019) es un videojuego de terror y supervivencia desarrollado y publicado por Capcom. Es un remake del juego original de 1998.",
      precioOriginal: 20000,
      precio: 5000,
      plataformas: ["PS4", "PC"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202206/0300/E2v3X6lj7fI8v8k5s5f1x2z5.png"
    },
    {
      id: 4,
      nombre: "Elden Ring",
      descripcion: "Álzzate, Sinluz, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en el Señor del Círculo en las Tierras Intermedias.",
      precioOriginal: 60000,
      precio: 45000,
      plataformas: ["PS5", "XBOX", "PC"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/phvVT0qZfcRms5qDAk0SI3CM.png"
    },
    {
      id: 5,
      nombre: "Cyberpunk 2077",
      descripcion: "Cyberpunk 2077 es un RPG de acción y aventura de mundo abierto ambientado en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal.",
      precioOriginal: 40000,
      precio: 25000,
      plataformas: ["PC", "PS5"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202311/1615/1c5b8b93540192e408d33ce79b3252a129676e053f539e55.png"
    },
    {
      id: 6,
      nombre: "EA SPORTS FC™ 24",
      descripcion: "Siente cada partido con una experiencia más realista gracias a HyperMotionV, PlayStyles optimizados por Opta y el nuevo motor Frostbite.",
      precioOriginal: 50000,
      precio: 35000,
      plataformas: ["PS5", "PS4", "XBOX"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202307/0611/496f8b1c4a044955365511516086f42774d75605d3368291.png"
    },
    {
      id: 7,
      nombre: "Minecraft: Java & Bedrock",
      descripcion: "Crea, explora, sobrevive y repite. Minecraft: Java & Bedrock Edition para PC es un paquete que te da acceso a ambas versiones en un mismo lanzador.",
      precioOriginal: 15000,
      precio: 15000,
      plataformas: ["PC", "SWITCH"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202408/1319/84045f2717011d61186716a4956799d146c26b528df52895.png"
    },
    {
      id: 8,
      nombre: "God of War Ragnarök",
      descripcion: "Kratos y Atreus deben viajar a cada uno de los nueve reinos en busca de respuestas mientras las fuerzas asgardianas se preparan para la batalla profetizada.",
      precioOriginal: 75000,
      precio: 60000,
      plataformas: ["PS5", "PS4"],
      img: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png"
    }
  ];

  const handleFinalizarCompra = () => {
    // Verificamos si existe el usuario pasado por props desde App.js
    if (props.usuario) {
      // AQUÍ IRÍA LA LÓGICA DE COMPRA REAL (conectar con backend)
      alert(`¡Compra realizada con éxito! Gracias ${props.usuario.nombreUsuario}`);
    } else {
      // Si no está logueado, avisamos y redirigimos
      alert("Debes iniciar sesión para realizar una compra.");
      props.history.push("/Login"); // Redirige al login
    }
  };

  const total = carritoDePrueba.reduce((acc, juego) => acc + juego.precio, 0);
  const cantidad = carritoDePrueba.length;

  return (
    <div className="carrito-page">
      <div className="carrito-container">

        <div className="carrito-lista">
          {carritoDePrueba.map((juego) => (
            <div key={juego.id} className="card-juego">

              <div className="card-img-wrapper">
                <img src={juego.img} alt={juego.nombre} />
              </div>

              <div className="card-contenido">
                <div className="card-header">
                  <h3>{juego.nombre}</h3>
                  <button className="btn-eliminar" title="Eliminar del carrito">
                    <span role="img" aria-label="eliminar">🗑️</span>
                  </button>
                </div>

                <p className="descripcion">{juego.descripcion}</p>

                <div className="card-footer">
                  <div className="plataformas">
                    {/* Renderizamos el Logo segun el nombre */}
                    {juego.plataformas.map((p, i) => (
                      <span key={i} className="icono-plat" title={p}>
                        {LOGOS[p] || p}
                      </span>
                    ))}
                  </div>

                  <div className="precios-wrapper">
                    <span className="precio-original">${juego.precioOriginal.toLocaleString()}</span>
                    <span className="precio-final">${juego.precio.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="carrito-resumen">
          <div className="resumen-box">
            <div className="resumen-fila">
              <span>Cantidad de juegos:</span>
              <span className="highlight-text">{cantidad}</span>
            </div>

            <div className="resumen-fila total-fila">
              <span>Total de la compra:</span>
            </div>

            <div className="total-precio-box">
              ${total.toLocaleString()}
            </div>
          </div>

          <button className="btn-finalizar" onClick={handleFinalizarCompra}>
            Finalizar Compra
          </button>
        </div>

      </div>
    </div>
  );
};

export default Carrito;