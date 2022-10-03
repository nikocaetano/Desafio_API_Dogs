import styled from "styled-components";
import Foto from "../Assets/Banner-Home.png"

export const Section = styled.section`
display:flex;
height:18vw;
width:100%;
background-color:#f1faee;
`

export const Logo = styled.img`
width: 20vw;
height: 20vw;
`

export const Div = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
width:70%;
font-family: 'Fredoka One';

h1{
    font-size: 8vw;
    box-shadow: 0 3px 6px #000;
    width: 45vw;
}
h3{
    padding-top: 1vw;
}
`