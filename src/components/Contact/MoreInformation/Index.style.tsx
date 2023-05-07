import styled from 'styled-components';
import { Colors } from '../../../styles/Colors.style';

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px;

    @media (max-width: 740px) {
        hr {
            width: 50%;
            margin: auto;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    @media (max-width: 740px) {
        display: flex;
        flex-direction: row;
        text-align: center;
        justify-content: center;
    }
`;

export const Span = styled.span`
    margin-left: 20px;
    color: rgb(81, 81, 81);
`

export const SpanTittle = styled.span`
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: 400;
    font-family: "Lato";
    color: rgb(81, 81, 81);
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 5px;
`

export const Icons = styled.div`
    color: ${Colors.squaryDark};
    margin: 5px;
    :hover{
        color: ${Colors.squary};
        text-shadow: white 0px 0px 20px;
    }
`