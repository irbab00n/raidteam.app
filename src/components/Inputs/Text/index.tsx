import * as React from 'react';
import styled from 'styled-components';

interface TextInputProps {
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  borderColor?: string;
  focusColor?: string;
  padding?: string;
  textColor?: string;
}

interface TextInputWrapperProps extends TextInputProps {
  width?: string;
  borderWidth?: string;
}

interface TextProps extends TextInputWrapperProps {
  leftElement?: any;
  onChange?: Function;
  placeholder?: string;
  ref?: string;
  rightElement?: any;
  value?: string;
}

const TextInput = styled.input.attrs({ type: 'text' })`
  height: ${(props: TextInputProps) => (props.height ? props.height : '100%')};
  width: 100%;

  box-sizing: border-box;

  background-color: ${(props: TextInputProps) =>
    props.backgroundColor ? props.backgroundColor : ''};
  color: ${(props: TextInputProps) => (props.textColor ? props.textColor : '')};

  font-size: 16px;

  padding: ${(props: TextInputProps) => (props.padding ? props.padding : '0px 6px 0 20px')};

  border-width: 0px;
  border-radius: ${(props: TextInputProps) => (props.borderRadius ? props.borderRadius : '0px')};

  transition: 0.1s;

  &:focus {
    box-shadow: inset 0px 0px 3px 2px
      ${(props: TextInputProps) => (props.focusColor ? props.focusColor : '#39a1f0')};
    outline: none;
  }
`;

const TextInputWrapper = styled.div`
  width: 100%;
  height: ${(props: TextInputWrapperProps) => (props.height ? props.height : '100%')};
  max-width: ${(props: TextInputWrapperProps) => (props.width ? props.width : '100%')};

  display: flex;
  align-items: center;

  border: ${(props: TextInputWrapperProps) => (props.borderWidth ? props.borderWidth : '1px')} solid;
  border-radius: ${(props: TextInputWrapperProps) =>
    props.borderRadius ? props.borderRadius : '0px'};

  overflow-x: hidden;

  &:focus {
    outline: none;
  }
`;

// Supplied with will set the width of the parent container.  The width of the textbox will respond based on the presence or non-pressence of additional elements to the left or right

const Text = (props: TextProps) => {
  const { leftElement, rightElement, placeholder, value } = props;

  const determineBorderRadius = (left, right, props) => {
    if (props.borderRadius) {
      if (left && right) {
        // top left, right, bottom right, left
        return '0px';
      } else if (left && !right) {
        return `0px ${props.borderRadius} ${props.borderRadius} 0px`;
      } else if (right && !left) {
        return `${props.borderRadius} 0px 0px ${props.borderRadius}`;
      }
    } else {
      return '0px';
    }
  };

  return (
    <TextInputWrapper {...props}>
      {/* If a left is supplied, then we don't need to pass then the left input border radius should be 0 */}
      {leftElement}
      <TextInput
        {...props}
        borderRadius={determineBorderRadius(leftElement, rightElement, props)}
        placeholder={placeholder}
        value={value}
      />
      {/* If a right is supplied, then we don't need to pass then the right input border radius should be 0 */}
      {rightElement}
    </TextInputWrapper>
  );
};

export default Text;
