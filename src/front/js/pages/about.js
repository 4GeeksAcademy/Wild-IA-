import React from "react";
import { useNavigate } from "react-router-dom";

function AcercaDe() {
  const navigate = useNavigate();

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center text-white position-relative"
      style={{ 
        minHeight: "100vh", 
        padding: "2rem",
        backgroundImage: "url('https://www.mactualidad.com/wp-content/uploads/2013/06/fondo-pantalla-animal-salvaje-149.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
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
          backgroundColor: "rgba(0, 0, 0, 0.7)", // Color verde success con opacidad
          zIndex: 1,
        }}
      />

      {/* Contenido principal - aumentamos el z-index para que esté sobre el overlay */}
      <button
        onClick={() => navigate("/")}
        className="btn btn-light position-absolute start-0 top-0 m-4"
        style={{ zIndex: 2 }}
      >
        Volver
      </button>

      <div className="position-relative" style={{ zIndex: 2 }}>
        <h2
          className="display-4 text-center text-shadow mb-4"
          style={{ color: "yellow" }}
        >
          De mi pasión a un futuro más salvaje
        </h2>

        <p className="lead text-center mb-4">
          Wil Nation nace de la convicción de que cada especie tiene un papel
          fundamental en nuestro planeta. Nuestra misión es crear conciencia sobre
          la crisis de extinción que enfrentan muchos animales y empoderar a las
          personas para que tomen medidas concretas para protegerlos. A través de
          esta plataforma, buscamos conectar a amantes de los animales, compartir
          información relevante y fomentar acciones que contribuyan a un futuro
          más sostenible.
        </p>

        <div className="d-flex flex-column flex-md-row gap-4 mb-4">
          <div className="w-100">
            <h3 className="text-center text-shadow mb-3" style={{ color: "yellow" }}>
              ¿Por qué es importante este proyecto?
            </h3>
            <p>
              La pérdida de biodiversidad es una de las mayores amenazas que enfrenta
              nuestro planeta. Al informar y concientizar sobre esta problemática,
              podemos inspirar a las personas a adoptar hábitos más sostenibles y
              apoyar iniciativas de conservación.
            </p>
          </div>
          <div className="w-100">
            <h3 className="text-center text-shadow mb-3" style={{ color: "yellow" }}>
              ¿Cómo puedes ayudar?
            </h3>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">
                <strong>Comparte:</strong> Difunde este proyecto en tus redes sociales.
              </li>
              <li className="mb-2">
                <strong>Aprende:</strong> Explora nuestros recursos educativos y descubre
                cómo puedes hacer una diferencia en tu comunidad.
              </li>
              <li className="mb-2">
                <strong>Súmate:</strong> Únete a nuestra comunidad y participa en nuestras
                iniciativas.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center lead mb-0">
          Juntos podemos construir un mundo donde todos los animales tengan un
          lugar.
        </p>
      </div>

      {/* Imágenes decorativas - aumentamos el z-index para que estén sobre el overlay */}
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/024/499/890/small_2x/african-leopard-jaguar-cheetah-tiger-tiger-mammal-animals-cat-like-mammal-ai-generative-free-png.png"
        alt="Leopardo"
        className="position-absolute end-0 bottom-0"
        style={{
          width: "170px",
          height: "auto",
          margin: "10px",
          opacity: 0.8,
          zIndex: 2,
        }}
      />

      <img
        src="https://pngimg.com/uploads/polar_bear/polar_bear_PNG23507.png"
        alt="Oso Polar"
        className="position-absolute end-0 top-0"
        style={{
          width: "170px",
          height: "auto",
          margin: "10px",
          opacity: 0.8,
          zIndex: 2,
        }}
      />
    </div>
  );
}

export default AcercaDe;