import styled from "styled-components";
import { Row } from "../../../styles/global";

type State = {
    active?: boolean
    onClick: any;
}

export const Links = styled.a<State>`
    color: ${props => props.active ? 'white' : '#a2a2a2'};
    text-shadow: ${props => props.active ? '0 0 20px white' : ''};
    padding: 2rem;
    &:hover {
        color: white;
        text-shadow: 0 0 20px white;
    }
    @media (max-width: 790px) {
        font-size: 1.5rem;
    }
`

export const RowCollumn = styled(Row)`
    flex-direction: row;
    
    @media (max-width: 790px) {
        flex-direction: column;
    }
` 