import styled from 'styled-components';

interface RectangleGradientLoaderProps {
  animationTime: string;
  colorOne: string;
  colorTwo: string;
  colorThree: string;
  height: string;
  position: string;
  width: string;
}

const RectangleGradientLoader = styled.div`
  height: ${(props: RectangleGradientLoaderProps) => (props.height ? props.height : '24px')};
  width: ${(props: RectangleGradientLoaderProps) => (props.width ? props.width : '100%')};
  background-color: blue;

  position: ${(props: RectangleGradientLoaderProps) =>
    props.position ? props.position : 'initial'};

  background: repeating-linear-gradient(
    to right,
    ${(props: RectangleGradientLoaderProps) =>
        props.colorOne ? props.colorOne : 'rgba(57, 161, 240, 0.1)'}
      13%,
    ${(props: RectangleGradientLoaderProps) =>
        props.colorTwo ? props.colorTwo : 'rgba(57, 161, 240, 0.3)'}
      25%,
    ${(props: RectangleGradientLoaderProps) =>
        props.colorThree ? props.colorThree : 'rgba(57, 161, 240, 0.1)'}
      33%
  );
  background-size: 1000%;
  background-position: 0 100%;
  animation: gradient
    ${(props: RectangleGradientLoaderProps) => (props.animationTime ? props.animationTime : '5s')}
    infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;

  @keyframes gradient {
    0% {
      background-position: 0 100%;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export default RectangleGradientLoader;
