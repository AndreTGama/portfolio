import styled from 'styled-components'
import { Colors } from '../../../styles/Colors.style'

export const Anchor = styled.a`
    color: ${Colors.blue};
    margin: 5px;
    -webkit-transition: color 2s ease-out;
    -moz-transition: color 2s ease-out;
    -o-transition: color 2s ease-out;
    transition: color 2s ease-out;
    :hover{
        color: ${Colors.blueHover};
        text-shadow: white 0px 0px 20px;
    }
`