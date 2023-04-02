import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        font-family: 'Montserrat', sans-serif;
        
    }
    body {
        background-color: rebeccapurple;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
`