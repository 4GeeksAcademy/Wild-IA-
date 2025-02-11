import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { AlertTriangle } from 'lucide-react';
import ProtectedRoute from './ProtectedRoute';
import Footer from "../component/footer";
import NavbarHome from "../component/navbarHome";
import Datos from "../component/datos";


const HomeContent = () => {
    const { store, actions } = useContext(Context);
    const [animalImages, setAnimalImages] = useState({});

    const headerStyle = {
        backgroundImage: 'url("https://i.pinimg.com/originals/79/02/fc/7902fc61379b7e46497612a30243003b.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: 'white',
        paddingTop: '8rem',    // Padding superior de 8rem
        paddingBottom: '6rem', // Padding inferior de 6rem
        position: 'relative',
        padding: '10rem 0'
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Ajusta la opacidad si es necesario
        zIndex: 0,
    };

    const contentStyle = {
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
    };

    const animalesEnPeligro = [
        {
            nombre: "Ajolote",
            estado: "En Peligro Crítico",
            imagen: "/api/placeholder/300/200",
            descripcion: "Pequeño anfibio endémico de México. Su población ha disminuido drásticamente debido a la pérdida de hábitat y la contaminación."
        },
        {
            nombre: "Chinchilla cordillerana",
            estado: "En Peligro",
            imagen: "/api/placeholder/300/200",
            descripcion: "Roedor nativo de los Andes. Amenazado por la caza furtiva y la destrucción de su hábitat."
        },
        {
            nombre: "Zorro",
            estado: "En Peligro",
            imagen: "/api/placeholder/300/200",
            descripcion: "El zorro está en peligro de extinción por la pérdida de hábitat, la caza, y los efectos del cambio climático, que amenazan su supervivencia."
        },
        {
            nombre: "Oso polar",
            estado: "Vulnerable",
            imagen: "/api/placeholder/300/200",
            descripcion: "El oso polar se encuentra amenazado por el cambio climático que derrite su hábitat de hielo marino."
        },
        {
            nombre: "Panda gigante",
            estado: "Vulnerable",
            imagen: "/api/placeholder/300/200",
            descripcion: "El panda gigante habita en los bosques de bambú de China. La deforestación ha reducido su hábitat."
        },
        {
            nombre: "Chimpancé",
            estado: "En Peligro",
            imagen: "/api/placeholder/300/200",
            descripcion: "Los chimpancés se ven amenazados por la pérdida de hábitat, la caza furtiva y las enfermedades."
        },
        {
            nombre: "Mariposa monarca",
            estado: "En Peligro",
            imagen: "/api/placeholder/300/200",
            descripcion: "La migración de la mariposa monarca se ve amenazada por la pérdida de hábitat y el cambio climático."
        },
        {
            nombre: "Buitre leonado",
            estado: "Casi Amenazada",
            imagen: "/api/placeholder/300/200",
            descripcion: "El buitre leonado juega un papel crucial en los ecosistemas, pero se enfrenta a diversas amenazas, como el envenenamiento."
        },
        {
          nombre: "Gorila",
          estado: "Casi Amenazada",
          imagen: "/api/placeholder/300/200",
          descripcion: "El gorila está en peligro de extinción por la deforestación, la caza ilegal y enfermedades como el ébola, que reducen sus poblaciones."
      }
    ];

    useEffect(() => {
        animalesEnPeligro.forEach(animal => {
            fetch(`https://api.unsplash.com/search/photos?query=${animal.nombre}&per_page=2`, {
                headers: {
                    'Authorization': 'Client-ID ZwXmUN6-jTGOb8QvW3QUH8SG-CpgEJpXsWr5RG_-5bY'
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.results && data.results[0]) {
                        setAnimalImages(prev => ({
                            ...prev,
                            [animal.nombre]: data.results[0].urls.regular
                        }));
                    }
                });
        });
    }, []);

    return (
        <div className="container-fluid p-0">
            <NavbarHome />
            <header style={headerStyle}>
                <div style={overlayStyle}></div>
                <div className="container" style={contentStyle}>
                    <h1 className="text-warning display-2 fw-bold">Wild Nation</h1>
                    <p className=" fw-medium fs-4">Preservando la Fauna en Peligro</p>
                </div>
            </header>

            {store.message && (
                <div className="container mb-4">
                    <div className="alert alert-info">
                        {store.message}
                    </div>
                </div>
            )}

            <div className="container mb-5">
                <div className="card-body text-center">
                    <p className="display-6 text-success fw-medium">
                        "Proteger la vida silvestre es proteger nuestro futuro"
                    </p>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <iframe
                    width="600"
                    height="350"
                    src="https://www.youtube.com/embed/Pq_ga777lXo" // Cambia esta URL por la de tu video
                    title="Video sobre protección de vida silvestre"
                    className="rounded shadow-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="container mb-6">
                <h2 className="text-center text-success  mb-4 fs-2">
                    Especies en Peligro
                </h2>
                <div className="row g-4">
                    {animalesEnPeligro.map((animal) => (
                        <div key={animal.nombre} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow" style={{ minHeight: "400px" }}>
                                <img
                                    src={animalImages[animal.nombre] || animal.imagen}
                                    className="card-img-top"
                                    alt={animal.nombre}
                                    style={{ height: "250px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h3 className="h5 text-success fw-bold mb-0">{animal.nombre}</h3>
                                        <AlertTriangle className="text-danger" size={20} />
                                    </div>
                                    <span className="badge bg-danger mb-3">
                                        {animal.estado}
                                    </span>
                                    <p className="card-text text-muted mb-4">{animal.descripcion}</p>
                                    <button
                                        className="btn btn-success w-100 d-flex align-items-center justify-content-center"
                                        onClick={() => actions.setMessage(`Ayudando a proteger al ${animal.nombre}`)}
                                    >
                                        Más información
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Datos/>
            <Footer />
        </div>
    );
};

export const Home = () => (
    <ProtectedRoute>
        <HomeContent />
    </ProtectedRoute>
);

export default Home;


// import React, { useState, useEffect } from "react";
// import "../../styles/home.css";
// import { AlertTriangle } from 'lucide-react';
// import ProtectedRoute from './ProtectedRoute';
// import Footer from "../component/footer";
// import NavbarHome from "../component/navbarHome";
// import { useReviewContext } from '../store/reviewContext';


// const HomeContent = () => {
//     const { reviews, error, loading, fetchReviews, addReview, deleteReview } = useReviewContext();
//     const [newReview, setNewReview] = useState('');
//     const [animalImages, setAnimalImages] = useState({});

//     const headerStyle = { /* ... */ };
//     const overlayStyle = { /* ... */ };
//     const contentStyle = { /* ... */ };

//     const animalesEnPeligro = [ /* ... */ ];

//     useEffect(() => {
//         animalesEnPeligro.forEach(animal => { /* ... */ });
//         fetchReviews(); // Carga las reseñas al inicio
//     }, [fetchReviews]);

//     const handleAddReview = () => {
//         if (newReview.trim() !== '') {
//             addReview(newReview);
//             setNewReview('');
//         }
//     };

//     const handleDeleteReview = (reviewId) => {
//         deleteReview(reviewId);
//     };

//     return (
//         <div className="container-fluid p-0">
//             <NavbarHome />
//             <header style={headerStyle}>
//                 <div style={overlayStyle}></div>
//                 <div className="container" style={contentStyle}>
//                     <h1 className="text-warning display-2 fw-bold">Wild Nation</h1>
//                     <p className=" fw-medium fs-4">Preservando la Fauna en Peligro</p>
//                 </div>
//             </header>

//             <div className="container mb-5">
//                 <div className="card-body text-center">
//                     <p className="display-6 text-success fw-medium">
//                         "Proteger la vida silvestre es proteger nuestro futuro"
//                     </p>
//                 </div>
//             </div>

//             <div className="container mb-6">
//                 <h2 className="text-center text-success mb-4 fs-2">
//                     Especies en Peligro
//                 </h2>
//                 <div className="row g-4">
//                     {animalesEnPeligro.map((animal) => (
//                         <div key={animal.nombre} className="col-md-6 col-lg-4">
//                             <div className="card h-100 shadow" style={{ minHeight: "400px" }}>
//                                 <img
//                                     src={animalImages[animal.nombre] || animal.imagen}
//                                     className="card-img-top"
//                                     alt={animal.nombre}
//                                     style={{ height: "250px", objectFit: "cover" }}
//                                 />
//                                 <div className="card-body">
//                                     <div className="d-flex justify-content-between align-items-center mb-3">
//                                         <h3 className="h5 text-success fw-bold mb-0">{animal.nombre}</h3>
//                                         <AlertTriangle className="text-danger" size={20} />
//                                     </div>
//                                     <span className="badge bg-danger mb-3">
//                                         {animal.estado}
//                                     </span>
//                                     <p className="card-text text-muted mb-4">{animal.descripcion}</p>
//                                     <button className="btn btn-success w-100 d-flex align-items-center justify-content-center">
//                                         Más información
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             {/* AQUI ESTÁ LA PARTE DE LAS RESEÑAS QUE FALTABA */}
//             <div className="container mt-5">
//                 <h2>Reseñas sobre cómo ayudar a la fauna:</h2>
//                 <div className="mb-3">
//                     <textarea
//                         className="form-control"
//                         placeholder="Escribe tu reseña..."
//                         value={newReview}
//                         onChange={(e) => setNewReview(e.target.value)}
//                     />
//                     <button className="btn btn-primary mt-2" onClick={handleAddReview}>Añadir Reseña</button>
//                 </div>
//                 {loading && <div>Cargando reseñas...</div>}
//                 {error && <div className="alert alert-danger">{error}</div>} {/* Corrección aquí */}
//                 {reviews.map((review) => (
//                     <div key={review.id} className="card mt-3">
//                         <div className="card-body d-flex justify-content-between align-items-center">
//                             <p className="mb-0">{review.text}</p>
//                             <button className="btn btn-danger btn-sm" onClick={() => handleDeleteReview(review.id)}>Eliminar</button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* FIN DE LA PARTE DE LAS RESEÑAS */}

//             <Footer />
//         </div>
//     );
// };

// export const Home = () => (
//     <ProtectedRoute>
//         <HomeContent />
//     </ProtectedRoute>
// );

// export default Home;
