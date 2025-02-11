import React from "react";
import { useNavigate } from "react-router-dom";

function Donar() {
  const navigate = useNavigate();

  return (
    <div
      className="position-relative d-flex flex-column justify-content-center align-items-center bg-success text-white"
      style={{ minHeight: "100vh", padding: "2rem" }}
    >
      {/* Botón Volver */}
      <button
        onClick={() => navigate('/home')}
        className="btn btn-warning position-absolute start-0 top-0 m-4"
      >
        Volver
      </button>

      <div className="container text-center">
        <h2 className="display-4 mb-4">Donaciones</h2>
        
        {/* Ícono de construcción o mantenimiento */}
        <div className="mb-4">
          <i className="fas fa-tools fa-4x"></i>
        </div>
        
        <div className="card bg-white text-dark p-4 shadow-lg">
          <h3 className="text-success mb-3">Próximamente</h3>
          <p className="lead">
            Estamos trabajando para habilitar la función de donaciones en nuestra plataforma.
            Pronto podrás contribuir directamente a la preservación de la fauna silvestre.
          </p>
          <p className="mb-0">
            ¡Gracias por tu interés en apoyar nuestra causa! 
            Vuelve pronto para descubrir cómo puedes hacer la diferencia.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Donar;