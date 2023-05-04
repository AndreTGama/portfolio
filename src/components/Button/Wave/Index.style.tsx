import styled from 'styled-components';

type Props = {
  fontColor: string,
  borderColor: string,
  backgroundColor: string
}

export const Button = styled.a<Props>`
  color: ${props => props.fontColor};
  font-size: 16px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 20px 13px;
  outline: 0;
  border: 1px solid ${props => props.borderColor};
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:after {
    content: "";
    background-color: ${props => props.backgroundColor};
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  &:hover:after {
    top: 0px;
    left: 0px;
  }

@media (min-width: 768px) {
  padding: 13px 50px 13px;
}	
`