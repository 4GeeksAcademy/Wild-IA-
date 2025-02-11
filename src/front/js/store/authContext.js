import React, { createContext, useState, useEffect } from 'react';


// Crear el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Cargar token del localStorage al iniciar
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
            setIsAuthenticated(true);
        }
    }, []);

    // Guardar token en el localStorage 
    const saveToken = (token) => {
        localStorage.setItem('token', token);
        setAuthToken(token);
        setIsAuthenticated(true);
    };

    // Eliminar token del localStorage
    const logout = () => {
        localStorage.removeItem('token');
        setAuthToken(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ authToken, isAuthenticated, saveToken, logout}}>
            {children}
        </AuthContext.Provider>
    );
}; 