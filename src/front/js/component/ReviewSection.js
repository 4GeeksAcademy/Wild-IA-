import React, { useState, useEffect } from "react";
import ReviewContext from '../store/reviewContext';


const ReviewSection = () => {
    const { reviews, error, loading, fetchReviews, addReview, deleteReview } = useReviewContext();
    const [newReviewText, setNewReviewText] = useState("");

    useEffect(() => {
        fetchReviews(); // Carga las reseñas al montar el componente
    }, []);

    const handleAddReview = (e) => {
        e.preventDefault();
        if (newReviewText.trim()) {
            addReview(newReviewText);
            setNewReviewText(""); // Limpia el input después de agregar la reseña
        }
    };

    return (
        <div className="container mb-5">
            <h2 className="text-center text-success mb-4 fs-2">Reseñas de los Usuarios</h2>
            
            {loading && <div className="text-center text-primary">Cargando reseñas...</div>}
            {error && <div className="text-center text-danger">Error: {error}</div>}

            <ul className="list-group mb-4">
                {reviews.map((review) => (
                    <li key={review.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{review.text}</span>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteReview(review.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={handleAddReview}>
                <div className="mb-3">
                    <label htmlFor="newReview" className="form-label">Agregar una nueva reseña</label>
                    <input
                        type="text"
                        id="newReview"
                        className="form-control"
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                        placeholder="Escribe tu reseña aquí..."
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Agregar Reseña</button>
            </form>
        </div>
    );
};

export default ReviewSection;
