import styled, { createGlobalStyle } from 'styled-components';

type State = {
    firstColor?: string;
    secondColor?: string;
    linearEffect?: boolean;
};

type StateRow = {
    mediaMaxWidth: number;
    flexDirection: string;
};

export const Section = styled.section`
    margin-bottom: 15px;
    width: 100%;
    height: 100%;
`

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        font-family: 'Lato';
    }
    body {
        background: linear-gradient(rgb(247, 247, 247), rgb(209, 213, 255));
        overflow-x: hidden;
    }
    a {
        color: inherit;
        text-decoration: inherit;
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

export const Container = styled(Section)<State>`
    padding: 3em;
`;

export const ContainerCenter = styled.section<State>`
    padding: 15px;
    display: flex;
    justify-content: space-evenly;;
    align-items: center;
    margin-bottom: 30px;
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column-reverse;
        text-align: center;
        justify-content: center;
    }
`;
