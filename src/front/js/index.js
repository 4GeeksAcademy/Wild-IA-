// //import react into the bundle
// import React from "react";
// import ReactDOM from "react-dom";

// //include your index.scss file into the bundle
// import "../styles/index.css";

// //import your own components
// import Layout from "./layout";

// //render your react application
// ReactDOM.render(<Layout />, document.querySelector("#app"));


// Importar react y ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from './store/authContext';

// Incluir los estilos CSS
import "../styles/index.css";

// Importar tu propio componente y el AuthProvider
import Layout from "./layout";

// Renderizar la aplicación, envolviendo el Layout con el AuthProvider
ReactDOM.render(
  <AuthProvider>
    <Layout />
  </AuthProvider>,
  document.querySelector("#app")
);
