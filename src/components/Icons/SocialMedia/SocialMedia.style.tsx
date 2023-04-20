import styled from "styled-components"
import { Colors } from "../../../styles/Colors.style"

export const Anchor = styled.a`
    color: ${Colors.squaryDark};
    :hover{
        color: ${Colors.squary};
        text-shadow: white 0px 0px 20px;
    }
`