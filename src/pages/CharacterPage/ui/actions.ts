import uiTypes from './types';

// CHARACTER DATA
const setCharacterDataFetching = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHING,
    payload: {
      flag,
    },
  });

const setCharacterDataFetched = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCHED,
    payload: {
      flag,
    },
  });

const setCharacterDataFetchFailed = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED,
    payload: {
      flag,
    },
  });

const setCharacterDataFetchFailedMessage = (dispatch: React.Dispatch<any>) => (message: string) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_DATA_FETCH_FAILED_MESSAGE,
    payload: {
      message,
    },
  });

// CHARACTER RANKINGS
const setCharacterRankingsFetching = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHING,
    payload: {
      flag,
    },
  });

const setCharacterRankingsFetched = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCHED,
    payload: {
      flag,
    },
  });

const setCharacterRankingsFetchFailed = (dispatch: React.Dispatch<any>) => (flag: boolean) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED,
    payload: {
      flag,
    },
  });

const setCharacterRankingsFetchFailedMessage = (dispatch: React.Dispatch<any>) => (
  message: string
) =>
  dispatch({
    type: uiTypes.SET_CHARACTER_PAGE_CHARACTER_RANKINGS_FETCH_FAILED_MESSAGE,
    payload: {
      message,
    },
  });

const actions = {
  setCharacterDataFetching,
  setCharacterDataFetched,
  setCharacterDataFetchFailed,
  setCharacterDataFetchFailedMessage,
  setCharacterRankingsFetching,
  setCharacterRankingsFetched,
  setCharacterRankingsFetchFailed,
  setCharacterRankingsFetchFailedMessage,
};

export default actions;
