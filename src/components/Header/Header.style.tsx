import styled from "styled-components";
import { Colors } from '../../styles/Colors.style';

export const Box = styled.div`
    @keyframes mainBlock {
        0% {
            width: 0%;
            left: 0;

        }
        50% {
            width: 100%;
            left: 0;

        }
        100% {
            width: 0;
            left: 100%;
        }
    }

    @keyframes secBlock {
        0% {
            width: 0%;
            left: 0;

        }
        50% {
            width: 100%;
            left: 0;

        }
        100% {
            width: 0;
            left: 100%;
        }
    }

    @keyframes mainFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }


    @keyframes popIn {
        0% {
            width: 0px;
            height: 0px;
            background: ${Colors.complementary};
            border: 0px solid #ddd;
            opacity: 0;
        }
        50% {
            width: 10px;
            height: 10px;
            background: ${Colors.complementary};
            opacity: 1;
            bottom: 45px;
        }
        65% {
            width: 7px;
            height: 7px;
            bottom: 0px;
            width: 15px
        }
        80% {
            width: 10px;
            height: 10px;
            bottom: 20px
        }
        100% {
            width: 7px;
            height: 7px;
            background: ${Colors.complementary};
            border: 0px solid #222;
            bottom: 13px;

        }
    }

    @keyframes secFadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.5;
        }
    }
`

export const Title = styled(Box)`
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 10px;
`

export const BlockTitle = styled(Title)`
    width: 0%;
    height: inherit;
    background: ${Colors.complementary};
    position: absolute;
    animation: mainBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
    display: flex;
`

export const TitleH = styled.h1`
    color: #fff;
    font-size: 32px;
    -webkit-animation: mainFadeIn 2s forwards;
    -o-animation: mainFadeIn 2s forwards;
    animation: mainFadeIn 2s forwards;
    animation-delay: 1.6s;
    opacity: 0;
    display: flex;
    align-items: baseline;
    position: relative;
`

export const TileSpan = styled.span`
    width:0px;
    height: 0px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;

    background: ${Colors.complementary};
    -webkit-animation: load 0.6s cubic-bezier(.74, .06, .4, .92) forwards;
    animation: popIn 0.8s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 2s;
    margin-left: 5px;
    margin-top: -10px;
    right: -12px;
`

export const Role = styled(Box)`
    width: 100%;
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`
export const BlockRole = styled(Role)`
    width: 0%;
    height: inherit;
    background: ${Colors.squary};
    position: absolute;
    animation: secBlock 2s cubic-bezier(.74, .06, .4, .92) forwards;
    animation-delay: 2s;
    display: flex;
`
export const RoleP = styled.p`
    animation: secFadeIn 2s forwards;
    animation-delay: 3.2s;
    opacity: 0;
    font-weight: 400;
    font-family: 'Lato';
    color: #ffffff;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
`

export const Footer = styled.div`
    width: 350px;
    height: 80px;
    background: #ffb510;
    position: absolute;
    right: 0;
    bottom: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: top 0.8s forwards;
    animation-delay: 4s;
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #232323;
        font-family: 'Poppins';

        i {
            margin-right: 25px;
            font-size: 22px;
            color: #232323;
            animation: icon 2s forwards;
            animation-delay: 4s;
            opacity: 0;
        }
    }

    @keyframes top {
        0% {
            opacity: 0;
            bottom: -80px
        }
        100% {
            opacity: 1;
            bottom: 0px
        }
    }

    @keyframes icon {
        0% {
            opacity: 0;
            transform: scale(0.0);
        }
        50% {
            opacity: 1;
            transform: scale(1.3) rotate(-02deg);
        }
        100% {
            opacity: 1;
            bottom: 0px;
        }
    }
`
