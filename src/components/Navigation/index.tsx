import * as React from 'react';
import './_Navigation.scss';

interface NavigationProps {
  left: any;
  right: any;
}

const Navigation = (props: NavigationProps) => {
  const { left, right } = props;

  return (
    <nav>
      <div className="nav-container">{left}</div>
      <div className="nav-container">{right}</div>
    </nav>
  );
};

export default Navigation;
