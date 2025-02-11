import React from "react";

function Datos() {
    return (
        <div className="container text-center my-5 fw-bold">
            <h1 className="display-4 text-success mb-4">Datos sobre Animales en Peligro de Extinción</h1>

            <p className="fs-3 mb-4">
                ¡Los animales en peligro necesitan nuestra ayuda!
            </p>

            <div className="row mt-5">
                <div className="col-md-6">
                    <img 
                        src="https://cdni.rt.com/actualidad/public_images/2019.05/original/5cf01cf9e9180f8c488b4567.jpg"
                        alt="Imagen 1"
                        className="img-fluid rounded shadow-lg"
                        style={{ maxWidth: "60%" }}
                    />
                </div>
                <div className="col-md-6 mb-4">
                    <img 
                        src="https://c.files.bbci.co.uk/BE47/production/_106811784_especies_en_extinsion-640-nc.png"
                        alt="Imagen 2"
                        className="img-fluid rounded shadow-lg"
                        style={{ maxWidth: "60%" }}
                    />
                </div>
            </div>

            <h1 className="fs-3 mb-3 fw-bold">
               "Proteger a los animales en peligro es proteger el equilibrio de nuestro planeta."
            </h1>

            <div className="mt-5">
                <h2 className="text-success mb-4">¿Cómo puedes ayudar?</h2>
                <div className="d-flex align-items-center justify-content-center">
                    {/* Imagen de la flecha */}
                    <div className="me-4">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/20/20864.png" 
                            alt="Flecha apuntando al video" 
                            className="img-fluid"
                            style={{ maxWidth: "150px" }} // Tamaño ajustado de la flecha
                        />
                    </div>
                    {/* Video */}
                    <div className="ratio ratio-4x3" style={{ maxWidth: "50%"}}>  
                    <iframe
                            src="https://www.youtube.com/embed/wMVVzutxle8"
                            title="Cómo puedes ayudar a los animales en peligro" 
                            allow="accelerometer; autoplay; clipboard-w
                            rite; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen   
                            className="rounded shadow-lg"
                            style={{ width: "100%", height: "390px" }} // Tamaño reducido del video
                        ></iframe>
                    </div>
                </div> 
            </div> 
            <div className="mt-4 text-center">
    <h2 className="text-success fw-bold">
        ¡Gracias por querer ayudar a los animales en peligro de extinción!
    </h2>
    <p className="fs-4 text-success mt-3">
        Juntos podemos marcar la diferencia y proteger nuestro planeta.
    </p>
</div>

        </div>
    );
}

export default Datos;


