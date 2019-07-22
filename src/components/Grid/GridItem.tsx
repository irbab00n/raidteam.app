import React from 'react';
import './_Grid.scss';

interface GridItemProps {
  centered?: boolean;
  children?: any;
  className?: string;
  column?: boolean;
  size: string;
}

const GridItem = (props: GridItemProps) => {
  const { centered = false, children, className = '', column = false, size = 'full' } = props;
  return (
    <div
      className={`grid-item ${size} ${column ? 'column' : ''} ${
        centered ? 'centered' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default GridItem;
