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
`

export const Achor = styled.a`
    width: 40px;
    padding: 15px 10px 0 0;
    :last-child {
        padding: 0;
    }
`
