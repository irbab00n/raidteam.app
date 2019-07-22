import React from 'react';
import './_CharacterPage.scss';

interface DisplayHeaderProps {
  children?: any;
  className?: string;
}

const DisplayHeader = (props: DisplayHeaderProps) => {
  const { children, className = '' } = props;
  return <div className={`cd_display-header ${className}`}>{children}</div>;
};

export default DisplayHeader;
