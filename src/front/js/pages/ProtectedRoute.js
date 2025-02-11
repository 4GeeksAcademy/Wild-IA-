// verificar si el usuario está autenticado antes de acceder a ciertas páginas

import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');

    // Si no hay token, redirige al login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Si hay token, muestra el contenido protegido
    return children;
};

export default ProtectedRoute;

// Este componente se usaría para envolver las rutas protegidas.