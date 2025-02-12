import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Login from './pages/login'; // Importa el componente de login
import Welcome from "./pages/welcome";
import Register from "./pages/register";
import AcercaDe from "./pages/about";
import ProtectedRoute from "./pages/ProtectedRoute";
import Donar from "./pages/donar";
import Extincion from "./pages/extincion";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<Welcome />} path="/" />
                        <Route
                            path="/home"
                            element={
                                <ProtectedRoute>
                                    <Home />
                                </ProtectedRoute>
                            }
                        />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/about" element={<AcercaDe />} />
                        <Route element={<h1>Not found!</h1>} />
                        <Route path="/donar" element={<Donar />} />
                        <Route path="/extincion" element={<Extincion />} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};
export default injectContext(Layout);
