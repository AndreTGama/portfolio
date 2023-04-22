import styled from 'styled-components';
import ParatyNoite from '../../../assets/img/paraty/centro-noite.jpg';

export const Box = styled.div`
  background-color: #000000; 
  background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${ParatyNoite});
  background-repeat: no-repeat; 
  background-size: cover; 
  background-position: 100% 70%; 
  height: 500px;
`
