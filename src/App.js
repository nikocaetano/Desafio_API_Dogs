import React from "react";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Rotas from './Routes/Rotas'
import * as S from "./Styles/style-dogs"


const App = () => {
  return(
    <section>
      <S.GlobalStyle/>
      <Header />
      <Rotas />
      <Footer />
    </section>
  )
}

export default App
