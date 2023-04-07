import styled from "styled-components";

type State = {
    active?: boolean
    //TODO on click should be onClick: () => void, but not working 
    onClick: any;
}

type StateActive = {
    active: boolean
}

export const GlassesEffect = styled.div`
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
    backdrop-filter: blur(2.2px);
    -webkit-backdrop-filter: blur(2.2px);
`

export const Div = styled(GlassesEffect)`
    width: 100%;
    padding: 15px 0px;
    color: #f7f7f7;
    position: fixed;
    z-index: 3;
`

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
`
export const RowResponsive = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
`

export const Img = styled.img`
    height: 50px;
`

export const Links = styled.a<State>`
    color: ${props => props.active ? 'white' : '#a2a2a2'};
    text-shadow: ${props => props.active ? '0 0 20px white' : ''};
    padding: 0 3rem;
    &:hover {
        color: white;
        text-shadow: 0 0 20px white;
    }
`

export const ResponsiveNavBar = styled(GlassesEffect)<StateActive>`
    text-align: center;
    height: 100vh;
    display: ${props => props.active ? 'block' : 'none'};;
`
