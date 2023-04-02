import styled from "styled-components";

export const Section = styled.section`
    position: reltive;
    width: 100%;
    height: 100vh;
    padding: 100px
`

export const Img = styled.img`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const MoonImage = styled(Img)`
    mix-blend-mode: screen
`;