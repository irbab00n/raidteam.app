import React from 'react';
import CurrentProgression from '../../../components/CharacterPage/CurrentProgression';
import ItemLevel from '../../../components/CharacterPage/ItemLevel';
import { GridItem } from '../../../components/Grid';

const renderCharacterILvlAndProgression = characterData => (
  <GridItem size="half" column>
    <ItemLevel characterData={characterData} />
    <CurrentProgression characterData={characterData} />
  </GridItem>
);

export default renderCharacterILvlAndProgression;
