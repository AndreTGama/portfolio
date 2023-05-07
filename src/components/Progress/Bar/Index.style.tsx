import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: 15px;
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