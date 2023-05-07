import styled from 'styled-components'

export const Divisor = styled.div` 
    width:100%; 
    position:relative; 
    
    .mask { 
      overflow:hidden;
      height:20px; 
      
      &:after { 
        content:''; 
        display:block; margin:-25px auto 0;
        width:100%;
        height:25px;  
        border-radius:125px / 12px;  
        box-shadow:0 0 8px black;
      }
    }

    span {
      size:50px;
      width:50px;
      height:50px; 
      position:absolute; 
      bottom: -5px;
      margin-bottom: -50px/2;
      left:50%;
      margin-left:-50px/2;
      border-radius:100%;
      box-shadow:0 2px 4px #999;
      background:white;
    }
    span i {
      offset:4px;
      position:absolute;
      top: 4px;
      bottom: 4px;
      left: 4px;
      right: 4px;
      border-radius:100%;
      border:1px dashed #aaa;
      text-align:center;
      line-height:40px;
      font-style:normal;
      color:#999;
    }
`