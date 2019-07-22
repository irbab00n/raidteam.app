import React from 'react';
import './_CharacterPage.scss';

interface DisplayHeaderProps {
  children?: any;
}

const DisplayHeader = (props: DisplayHeaderProps) => {
  const { children } = props;
  return <div className="cd_display-header">{children}</div>;
};

export default DisplayHeader;
