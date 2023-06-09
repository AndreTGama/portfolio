import styled from 'styled-components'

type StateActive = {
    active: boolean
}

export const GlassesEffect = styled.nav`
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
`

export const Nav = styled(GlassesEffect)`
    width: 100%;
    color: #f7f7f7;
    position: fixed;
    z-index: 3;
    height: 3rem;
`

export const RowLargeScreen = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    padding: 0 2rem;
    height: 100%;

    @media (max-width: 790px) {
        display: none;
    }
`
export const RowSmallScreen = styled.div`
    display: none;
    height: 100%;
    padding: 0 2rem;
    @media (max-width: 790px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
`

export const ResponsiveNavBar = styled(GlassesEffect)<StateActive>`
    text-align: center;
    transition: visibility 0s, opacity 0.5s linear;
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    opacity: ${props => props.active ? '1' : '0'};
    height: ${props => props.active ? '100vh' : ''};

    @media (min-width: 790px) {
        display: none;
    }
`
