import styled from 'styled-components';

interface PrimaryButtonProps {
  width: string
  height: string
  borderColor: string
  borderRadius: string
  borderSize: string
  borderStyle: string
  backgroundColor: string
  clickBackgroundColor: string
  hoverBackgroundColor: string
  fontColor: string
  fontSize: string
}

const PrimaryButton = styled.button`
  transition: 0.2s;
  cursor: pointer;
  height: ${(props: PrimaryButtonProps) => props.height ? props.height : '40px'};
  width: ${(props: PrimaryButtonProps) => props.width ? props.height : '100px'};

  background-color: ${(props: PrimaryButtonProps) => props.backgroundColor ? props.backgroundColor : 'rgba(159, 22, 0, 0.6)'};

  color: ${(props: PrimaryButtonProps) => props.fontColor ? props.fontColor : '#f8b700'};
  font-size: ${(props: PrimaryButtonProps) => props.fontSize ? props.fontSize : '16px'};

  border-size: ${(props: PrimaryButtonProps) => props.borderSize ? props.borderSize : '2px'};
  border-radius: ${(props: PrimaryButtonProps) => props.borderRadius ? props.borderRadius : '4px'};
  border-style: ${(props: PrimaryButtonProps) => props.borderStyle ? props.borderStyle : 'solid'};
  border-color: ${(props: PrimaryButtonProps) => props.borderColor ? props.borderColor : 'rgb(234, 48, 18)'};

  &:hover {
    background-color: ${(props: PrimaryButtonProps) => props.hoverBackgroundColor ? props.hoverBackgroundColor : '#9f1600'};
  }

  &:active {
    background-color: ${(props: PrimaryButtonProps) => props.clickBackgroundColor ? props.clickBackgroundColor : '#660e00'};
  }

`;

export default PrimaryButton;