import styled from 'styled-components';


export const Container = styled.div<{ size:number, left:number, top:number, sidePos:number, name:string }>`
  width: ${props =>props.size}px;
  height: ${props =>props.size}px;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  background-image:url('./assets/char.png');
  background-position: 0px ${props => props.sidePos}px;

  &::after{
    content:"${props => props.name}";
    display: block;
    transform: translateY(-20px);
    font-size: 16px;
    color: black;
  }
`;