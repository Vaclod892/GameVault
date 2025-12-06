import React, { Component } from "react";
// V.V: Importamos más iconos para cubrir todas las posibilidades
import { FaShoppingCart, FaSteam, FaXbox, FaPlaystation, FaWindows, FaApple, FaLinux, FaAndroid, FaAppStoreIos } from 'react-icons/fa';
import { SiNintendoswitch } from "react-icons/si"; // Icono de Switch
import './TarjetaJuego.css'

class TarjetaJuego extends Component {
    constructor(props) {
        super(props);

        const datos = props.datos || {};

        const getPrecio = () => {
            const valor = datos.Precio !== undefined ? datos.Precio : datos.precio;
            return valor !== undefined ? valor : 0;
        };

        const getTitulo = () => datos.Titulo || datos.titulo || "Título desconocido";
        const getDescripcion = () => datos.Descripcion || datos.descripcion || "Sin descripción disponible.";
        const getImage = () => datos.imageURL || datos.img || "https://image.api.playstation.com/vulcan/ap/rnd/202206/0720/aZKLRcjaZ8HL03ODxYMZDfaH.png";

        this.state = {
            imageURL: getImage(),
            titulo: getTitulo(),
            descripcion: getDescripcion(),
            precio: getPrecio(),
            precioOriginal: (datos.precioOriginal || (getPrecio() * 1.5)) || 0,
            // V.V: Aseguramos que sea un array. Si viene un string "PC", lo convertimos a ["PC"]
            plataformas: Array.isArray(datos.plataformas) ? datos.plataformas : (datos.plataformas ? [datos.plataformas] : ['PC', 'PS5', 'Xbox'])
        }
    }

    renderPlataformas() {
        const { plataformas } = this.state;

        if (!plataformas || plataformas.length === 0) return null;

        // V.V: Lógica para asignar iconos según el nombre
        return plataformas.map((plat, index) => {
            let Icono = null;
            // Normalizamos a minúsculas para comparar fácil
            const nombre = String(plat).toLowerCase();

            if (nombre.includes('pc') || nombre.includes('windows')) Icono = FaWindows;
            else if (nombre.includes('steam')) Icono = FaSteam;
            else if (nombre.includes('playstation') || nombre.includes('ps')) Icono = FaPlaystation;
            else if (nombre.includes('xbox')) Icono = FaXbox;
            else if (nombre.includes('switch') || nombre.includes('nintendo')) Icono = SiNintendoswitch;
            else if (nombre.includes('android')) Icono = FaAndroid;
            else if (nombre.includes('ios') || nombre.includes('iphone')) Icono = FaAppStoreIos;
            else if (nombre.includes('linux')) Icono = FaLinux;
            else if (nombre.includes('mac') || nombre.includes('apple')) Icono = FaApple;

            // Si encontramos un icono, lo renderizamos. Si no, no mostramos nada (o podrías mostrar texto)
            return Icono ? <Icono key={index} className="plataforma-icon" title={plat} /> : null;
        });
    }

    render() {
        const precioFinal = Number(this.state.precio) || 0;
        const precioNormal = Number(this.state.precioOriginal) || 0;

        return (<>
            <div className="contenedor-principal-tarjeta">
                <div className="imagen-portada-tarjeta">
                    <img src={this.state.imageURL} alt={this.state.titulo} />
                </div>
                <div className="contenedor-secundario-tarjeta">
                    <div className="informacion-tarjeta">
                        <h3>{this.state.titulo}</h3>
                        <p>{this.state.descripcion}</p>
                    </div>

                    <div className="detalle-inferior-tarjeta">
                        <div className="precios-tarjeta">
                            <span className="precio-normal">
                                ${precioNormal.toLocaleString('es-CL')}
                            </span>
                            <span className="precio-con-descuento">
                                ${precioFinal.toLocaleString('es-CL')}
                            </span>
                        </div>

                        <div className="acciones-plataformas">
                            <button
                                className="agregar-btn"
                                onClick={() => this.props.agregarAlCarrito(this.props.datos)}
                            >
                                <FaShoppingCart className="carrito-icon" />
                                Agregar
                            </button>

                            <div className="iconos-plataforma">
                                {this.renderPlataformas()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default TarjetaJuego;