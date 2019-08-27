import { CharacterPageDataState } from '../interfaces';

const dataInitialState = (): CharacterPageDataState => ({
  characterData: null,
  characterRankings: null,
});

export default dataInitialState;
