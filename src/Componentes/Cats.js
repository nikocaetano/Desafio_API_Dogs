import axios from "axios";
import React, {useState} from "react";

const Cats = () => {
    const [data, setData] = useState(null)

    const Api = 'https://api.thecatapi.com/v1/images/'
    
    const Cat = () => {
        axios.get(Api)
        .then(resposta => {
            setData(resposta.data.message)
        })
        .catch(
            console.log('Desculpe, encontramos um erro')
        )
    }

    return(
        <section>
            <img src={data}/>
            <button onClick={() => {Cat()}}>Click here</button>
        </section>
    )
}

export default Cats