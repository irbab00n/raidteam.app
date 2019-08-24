import React from 'react';
import { GridItem } from '../../../components/Grid';
import CharacterDisplay from '../../../components/CharacterDisplay';

const renderCharacterDisplay = characterData => (
  <GridItem size="half">
    <CharacterDisplay characterData={characterData} />
  </GridItem>
);

export default renderCharacterDisplay;
