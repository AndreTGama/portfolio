import styled from "styled-components";

type State = {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
    hiddenMoon?: boolean;
}

export const Section = styled.section`
    height: 100vh;
    padding: 100px
    display: flex;
    justify-content: center;
    
    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 150px;
        background: linear-gradient(to top, #1c0522, transparent);
        z-index: 1;
    }
`

export const Img = styled.img<State>`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const StarsImage = styled(Img)`
    left: ${props => props.left ? `${props.left}px` : '-200px'};
`;
export const MoonImage = styled(Img)`
    mix-blend-mode: screen;
    top: ${props => props.top ? `${props.top}px` : '-100px'};
    ${({ hiddenMoon }) => hiddenMoon && `
        display: none;
    `}
`;

export const BuildingsImagesLeft = styled(Img)`
    left: ${props => props.left ? `-${props.left}px` : ''};
    left: ${props => props.left ? `${props.left}px` : ''};
`;

export const BuildingsImagesRight = styled(Img)`
    left: ${props => props.left ? `-${props.left}px` : ''};
`;

export const ManImage = styled(Img)`
    top: ${props => props.top ? `${props.top}px` : ''};
`;

