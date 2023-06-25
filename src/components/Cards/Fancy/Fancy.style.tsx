import styled from 'styled-components';
import BackGround from '../../../assets/img/hex.webp';

export const Container = styled.div`
    color: white;
    margin-bottom: 15px;
    .flip-box {
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        perspective: 1000px;
        -webkit-perspective: 1000px;
    }

    .flip-box-front,
    .flip-box-back {
        background-image: linear-gradient(rgba(36, 36, 36, 0.9), rgba(0, 0, 0, 0.85)), url(${BackGround});
        border-radius: 8px;
        min-height: 400px;
        -ms-transition: transform 0.7s cubic-bezier(.4,.2,.2,1);
        transition: transform 0.7s cubic-bezier(.4,.2,.2,1);
        -webkit-transition: transform 0.7s cubic-bezier(.4,.2,.2,1);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    .flip-box-front {
        -ms-transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        box-shadow: rgb(193, 193, 193) 5px 10px

    }

    .flip-box:hover .flip-box-front {
        -ms-transform: rotateY(-180deg);
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        box-shadow: rgb(193, 193, 193) 5px 10px
    }

    .flip-box-back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;

        -ms-transform: rotateY(180deg);
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        box-shadow: rgb(193, 193, 193) 5px 10px
    }

    .flip-box:hover .flip-box-back {
        -ms-transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        box-shadow: rgb(193, 193, 193) 5px 10px
    }
`

export const Box = styled.div`
    position: relative;
    -webkit-backface-visibility: hidden;
    width: 300px;
`

export const Inner = styled.div`
    position: absolute;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
    transform: translateY(-50%) translateZ(60px) scale(.94);
    -webkit-transform: translateY(-50%) translateZ(60px) scale(.94);
    -ms-transform: translateY(-50%) translateZ(60px) scale(.94);
    padding:10px;
` 

export const InnerFront = styled(Inner)`
    top: 144px;
`

export const InnerBack = styled(Inner)`
    top: 180px;
`

export const Header = styled.div`
    font-size: 34px;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 15px 15px 5px 5px;
    margin-bottom: 15px;
`
export const Paragraph = styled.p`
    font-size: 20px;
    padding: 15px;
    text-align: justify;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 23px;
    max-height: 32px; 
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

export const Img = styled.img`
    width: 90%;
    margin-bottom: 15px;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-bottom: 15px;
`

export const Languages = styled.div`
    display: flex;
    margin-bottom: 30px;
    span {
        margin-right: 10px;
    }
    span:nth-child(1) {
        color: #8b00ff;
    }
    span:nth-child(2) {
        color: #1182e6;
    }
    span:nth-child(3) {
        color: #11d278;
    }
    span:nth-child(4) {
        color: #11d278;
    }
`