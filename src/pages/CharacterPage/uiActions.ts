import uiTypes from './uiTypes';

// CHARACTER DATA
export const setCharacterDataFetching = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHING,
    payload: {
      flag,
    },
  });

export const setCharacterDataFetched = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHED,
    payload: {
      flag,
    },
  });

export const setCharacterDataFetchFailed = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED,
    payload: {
      flag,
    },
  });

export const setCharacterDataFetchFailedMessage = (dispatch: React.Dispatch<any>) => (
  message: string
) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED_MESSAGE,
    payload: {
      message,
    },
  });

// CHARACTER RANKINGS
export const setCharacterRankingsFetching = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHING,
    payload: {
      flag,
    },
  });

export const setCharacterRankingsFetched = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHED,
    payload: {
      flag,
    },
  });

export const setCharacterRankingsFetchFailed = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED,
    payload: {
      flag,
    },
  });

export const setCharacterRankingsFetchFailedMessage = (dispatch: React.Dispatch<any>) => (
  message: string
) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED_MESSAGE,
    payload: {
      message,
    },
  });
