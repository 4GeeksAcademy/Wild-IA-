import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/navbar";

const Welcome = () => {
    return (
        <>
            <Navbar />
            <div
                className="d-flex flex-column align-items-center justify-content-center text-center position-relative"
                style={{
                    minHeight: "100vh",
                    backgroundImage: "url('https://www.curiosidario.es/wp-content/uploads/2017/11/animales-en-extincion.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    color: "#ffffff",
                }}
            >
                {/* Overlay semi-transparente */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.7)", // Aumenté la opacidad de 0.5 a 0.7
                    }}
                />
                {/* Contenido centrado */}
                <div className="position-relative d-flex flex-column align-items-center w-100">
                    <h4
                        style={{ fontFamily: "cursive", fontSize: "70px", color: "yellow" }}
                    >
                        ¡Bienvenido a Wild Nation!
                    </h4>
                    <p 
                        className="mb-5 fw-bold mx-auto text-center" 
                        style={{ 
                            maxWidth: "600px", 
                            fontFamily: "cursive"
                        }}
                    >
                        "El tiempo se agota: Cada especie que perdemos es una página arrancada del libro de la vida"
                    </p>
                    <div className="text-center">
                        <Link to="/login">
                            <button className="btn px-4 bg-warning text-success fw-bold">Explorar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;