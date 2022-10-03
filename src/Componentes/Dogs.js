import React, { useState } from "react";
import axios from "axios";
import * as S from "../Styles/style-dogs"

const Dogs = () => {
    const [data, setData] = useState(null)

    const Api = 'https://dog.ceo/api/breeds/image/random'

    const Dog = () => {
        axios.get(Api)
            .then(resposta => {
                setData(resposta.data.message)
            })
            .catch(
                console.log('Desculpe, mas erros foram encontrados')
            )
    }

    return (
        <S.Caixa>
            
                <S.Image src={data} />
            <S.Box>
                <S.Button onClick={() => { Dog() }}>Conheça os pets</S.Button>
                <S.Button>Adotar</S.Button>
            </S.Box>
        </S.Caixa>
    )
}

export default Dogs