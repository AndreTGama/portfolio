import styled from "styled-components";

export const Nav = styled.nav`
    width: 100%;
    height: 50px;
    color: #f7f7f7;
    background: rgba(253, 253, 253, 0.09);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.5px);
    -webkit-backdrop-filter: blur(4.5px);
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

export const Links = styled.a`
    color: #a2a2a2;
    padding: 0 3rem;
    &:hover {
        color: white;
    }
`