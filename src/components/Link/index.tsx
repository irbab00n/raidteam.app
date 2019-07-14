import * as React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import './_Link.scss';

interface LinkProps {
  children: any;
  className: string;
  href: string;
  useReactRouter: boolean;
}

const { Link: RRLink } = ReactRouterDOM;

const Link = (props: LinkProps) => {
  const { children, className, href, useReactRouter } = props;
  return useReactRouter ? (
    <RRLink className={`app-link ${className}`} to={href}>
      {children}
    </RRLink>
  ) : (
    <a className={`app-link ${className}`} href={href}>
      {children}
    </a>
  );
};

export default Link;
