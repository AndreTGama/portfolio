import styled, { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors.style';

type State = {
    firstColor?: string;
    secondColor?: string;
    linearEffect?: boolean;
};

type StateRow = {
    mediaMaxWidth: number;
    flexDirection: string;
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
    justify-content: space-between;
    align-items: center;
`;

export const RowResponsive = styled(Row)<StateRow>`
    @media (max-width: ${props => props.mediaMaxWidth ?? '900'}px) {
        display: flex;
        flex-direction: ${props => props.flexDirection ?? 'column'};
        text-align: center;
        justify-content: center;
    }
`

export const Container = styled.section<State>`
    padding: 3em;
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

export const ContainerCenter = styled.section<State>`
    padding: 3em 10em;
    height: 100%;
    ${props =>
        props.linearEffect
            ? `background: linear-gradient(${props.firstColor}, ${props.secondColor});`
            : `background-color: ${
                props.firstColor ? props.firstColor : '#FFF'
            };
    `};
`;
