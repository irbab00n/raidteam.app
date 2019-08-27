import { CharacterPageUIState, CharacterPageAction } from '../interfaces';
import uiTypes from './types';

const uiReducer = (state: CharacterPageUIState, action: CharacterPageAction) => {
  let newState = { ...state };
  switch (action.type) {
    // CHARACTER DATA
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHING:
      newState.characterDataFetching = action.payload.flag;
      return newState;
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHED:
      newState.characterDataFetched = action.payload.flag;
      return newState;
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED:
      newState.characterDataFetchFailed = action.payload.flag;
      return newState;
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED_MESSAGE:
      newState.characterDataFetchFailedMessage = action.payload.message;
      return newState;
    // CHARACTER RANKINGS
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHING:
      newState.characterRankingsFetching = action.payload.flag;
      return newState;
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHED:
      newState.characterRankingsFetched = action.payload.flag;
      return newState;
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED:
      newState.characterRankingsFetchFailed = action.payload.flag;
      return newState;
    case uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED_MESSAGE:
      newState.characterRankingsFetchFailedMessage = action.payload.message;
    default:
      return newState;
  }
};

export default uiReducer;
