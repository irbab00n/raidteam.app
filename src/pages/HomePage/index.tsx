import * as React from 'react';

interface HomePageProps {
  match: object;
}

const HomePage = (props: HomePageProps) => {
  const { match } = props;

  console.log('match on Home Page: ', match);

  return <div id="home-page">Home Page</div>;
};

export default HomePage;
