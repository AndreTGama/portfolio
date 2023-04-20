import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors.style';

type State = {
    firstColor?: string;
    secondColor?: string;
    linearEffect?: boolean;
};
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        font-family: 'Montserrat', sans-serif;
    }
    body {
        background-color: ${Colors.primary};
        overflow-x: hidden;
    }
    a {
        color: inherit;
        text-decoration: inherit;
    }
    .content {
        position: relative;
        z-index: 2;
        background-color: ${Colors.primary};
        width: 100%;
    }
`;
export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Container = styled.section<State>`
    padding: 2rem;
    width: 100%;
    height: 100%;
    ${props =>
        props.linearEffect
            ? `background: linear-gradient(${props.firstColor}, ${props.secondColor});`
            : `background-color: ${
                props.firstColor ? props.firstColor : '#FFF'
            };
    `};
`;
