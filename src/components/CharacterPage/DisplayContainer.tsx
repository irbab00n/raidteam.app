import React from 'react';
import './_CharacterPage.scss';

interface DisplayContainerProps {
  children?: any;
  headerContent?: any;
}

const DisplayContainer = (props: DisplayContainerProps) => {
  const { children } = props;
  return <div className="cd_display-container">{children}</div>;
};

export default DisplayContainer;
