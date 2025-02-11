import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#198754' }}>
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">
          WILD NATION
        </Link>
        
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links centrados */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/about">
                Acerca de
              </Link>
            </li>
          </ul>
          
          {/* Botones a la derecha */}
          <div className="d-flex">
            <Link to="/login" className="btn text-white me-2 fw-bold">
              Iniciar sesión
            </Link>
            <Link to="/register" className="btn btn-warning text-success fw-bold">
              Registrarse 
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



