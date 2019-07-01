import * as React from 'react';
import './_Navigation.scss';

interface NavigationProps {
  brand: any
  links: any
}

const Navigation = (props: NavigationProps) => {
  const {
    brand,
    links
  } = props;

  return (
    <nav>
      <div className="nav-container">
        {brand}
      </div>
      <div className="nav-container">
        {links}
      </div>
    </nav>
  );
};

export default Navigation;