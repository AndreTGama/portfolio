import { createGlobalStyle } from "styled-components"

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
    .content {
        position: relative;
        z-index: 2;
        background-color: #1c0522;
        width: 100%;
    }
`