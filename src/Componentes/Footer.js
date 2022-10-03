import React from "react";
import * as S from "../Styles/styles-footer"
import Foto from "../Assets/redes.png"

export default function Footer() {
    return (
        <S.Caixa>
            <S.Box>
                <h3>Acesse nossas redes sociais</h3>
                <S.Image src={Foto} />
            </S.Box>
            <S.Text>© Layout produzido por Nikolas Caetano para fins exclusivamente educacionais do curso de Front-End Vai na Web.</S.Text>
        </S.Caixa>
    )
}