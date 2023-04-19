import styled from "styled-components";
import { Colors } from "../../../styles/Colors.styles";

export const BackGround = styled.section`
    height: 100vh;
    width: 100%;
    background: #070356;
    justify-content: center;
    align-items: center;
    display: flex;

    @keyframes move {
        100% {
            transform: translate3d(0, 0, 1px) rotate(360deg);
        }
    }
    
    .bubble {
        width: 200px;
        height: 200px;
        border-radius: 50vmin;
        backface-visibility: hidden;
        position: absolute;
        animation: move;
        animation-duration: 5;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .bubble:nth-child(0) {
        color: #4531fb;
        top: 40%;
        left: 12%;
        animation-duration: 41s;
        animation-delay: -420s;
        transform-origin: 13vw -18vh;
        box-shadow: -100vmin 0 13.355905662563922vmin currentColor;
    }

    .bubble:nth-child(1) {
        color: #3750f7;
        top: 3%;
        left: 74%;
        animation-duration: 258s;
        animation-delay: -36s;
        transform-origin: -18vw -8vh;
        box-shadow: -100vmin 0 13.360681488868838vmin currentColor;
    }

    .bubble:nth-child(2) {
        color: #4531fb;
        top: 78%;
        left: 62%;
        animation-duration: 336s;
        animation-delay: -140s;
        transform-origin: -2vw -18vh;
        box-shadow: -100vmin 0 12.748336195278345vmin currentColor;
    }

    .bubble:nth-child(3) {
        color: #6a63fa;
        top: 95%;
        left: 50%;
        animation-duration: 439s;
        animation-delay: -418s;
        transform-origin: -16vw 19vh;
        box-shadow: -100vmin 0 12.709849257053131vmin currentColor;
    }

    .bubble:nth-child(4) {
        color: #4531fb;
        top: 59%;
        left: 11%;
        animation-duration: 350s;
        animation-delay: -80s;
        transform-origin: -15vw -5vh;
        box-shadow: 100vmin 0 13.163452307272934vmin currentColor;
    }

    .bubble:nth-child(5) {
        color: #3750f7;
        top: 95%;
        left: 80%;
        animation-duration: 294s;
        animation-delay: -409s;
        transform-origin: 18vw -1vh;
        box-shadow: -100vmin 0 12.536711316675419vmin currentColor;
    }

    .bubble:nth-child(6) {
        color: #4531fb;
        top: 66%;
        left: 3%;
        animation-duration: 97s;
        animation-delay: -398s;
        transform-origin: -13vw 14vh;
        box-shadow: -100vmin 0 12.894022581265338vmin currentColor;
    }

    .bubble:nth-child(7) {
        color: #4531fb;
        top: 28%;
        left: 86%;
        animation-duration: 354s;
        animation-delay: -265s;
        transform-origin: 16vw 25vh;
        box-shadow: -100vmin 0 13.114395388057966vmin currentColor;
    }

    .bubble:nth-child(8) {
        color: #3750f7;
        top: 44%;
        left: 91%;
        animation-duration: 252s;
        animation-delay: -418s;
        transform-origin: 22vw -11vh;
        box-shadow: 100vmin 0 12.590694043320054vmin currentColor;
    }

    .bubble:nth-child(9) {
        color: #4531fb;
        top: 38%;
        left: 22%;
        animation-duration: 36s;
        animation-delay: -134s;
        transform-origin: -4vw 18vh;
        box-shadow: -100vmin 0 12.631965797502232vmin currentColor;
    }
`
