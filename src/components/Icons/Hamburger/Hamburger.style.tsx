import styled from "styled-components";

type State = {
    active?: boolean
    onClick?: () => void;
}

export const Ham = styled.svg<State>`
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    width: 3rem;
    padding: 0 3rem;
    ${props => props.active ? 'transform: rotate(45deg);' : ''};
`

export const Line = styled.path`
    fill:none;
    stroke:white;
    stroke-width: 5.5;
    stroke-linecap:round;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
`

export const Top = styled(Line)<State>`
    stroke-dasharray: 40 139;
    ${props => props.active ? 'stroke-dashoffset: -98px;' : ''};
`
export const Middle = styled(Line)<State>`
    stroke-dasharray: 40 139;
`

export const Bottom = styled(Line)<State>`
    stroke-dasharray: 40 121;
    ${props => props.active ? 'stroke-dashoffset: -68px;' : ''};
`