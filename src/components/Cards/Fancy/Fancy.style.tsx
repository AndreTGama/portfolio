import styled from "styled-components";

export const Container = styled.div`
    .flip-box {
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform-style: preserve-3d;
        perspective: 1000px;
        -webkit-perspective: 1000px;
    }

    .flip-box-front,
    .flip-box-back {
        background-image: linear-gradient(to right, #8943D9, #6E5CD9, #302b63);
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        min-height: 300px;
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
    }

    .flip-box:hover .flip-box-front {
        -ms-transform: rotateY(-180deg);
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
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
    }

    .flip-box:hover .flip-box-back {
        -ms-transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
        -webkit-transform-style: preserve-3d;
        -ms-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }

    .flip-box-img {
        margin-top: 25px;
    }

    .flip-box-button {
        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 2px;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        margin-top: 25px;
        padding: 15px 20px;
        text-transform: uppercase;
    }
`

export const Star = styled.div`
    display: flex;
    justify-content: end;
    padding-right: 15px;
`

export const Box = styled.div`
    position: relative;
    -webkit-backface-visibility: hidden;
    width: 415px;
    margin-bottom: 35px;
    max-width: 100%;
`

export const Paragraph = styled.p`
    font-size: 20px;
    line-height: 1.5em;
`

export const Inner = styled.div`
    color: white;
    position: absolute;
    left: 0;
    width: 100%;
    padding: 60px;
    outline: 1px solid transparent;
    -webkit-perspective: inherit;
    perspective: inherit;
    z-index: 2;
    transform: translateY(-50%) translateZ(60px) scale(.94);
    -webkit-transform: translateY(-50%) translateZ(60px) scale(.94);
    -ms-transform: translateY(-50%) translateZ(60px) scale(.94);
    top: 50%;
` 

export const Header = styled.span`
    font-size: 34px;
`