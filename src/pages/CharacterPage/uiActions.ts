import uiTypes from './uiTypes';

// will have to find a way to pass in the dispatch

// CHARACTER DATA
export const setCharacterDataFetching = (dispatch: any) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHING,
    payload: {
      flag,
    },
  });

export const setCharacterDataFetched = (dispatch: any) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHED,
    payload: {
      flag,
    },
  });

export const setCharacterDataFetchFailed = (dispatch: any) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED,
    payload: {
      flag,
    },
  });

export const setCharacterDataFetchFailedMessage = (dispatch: any) => (message: string) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED_MESSAGE,
    payload: {
      message,
    },
  });

// CHARACTER RANKINGS
export const setCharacterRankingsFetching = (dispatch: any) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHING,
    payload: {
      flag,
    },
  });

export const setCharacterRankingsFetched = (dispatch: any) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHED,
    payload: {
      flag,
    },
  });

export const setCharacterRankingsFetchFailed = (dispatch: any) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED,
    payload: {
      flag,
    },
  });

export const setCharacterRankingsFetchFailedMessage = (dispatch: any) => (message: string) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED_MESSAGE,
    payload: {
      message,
    },
  });
