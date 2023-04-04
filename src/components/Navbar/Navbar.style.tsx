import styled from "styled-components";

type State = {
    active?: boolean
    //TODO on click should be onClick: () => void, but not working 
    onClick: any;
}

export const Nav = styled.nav`
    width: 100%;
    height: 50px;
    color: #f7f7f7;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0);
    backdrop-filter: blur(2.2px);
    -webkit-backdrop-filter: blur(2.2px);
    position: fixed;
    z-index: 3;
`

export const Row = styled.div`
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