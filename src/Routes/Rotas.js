import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Cats from "../Componentes/Cats";
import Dogs from "../Componentes/Dogs";
import Home from "../Componentes/Home";
import * as S from "../Styles/styles-rotas"

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
        <S.Nav>
            <S.Ul>
                <li>
                    <S.Core to="/home">{rota1}</S.Core>
                </li>
                <li>
                    <S.Core to="/dogs">{rota2}</S.Core>
                </li>
            </S.Ul>
        </S.Nav>
    )
}