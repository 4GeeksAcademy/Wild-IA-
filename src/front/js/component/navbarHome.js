import React, { useContext } from 'react';
import { AuthContext } from '../store/authContext';
import { useNavigate } from 'react-router-dom';

const NavbarHome = () => {
    const { logout } = useContext(AuthContext);
    const navigation = useNavigate();
    

    const handleLogout = () => {
        logout();
        navigation("/")
        // Aquí puedes agregar redirección si es necesario
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-white bg-white">
            <div className="container-fluid">
                <div className="w-100 d-flex justify-content-end">
                    <button 
                        className="btn bg-danger text-white"
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavbarHome;