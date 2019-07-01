import styled from 'styled-components';

interface RectangleGradientLoaderProps {
  animationTime: string
  colorOne: string
  colorTwo: string
  colorThree: string
  height: string
  width: string
}

const RectangleGradientLoader = styled.div`

  height: ${(props: RectangleGradientLoaderProps) => props.height ? props.height : '24px'};
  width: ${(props: RectangleGradientLoaderProps) => props.width ? props.width : '100%'};
  background-color: blue;

  background: repeating-linear-gradient(to right, ${(props: RectangleGradientLoaderProps) => props.colorOne ? props.colorOne : '#a2a8a9'} 0%, ${(props: RectangleGradientLoaderProps) => props.colorTwo ? props.colorTwo : '#848C8E'} 50%, ${(props: RectangleGradientLoaderProps) => props.colorThree ? props.colorThree : '#a2a8a9'} 100%);
  background-size: 200% auto;
  background-position: 0 100%;
  animation: gradient ${(props: RectangleGradientLoaderProps) => props.animationTime ? props.animationTime : '2s'} infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  
  @keyframes gradient { 
    0%   { background-position: 0 0; }
    100% { background-position: -200% 0; }
  }

`;

export default RectangleGradientLoader;