import React from 'react';
import { SiEpicgames, SiUnrealengine } from 'react-icons/si';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                {/* Sección Izquierda: Textos Legales */}
                <div className="footer-left">
                    <p className="copyright-text">
                        © 2024, Epic Games, Inc. Todos los derechos reservados. Epic, Epic Games, el logotipo de Epic Games, Fortnite, el logotipo de Fortnite, Unreal, Unreal Engine, el logotipo de Unreal Engine, Unreal Tournament y el logotipo de Unreal Tournament son marcas comerciales o marcas registradas de Epic Games, Inc. tanto en Estados Unidos de América como en el resto del mundo. Otras marcas o nombres de productos son marcas comerciales de sus respectivos propietarios.
                    </p>
                    
                    <div className="footer-links">
                        <a href="#">Términos de servicio</a>
                        <a href="#">Política de privacidad</a>
                        <a href="#">Política de reembolso de la tienda</a>
                    </div>
                </div>

                {/* Sección Derecha: Logotipos */}
                <div className="footer-right">
                    <SiEpicgames className="footer-icon" title="Epic Games" />
                    <SiUnrealengine className="footer-icon" title="Unreal Engine" />
                </div>

            </div>
        </footer>
    );
};

export default Footer;