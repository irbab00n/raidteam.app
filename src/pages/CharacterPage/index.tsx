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
      <CharacterHeader left={'null'} right={'null'} />
    </div>
  );
};

export default CharacterPage;
