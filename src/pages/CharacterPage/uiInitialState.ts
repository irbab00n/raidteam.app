import { CharacterPageUIState } from './interfaces';
const uiInitialState = (): CharacterPageUIState => ({
  characterDataFetching: false,
  characterDataFetched: false,
  characterDataFetchFailed: false,
  characterDataFetchFailedMessage: '',
  characterRankingsFetching: false,
  characterRankingsFetched: false,
  characterRankingsFetchFailed: false,
  characterRankingsFetchFailedMessage: '',
});

export default uiInitialState;
