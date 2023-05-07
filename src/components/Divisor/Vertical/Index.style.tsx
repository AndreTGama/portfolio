import styled from 'styled-components'

export const Divisor = styled.div` 
    display:inline-block;
    width:100px; 
    position:relative; 

    .right { 
        content:''; 
        display:block;
        margin-left:20px;
        width:20px;
        height:100%; 
        border-radius:12px / 125px; 
        box-shadow:0 0 8px black;
    }
`

export const Mask = styled.div`
    overflow:hidden;
    width:20px;
    height:200px;

    :after { 
        content:''; 
        display:block;
        margin-left:-20px;
        width:20px;
        height:100%;  
        border-radius:12px / 125px;  
        box-shadow:0 0 8px black;
    }

    :before { 
        content:''; 
        display:block;
        margin-left:20px;
        width:20px;
        height:100%; 
        border-radius:12px / 125px; 
        box-shadow:0 0 8px black;
    }
`