import React from 'react';
import styled from 'styled-components';

interface ProgressBarProps {
  label?: any;
}

const ProgressBar = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  padding: 0px 10px;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: $ne-gray-2-dark;
  }

  &.common::-webkit-progress-value {
    background-color: #ffffff;
    opacity: 0.8;
  }

  &.uncommon::-webkit-progress-value {
    background-color: #1eff00;
    opacity: 0.8;
  }

  &.rare::-webkit-progress-value {
    background-color: #0070dd;
    opacity: 0.8;
  }

  &.epic::-webkit-progress-value {
    background-color: #a335ee;
    opacity: 0.8;
  }

  &.legendary::-webkit-progress-value {
    background-color: #ff8000;
    opacity: 0.8;
  }

  &::-webkit-progress-value {
    &::before {
      content: ${(props: ProgressBarProps) => (props.label ? props.label : '')};
      position: absolute;
      right: 0;
      top: -125%;
    }
  }
`;

export default ProgressBar;
