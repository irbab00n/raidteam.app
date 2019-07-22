import React from 'react';
import './_CharacterPage.scss';

interface DisplayContainerProps {
  children?: any;
  id?: string;
  headerContent?: any;
}

const DisplayContainer = (props: DisplayContainerProps) => {
  const { children, id = '' } = props;
  return (
    <div className="cd_display-container" id={id}>
      {children}
    </div>
  );
};

export default DisplayContainer;
