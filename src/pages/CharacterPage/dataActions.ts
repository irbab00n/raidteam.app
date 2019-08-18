import dataTypes from './dataTypes';

// CHARACTER DATA
export const setCharacterDataInStore = (dispatch: React.Dispatch<any>) => (
  data: { [key: string]: any } | null
) =>
  dispatch({
    type: dataTypes.SET_CHARACTER_DATA_IN_STORE,
    payload: {
      data,
    },
  });

// CHARACTE RRANKINGS
export const setCharacterRankingsInStore = (dispatch: React.Dispatch<any>) => (rankings: {
  [key: string]: any | null;
}) =>
  dispatch({
    type: dataTypes.SET_CHARACTER_RANKINGS_IN_STORE,
    payload: {
      rankings,
    },
  });
