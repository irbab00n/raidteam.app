import dataTypes from './types';

// CHARACTER DATA
const setCharacterDataInStore = (dispatch: React.Dispatch<any>) => (
  data: { [key: string]: any } | null
) =>
  dispatch({
    type: dataTypes.SET_CHARACTER_DATA_IN_STORE,
    payload: {
      data,
    },
  });

// CHARACTE RRANKINGS
const setCharacterRankingsInStore = (dispatch: React.Dispatch<any>) => (rankings: {
  [key: string]: any | null;
}) =>
  dispatch({
    type: dataTypes.SET_CHARACTER_RANKINGS_IN_STORE,
    payload: {
      rankings,
    },
  });

const actions = {
  setCharacterDataInStore,
  setCharacterRankingsInStore,
};

export default actions;
