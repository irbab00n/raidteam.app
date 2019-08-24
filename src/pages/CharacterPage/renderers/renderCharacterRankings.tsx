import React from 'react';
import WarcraftLogs from '../../../components/CharacterPage/WarcraftLogs';
import { GridItem } from '../../../components/Grid';

const renderCharacterRankings = characterData => (
  <GridItem size="full">
    <WarcraftLogs characterData={characterData} />
  </GridItem>
);

export default renderCharacterRankings;
