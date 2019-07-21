import React from 'react';
import './_Grid.scss';

interface GridItemProps {
  centered?: boolean;
  children?: any;
  className?: string;
  size: string;
}

const GridItem = (props: GridItemProps) => {
  const { centered = false, children, className = '', size = 'full' } = props;
  return (
    <div className={`grid-item ${size} ${centered ? 'centered' : ''} ${className}`}>{children}</div>
  );
};

export default GridItem;
