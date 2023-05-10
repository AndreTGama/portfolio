import styled from 'styled-components'
import { Colors } from '../../styles/Colors.style'

export const Section = styled.section`
    padding: 50px;
`

export const Row = styled.div`
    display: flex;
    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
`

export const Container = styled.div`
    width: 100%;
`

export const TitleName = styled.h1`
    margin-bottom: 15px;
    font-size: 24px;
`

export const TitleOffice = styled.h2`
    color: ${Colors.text};
    font-weight: bold;
    font-style: italic;
    margin-bottom: 15px;
    font-size: 24px;
    position: relative;

    :after {
        content: "";
        position: absolute;
        height: 3px;
        background: ${Colors.blue};
        width: 10%;
        bottom: 0;
        left: 0;
    }
`

export const Description = styled.h3`
    color: rgb(81, 81, 81);
    font-family: "Lato";
    font-size: 14px;
    letter-spacing: 5px;
    font-weight: initial;
    margin-bottom: 15px;
`