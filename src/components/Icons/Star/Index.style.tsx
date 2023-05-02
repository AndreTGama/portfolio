import styled from "styled-components";

type Props = {
    width: number
}

export const Star = styled.div`
    .star{ width:150px; position: relative;color: #bdbdbd;}

    .rating {
    width:60%;
    overflow: hidden;
    white-space: nowrap;
    }

    .rating span{
    font-size:30px;
    white-space: nowrap;
    overflow: hidden;
    color: gold;
    }

    .rating span:before { 
    content:"\2606\2606\2606\2606\2606";
    position: absolute;
    color: #bdbdbd;
    z-index: -1;
    }
`

export const Rating = styled.div<Props>`
    overflow: hidden;
    white-space: nowrap;
    width: ${props => `${props.width}%`};
`

export const Span = styled.span`
    font-size: 250px;
    white-space: nowrap;
    overflow: hidden;
    color: gold;

    &:before { 
        content:"\2606";
        position: absolute;
        color: #bdbdbd;
        z-index: -1;
    }
`