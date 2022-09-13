import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cats from "../Componentes/Cats";
import Dogs from "../Componentes/Dogs";
import Home from "../Componentes/Home";

const Rotas = () => {
    return (
        <BrowserRouter>
        <Rota rota1="Sobre nós" rota2="Adote um doguinho" rota3="Adote um gatinho"/>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/dogs" element={<Dogs />} />
                <Route path="/cats" element={<Cats />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas

const Rota = ({ rota1, rota2, rota3 }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/home">{rota1}</Link>
                </li>
                <li>
                    <Link to="/dogs">{rota2}</Link>
                </li>
                <li>
                    <Link to="/cats">{rota3}</Link>
                    </li>
            </ul>
        </nav>
    )
}