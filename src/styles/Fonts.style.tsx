import styled from 'styled-components'
import { Colors } from './Colors.style'

export const ShadowWhite = styled.div`
    color: white;
    text-shadow: 0 0 20px white;
    font-family: 'Star Wars', sans-serif;
`

export const Title = styled.h2`
    color: ${Colors.text};
    font-weight: bold;
    font-style: italic;
    margin-bottom: 30px;
    font-size: 24px;
    position: relative;

    :after {
        content: '';
        position: absolute;
        height: 3px;
        background: ${Colors.blue};
        width: 30px;
        bottom: 0;
        left: 0;
    }
`

export const Description = styled.h3`
    color: ${Colors.text};
    text-indent: 1.5em;
    font-size: 14px;
    letter-spacing: 5px;
    font-weight: initial;
    margin-bottom: 30px;
`