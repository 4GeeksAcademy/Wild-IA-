import React from "react";

const AnimalCard = ({ name, description, imageUrl }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default AnimalCard;
