import * as React from 'react';
import './_NavBrand.scss';

interface NavBrandProps {
  link: string;
  title: string | JSX.Element;
}

const NavBrand = (props: NavBrandProps) => {
  const { link, title } = props;

  return (
    <a id="nav-brand" href={link}>
      {title}
    </a>
  );
};

export default NavBrand;
