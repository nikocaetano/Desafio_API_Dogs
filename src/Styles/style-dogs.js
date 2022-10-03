import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`

export const Image = styled.img`
width:30vw;
border:solid white;
border-radius:20px; 
box-shadow: 0 4px 5px #000;
`

export const Caixa = styled.section`
display:flex;
align-items:center;
flex-direction:column;
margin-top:5vw;
`

export const Box = styled.div`
display:flex;
width:30vw;
justify-content:space-evenly;
margin-top:1.5vw;
`

export const Button = styled.button`
width:10vw;
border:none;
border-radius: 12px 0px 12px 0px;
padding:1vw;
font-family: 'Reem Kufi Ink';
cursor: pointer;
background-color: #f1faee;
&:hover{
    border:solid 1px #ccd5ae;
    background-color:#e9edc9;
    tranform: scale(108%);
    transition: ease-in-out 0.5s;
}
`
