export interface CharacterPageAction {
  type: string;
  payload: any;
  [key: string]: any;
}

export interface CharacterPageUIState {
  characterDataFetching: boolean;
  characterDataFetched: boolean;
  characterDataFetchFailed: boolean;
  characterDataFetchFailedMessage: string;
  characterRankingsFetching: boolean;
  characterRankingsFetched: boolean;
  characterRankingsFetchFailed: boolean;
  characterRankingsFetchFailedMessage: string;
}

export interface CharacterPageDataState {
  characterData: { [key: string]: any } | null;
  characterRankings: { [key: string]: any } | null;
}
