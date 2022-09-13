import React, {useState} from "react";
import axios from "axios";

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

    return(
        <section>
            <img src={data}/>
            <button onClick={() => {Dog()}}>Click here</button>
        </section>
    )
}

export default Dogs