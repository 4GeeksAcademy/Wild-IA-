import React from "react";
import { useNavigate } from "react-router-dom";

function Extincion() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                backgroundImage: "url('https://wallpapercave.com/wp/wp9339829.jpg')", // Cambia la URL por tu imagen
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "100vh",
                color: "white",
                padding: "1rem",
            }}
        >
            <button
                onClick={() => navigate("/home")}
                className="btn btn-warning position-absolute start-0 top-0 m-4"
            >
                Volver
            </button>
            <div className="container">
                <h1 className="text-center mb-4 display-4 fw-bold">
                    Animales en Peligro de Extinción
                </h1>
                <p className="text-center mb-4 lead">
                    Descubre información importante sobre especies en peligro de extinción gracias a National Geographic.
                </p>

                <div className="d-flex justify-content-center mb-4">
                    <iframe
                        width="600"
                        height="400"
                        src="https://www.youtube.com/embed/NJaYg0D0MTo"
                        title="Video sobre animales en peligro de extinción"
                        className="rounded shadow-lg"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div>
                    <p className="mb-4 text-center">
                        La extinción es un fenómeno natural: al fin y al cabo, más del 90 por ciento de todos los organismos que han vivido en la Tierra no están vivos en la actualidad.
                    </p>
                    <p className="mb-4 text-center">
                        Pero los humanos lo han empeorado al acelerar los ritmos de extinción natural debido a nuestro papel en la pérdida de hábitat, el cambio climático, las especies invasoras, las enfermedades, la sobrepesca y la caza.
                    </p>
                    <p className="mb-4 text-center">
                        «Estamos perdiendo conjuntos enteros de especies que desempeñan papeles ecológicos distintivos», afirma Stuart Pimm, profesor de Conservación en la Universidad de Duke. Por ejemplo, superdepredadores como las nutrias marinas y los tiburones han disminuido, lo que ha desestabilizado sus ecosistemas.
                    </p>
                    <p className="mb-4 text-center">
                        Decenas de especies nuevas se extinguen cada día y los científicos afirman que más de 20.000 plantas y animales están al borde de desaparecer para siempre. Un cuarto de todas las especies de mamíferos están en peligro de extinción.
                    </p>
                    <p className="mb-4 text-center">
                        El organismo principal que rastrea el descenso de las especies es la Unión Internacional para la Conservación de la Naturaleza. La organización evalúa a las especies en estado salvaje y, junto con datos de una serie de fuentes, clasifica su vulnerabilidad en su Lista Roja de Especies Amenazadas.
                    </p>
                    <p className="mb-4 text-center">
                        A continuación te explicamos algunos términos y conceptos que usan los biólogos cuando hablan de la extinción.
                    </p>

                    <h2 className="mt-4 mb-3 text-center text-warning">En peligro crítico de extinción</h2>
                    <p className="mb-4 text-center">
                        Estos animales se enfrentan a una alta probabilidad de extinción. Entre ellos se incluyen el rinoceronte de Sumatra y el orangután de Sumatra, cuyo hábitat está quedando destruido por la tala y la agricultura.
                    </p>

                    <h2 className="mt-4 mb-3 text-center text-warning">Extinto en estado silvestre</h2>
                    <p className="mb-4 text-center">
                        Estas son especies que ya no viven en su área de distribución autóctona y que solo existen en entornos de cautividad, como zoológicos o centros de cría.
                    </p>

                    <h2 className="mt-4 mb-3 text-center text-warning">Extinto a nivel local</h2>
                    <p className="mb-4 text-center">
                        Esta no es una categoría de la UICN, sino un término que significa que un animal ha desaparecido en parte de su área de distribución autóctona.
                    </p>

                    <h2 className="mt-4 mb-3 text-center text-warning">Funcionalmente extinto</h2>
                    <p className="mb-4 text-center">
                        Este término significa que no hay suficientes miembros de una especie para que realice su función en el ecosistema.
                    </p>

                    <h2 className="mt-4 mb-3 text-center text-warning">Extinto</h2>
                    <p className="mb-4 text-center">
                        Esta categoría de la UICN significa que una especie está «extinta a nivel global» o «desaparecida en todas partes».
                    </p>

                    <h2 className="mt-4 mb-3 text-center text-warning">Especie extinta redescubierta</h2>
                    <p className="mb-4 text-center">
                        A veces, los animales considerados extintos aparecen con vida, sobre todo gracias a búsquedas centradas en hábitats remotos.
                    </p>

                    <p className="mb-4 text-center">
                        La rana de cristal de Manduriacu, de los Andes ecuatorianos, fue descubierta en una zona minera, de forma que su supervivencia es ya de por sí dudosa.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Extincion;
