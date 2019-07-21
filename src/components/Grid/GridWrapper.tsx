import React from 'react';
import './_Grid.scss';

interface GridWrapperProps {
  children?: any;
  className?: string;
}

const GridWrapper = (props: GridWrapperProps) => {
  const { children, className = '' } = props;
  return <div className={`grid-wrapper ${className}`}>{children}</div>;
};

export default GridWrapper;
