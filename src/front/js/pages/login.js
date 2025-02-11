import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/authContext";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { saveToken } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://special-happiness-9r7rq77p47g2xxrj-3001.app.github.dev/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            console.log({
                response
            })
            const data = await response.json();

            if (response.ok) {
                saveToken(data.token);
                navigate('/home');
            } else {
                setMessage(data.msg || 'Contraseña o email incorrectos');
            }
        } catch (error) {
            setMessage('Error al conectar con el servidor');
        }
    };

    return (
        <div
            className="d-flex align-items-center justify-content-center position-relative"
            style={{
                minHeight: "100vh",
                backgroundImage: "url('https://www.voyageperou.com/cdn/pe-public/envergure_de_condor.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                padding: "20px",
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
                    backgroundColor: "rgba(0, 0, 0, 0.7)", // Color #2e8b57 con 80% de opacidad
                }}
            />
            
            <div
                className="card shadow-lg p-4 position-relative"
                style={{
                    maxWidth: "400px",
                    width: "100%",
                    color: "#2e2e2e",
                    backgroundColor: "rgba(255, 255, 255, 0.95)", // Fondo del card ligeramente transparente
                }}
            >
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
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
                        className="btn btn-success w-100 mb-3"
                        style={{ backgroundColor: "#1e593e", border: "none" }}
                    >
                        Iniciar Sesión
                    </button>
                </form>
                {message && (
                    <div className="alert mt-3" style={{ backgroundColor: "#fff", color: "#2e8b57" }}>
                        {message}
                    </div>
                )}
                <div className="text-center mt-3">
                    <p>¡Bienvenido de nuevo! Con cada visita a la web, ayudas a proteger a las especies en peligro de extinción. Gracias por ser parte de este esfuerzo para preservar a la vida silvestre a través del conocimiento.</p>
                    <p>¿No tienes cuenta?</p>
                    <Link to="/register">
                        <button className="btn btn-outline-success w-100">Registrarse</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;