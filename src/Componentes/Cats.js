import axios from "axios";
import React, {useState} from "react";

const Cats = () => {
    const [data, setData] = useState(null)

    const Api = 'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_NVqLsha29WmG9yY07vbTA1DIp5UmpMuY9T6ATZLfSN9GeRPymBgDt0x2TccpefHE'
    
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