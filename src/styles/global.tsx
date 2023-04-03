import { createGlobalStyle } from "styled-components"
import space from '../assets/img/space-hd.jpg'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        
    }
    body {
        background-color: #1c0522;
        overflow-x: hidden;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
`