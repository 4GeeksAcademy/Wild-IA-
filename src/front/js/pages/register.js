import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://special-happiness-9r7rq77p47g2xxrj-3001.app.github.dev/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setMessage('¡Registro exitoso! Redirigiendo al inicio de sesión...');
                setTimeout(() => {
                    navigate('/login');
                }, 4000);
            } else {
                const errorData = await response.json();
                setMessage(errorData.message || 'Error al registrarse. Por favor, intenta nuevamente.');
            }
        } catch (error) {
            setMessage('Error al conectar con el servidor. Por favor, revisa tu conexión.');
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center position-relative"
            style={{
                minHeight: '100vh',
                backgroundImage: "url('https://www.mactualidad.com/wp-content/uploads/2013/06/fondo-pantalla-animal-salvaje-187.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                padding: '20px',
            }}
        >
            {/* Overlay semi-transparente */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Color #2e8b57 con 80% de opacidad
                }}
            />

            <div
                className="card shadow-lg p-4 position-relative"
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    color: '#2e2e2e',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Fondo del card ligeramente transparente
                    zIndex: 1
                }}
            >
                <h2 className="text-center mb-4">Registrarse</h2>
                <p className="text-center mb-4" style={{ color: '#1e593e' }}>
                    ¡Sé parte del cambio! Ayuda a proteger la fauna mientras formas parte de nuestra comunidad.
                </p>
                <form onSubmit={handleRegister}>
                    <div className="form-group mb-3">
                        <label>Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-success w-100"
                        style={{ backgroundColor: '#1e593e', border: 'none' }}
                    >
                        Registrarse
                    </button>
                </form>
                {message && (
                    <div className="alert mt-3" style={{ backgroundColor: '#fff', color: '#2e8b57' }}>
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;