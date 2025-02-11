import React from "react";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    const handleNavigateToDonar = () => {
        navigate('/donar');
    };
    const handleNavigateToExtincion = () => {
        navigate('/extincion');
    };

    const footerStyle = {
        backgroundImage: 'url("http://www.10wallpaper.com/wallpaper/1920x1080/1303/feline_cub-Animal_World_HD_wallpaper_1920x1080.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        color: 'white',
        padding: '3rem 0',
        backgroundAttachment: 'fixed',
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Aumenté la opacidad a 0.5
        zIndex: 0, // Asegura que el overlay esté debajo del contenido
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1, // Asegura que el contenido esté encima del overlay
    };

    const linkStyle = { // Estilo para los enlaces para evitar que se vean afectados por la opacidad
        color: 'white',
        textDecoration: 'none',
    };

    const buttonLinkStyle = {
        color: 'white',
        textDecoration: 'none',
        backgroundColor: 'transparent', // Para que el fondo del botón sea transparente
        border: 'none', // Quita el borde del botón
        padding: 0, // Quita el padding por defecto del botón
        cursor: 'pointer', // Cambia el cursor a pointer
    }

    return (
        <footer style={footerStyle}>
            <div style={overlayStyle} />
            <div className="container" style={contentStyle}>
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="text-warning">Sobre Wild Nation</h5>
                        <p>
                            Wild Nation busca crear conciencia sobre los animales en peligro
                            de extinción. Únete a nuestra misión para proteger la
                            biodiversidad.
                        </p>
                    </div>

                    <div className="col-md-3">
                        <h5 className="text-warning">Enlaces útiles</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/about" style={linkStyle}>
                                    Sobre nosotros
                                </a>
                            </li>
                            <li>
                                <button onClick={handleNavigateToExtincion} style={buttonLinkStyle}>
                                    ¿Qué es la extinción de animales?
                                </button>
                            </li>
                            <li>
                                <button onClick={handleNavigateToDonar} style={buttonLinkStyle}>
                                    Donar
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <h5 className="text-warning">Artículos recientes</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a
                                    href="https://www.nationalgeographic.com.es/mundo-animal/animales-peligro-extincion_12536"
                                    style={linkStyle}
                                >
                                    "Animales en Peligro de Extinción: Un Llamado a la Acción - National Geographic"
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="bg-light" />
                <div className="text-center">
                    <p className="mb-0">
                        © {new Date().getFullYear()} Wild Nation. Todos los derechos
                        reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
