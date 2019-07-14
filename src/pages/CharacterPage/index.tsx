import * as React from 'react';

import { CharacterHeader } from '../../components/CharacterPage';

interface CharacterPageProps {
  match: object;
}

const CharacterPage = (props: CharacterPageProps) => {
  const { match } = props;

  console.log('match on Character Page: ', match);

  return (
    <div id="character-page">
      <CharacterHeader />
      <section className="cp_container full-width"></section>
    </div>
  );
};

export default CharacterPage;
