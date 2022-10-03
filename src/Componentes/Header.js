import React, { useState } from "react";
import * as S from "../Styles/style-header"

import Logo from "../Assets/adopt.png"

const Header = () => {
    return (
        <S.Section>
            <S.Logo src={Logo} />
            <S.Div>
                <h1>AdoptPets</h1>
                <h3>Feira de adoção online</h3>
            </S.Div>
        </S.Section>
    )
}

export default Header