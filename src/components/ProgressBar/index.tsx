import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  backgroundColor?: string;
  className?: string;
  children?: any;
  borderColor?: string;
  borderStyle?: string;
  borderWidth?: string;
  height?: string;
  margin?: string;
  percentage?: string;
}

// wrapper
const ProgressBarWrapper = styled.div`
  background-color: ${(props: ProgressBarProps) =>
    props.backgroundColor ? props.backgroundColor : '#72b645'};
  background-size: ${(props: ProgressBarProps) =>
    props.percentage ? props.percentage : '0%'} 100%;
  background-repeat: no-repeat;

  border-color: ${(props: ProgressBarProps) => (props.borderColor ? props.borderColor : '#a2a5ac')}
  border-style: ${(props: ProgressBarProps) => (props.borderStyle ? props.borderStyle : 'solid')}
  border-width: ${(props: ProgressBarProps) => (props.borderWidth ? props.borderWidth : '1px')}

  height: ${(props: ProgressBarProps) => (props.height ? props.height : '20px')};

  margin: ${(props: ProgressBarProps) => (props.margin ? props.margin : '0px')};

  width: 100%;
`;

const ProgressBar = (props: ProgressBarProps) => (
  <ProgressBarWrapper {...props}>{props.children}</ProgressBarWrapper>
);

export default ProgressBar;
