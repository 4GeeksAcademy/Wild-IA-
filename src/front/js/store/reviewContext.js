import React, { createContext, useState, useEffect } from 'react';

const ReviewContext = createContext({ // Valor inicial con funciones vacías
    reviews: [],
    error: null,
    loading: false,
    fetchReviews: () => {},
    addReview: () => {},
    deleteReview: () => {},
});

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchReviews = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/reviews');
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setReviews(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addReview = async (newReviewText) => {
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: newReviewText }),
            });
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            fetchReviews(); // Recarga las reseñas
        } catch (error) {
            setError(error.message);
        }
    };

    const deleteReview = async (reviewId) => {
        try {
            const response = await fetch(`/api/reviews/${reviewId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            fetchReviews();
        } catch (error) {
            setError(error.message);
        }
    };

    const value = {
        reviews,
        error,
        loading,
        fetchReviews,
        addReview,
        deleteReview,
    };

    return (
        <ReviewContext.Provider value={value}>
            {children}
        </ReviewContext.Provider>
    );
};

export const useReviewContext = () => { // Hook personalizado renombrado
    return React.useContext(ReviewContext);
};
