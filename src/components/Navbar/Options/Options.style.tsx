import styled from "styled-components";

type State = {
    active?: boolean
    //TODO on click should be onClick: () => void, but not working 
    onClick: any;
}

type StateActive = {
    active: boolean
}

export const Links = styled.a<State>`
    color: ${props => props.active ? 'white' : '#a2a2a2'};
    text-shadow: ${props => props.active ? '0 0 20px white' : ''};
    padding: 0 3rem;
    &:hover {
        color: white;
        text-shadow: 0 0 20px white;
    }
`