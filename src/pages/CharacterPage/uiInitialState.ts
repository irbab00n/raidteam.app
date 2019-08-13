import { CharacterPageUIState } from './interfaces';
export const INITIAL_UI_STATE = (): CharacterPageUIState => ({
  characterDataFetching: false,
  characterDataFetched: false,
  characterDataFetchFailed: false,
  characterDataFetchFailedMessage: '',
  characterRankingsFetching: false,
  characterRankingsFetched: false,
  characterRankingsFetchFailed: false,
  characterRankingsFetchFailedMessage: '',
});
