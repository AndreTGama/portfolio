import styled from "styled-components";

type State = {
    active?: boolean
    onClick?: any;
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
    ${props => props.active ? 'transform: rotate(45deg);' : ''};
`

export const Line = styled.path`
    fill:none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke:white;
    stroke-width: 5.5;
    stroke-linecap:round;
`

export const Top = styled(Line)<State>`
    ${props => props.active ? 'stroke-dashoffset: -98px;' : 'stroke-dasharray: 40 139;'};
`

export const Bottom = styled(Line)<State>`
    ${props => props.active ? 'stroke-dashoffset: -68px;' : ' stroke-dasharray: 40 121;'};
`