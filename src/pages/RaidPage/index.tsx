import * as React from 'react';

interface RaidPageProps {
  match: object;
}

const RaidPage = (props: RaidPageProps) => {
  const { match } = props;

  console.log('match on Raid Page: ', match);

  return <div id="raid-page">Raid Page</div>;
};

export default RaidPage;
