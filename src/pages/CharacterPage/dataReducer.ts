import { CharacterPageDataState, CharacterPageAction } from './interfaces';
import dataTypes from './dataTypes';

const dataReducer = (state: CharacterPageDataState, action: CharacterPageAction) => {
  let newState = { ...state };
  switch (action.type) {
    case dataTypes.SET_CHARACTER_DATA_IN_STORE:
      newState.characterData = action.payload.data;
      return newState;
    case dataTypes.SET_CHARACTER_RANKINGS_IN_STORE:
      newState.characterRankings = action.payload.rankings;
      return newState;
    default:
      return newState;
  }
};

export default dataReducer;
