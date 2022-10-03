import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


export const Nav = styled.nav`
background-color:#a8dadc;
height:3vw;
`

export const Ul = styled.ul`
display:flex;
justify-content:space-evenly;
list-style:none;
font-family:'Reem Kufi Ink';
`
export const Core = styled(Link)`
text-decoration:none;
color:black;
&:hover{
font-weight:bold;
font-size: 1.8vw;
tranform: scale(105%);
    transition: ease-in-out 0.5s;
}
`

