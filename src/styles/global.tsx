import { createGlobalStyle } from "styled-components"
import space from '../assets/img/space-hd.jpg'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        
    }
    body {
        background-color: #3b3a60;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
`