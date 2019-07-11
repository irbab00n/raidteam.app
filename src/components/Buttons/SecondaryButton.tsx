import styled from 'styled-components';

interface SecondaryButtonProps {
  width: string;
  height: string;
  borderColor: string;
  borderRadius: string;
  borderSize: string;
  borderStyle: string;
  backgroundColor: string;
  clickBackgroundColor: string;
  hoverBackgroundColor: string;
  fontColor: string;
  fontSize: string;
  xPadding: string;
  yPadding: string;
}

// border: 1px solid #c77e19;

const SecondaryButton = styled.button`
  transition: 0.2s;
  cursor: pointer;
  height: ${(props: SecondaryButtonProps) =>
    props.height ? props.height : '40px'};
  min-width: ${(props: SecondaryButtonProps) =>
    props.width ? props.height : '100px'};

  background-color: ${(props: SecondaryButtonProps) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};

  color: ${(props: SecondaryButtonProps) =>
    props.fontColor ? props.fontColor : '#f8b700'};
  font-size: ${(props: SecondaryButtonProps) =>
    props.fontSize ? props.fontSize : '16px'};

  border-size: ${(props: SecondaryButtonProps) =>
    props.borderSize ? props.borderSize : '2px'};
  border-radius: ${(props: SecondaryButtonProps) =>
    props.borderRadius ? props.borderRadius : '4px'};
  border-style: ${(props: SecondaryButtonProps) =>
    props.borderStyle ? props.borderStyle : 'solid'};
  border-color: ${(props: SecondaryButtonProps) =>
    props.borderColor ? props.borderColor : '#c77e19'};

  padding-left: ${(props: SecondaryButtonProps) =>
    props.xPadding ? props.xPadding : '10px'};
  padding-right: ${(props: SecondaryButtonProps) =>
    props.xPadding ? props.xPadding : '10px'};
  padding-bottom: ${(props: SecondaryButtonProps) =>
    props.yPadding ? props.yPadding : '0px'};
  padding-top: ${(props: SecondaryButtonProps) =>
    props.yPadding ? props.yPadding : '0px'};

  &:hover {
    background-color: ${(props: SecondaryButtonProps) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : '#b06601'};
  }

  &:active {
    background-color: ${(props: SecondaryButtonProps) =>
      props.clickBackgroundColor ? props.clickBackgroundColor : '#8a5000'};
    color: #ffd36b;
    outline: 0;
  }

  &:focus {
    outline-width: 0;
  }
`;

export default SecondaryButton;
