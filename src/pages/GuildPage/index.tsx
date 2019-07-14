import * as React from 'react';

interface GuildPageProps {
  match: object;
}

const GuildPage = (props: GuildPageProps) => {
  const { match } = props;

  console.log('match on Guild Page: ', match);

  return <div id="guild-page">Guild Page</div>;
};

export default GuildPage;
