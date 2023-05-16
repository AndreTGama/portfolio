import styled from 'styled-components'

export const Section = styled.section`
    padding: 50px;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
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