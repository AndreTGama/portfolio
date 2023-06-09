import styled from "styled-components";

export const Box = styled.div`
    border-top: 1px solid #CCCCCC;
`

export const Row = styled.div`
    border-top: 1px solid #CCCCCC;
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin-bottom: 15px;
    @media (max-width: 570px) {
        display: block;
        img{
            margin: 15px 0;
        }
    }
`

export const Achor = styled.a`
    width: 48px;
    padding: 15px 10px 0 0;
    :last-child {
        padding: 0;
    }
    img {
        width: 48px;
        height: 48px; 
    }
`
