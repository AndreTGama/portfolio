import styled from 'styled-components'

export const Section = styled.div`
    padding: 50px 50px 0 50px;
`

export const Line = styled.div`
    margin-left: 30px;
    @media (max-width: 740px) {
        display: none;
    }
`

export const Row = styled.div`
    display: flex;
    @media (max-width: 740px) {
        display: flex;
        flex-direction: column;
        text-align: center;
        justify-content: center;
    }
`