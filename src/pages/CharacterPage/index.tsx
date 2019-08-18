import React, { useEffect, useState, useReducer } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { appHistory } from '../../App';
import './_CharacterPage.scss';

// UI STATE
import { mapDispatchToActions } from '../../utils/mapDispatchToActions';
import * as uiActions from './uiActions';
import uiReducer from './uiReducer';
import { INITIAL_UI_STATE } from './uiInitialState';

import { CharacterHeader } from '../../components/CharacterPage';
import { Text } from '../../components/Inputs';
import { PrimaryButton } from '../../components/Buttons';
import { GridWrapper, GridItem } from '../../components/Grid';
import CharacterDisplay from '../../components/CharacterDisplay';
import CurrentProgression from '../../components/CharacterPage/CurrentProgression';
import ItemLevel from '../../components/CharacterPage/ItemLevel';
import WarcraftLogs from '../../components/CharacterPage/WarcraftLogs';

import { findRealmSlug } from '../../utils/findRealmSlug';

interface CharacterPageProps {
  match: object;
  characterData: object | null;
  setCharacterData: Function;
}

// Formats a characterName and realmSlug into an axios params object
const createParams = (characterName: string, realmSlug: string) => ({
  characterName: characterName.toLowerCase(),
  realmSlug,
});

// Starts a request against the RaidTeam API to retrieve character rankings from Warcraft Logs
const getRankingsForCharacter = (characterName: string, realmSlug: string) => {
  let params = createParams(characterName, realmSlug);
  let apiLink =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/warcraftlogs/rankings/character'
      : `${process.env.REACT_APP_RAIDTEAM_API_URL}/warcraftlogs/rankings/character`;
  return axios.get(apiLink || '', { params });
};

// Starts a request against the RaidTeam API to retireve character data from Blizzard
const getCharacterDataFromBlizzard = (characterName: string, realmSlug: string) => {
  let params = createParams(characterName, realmSlug);
  let apiLink =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/blizzard/character'
      : `${process.env.REACT_APP_RAIDTEAM_API_URL}/blizzard/character`;
  return axios.get(apiLink || '', { params });
};

const CharacterPage = (props: CharacterPageProps) => {
  // const [dataState, dataDispatch] = useReducer(dataReducer, INITIAL_DATA_STATE());
  const [uiState, uiDispatch] = useReducer(uiReducer, INITIAL_UI_STATE());
  const uiDispatchAction = mapDispatchToActions(uiDispatch, uiActions);

  // Input Form state storage
  const [characterName, setCharacterName] = useState<any>('');
  const [realmName, setRealmName] = useState<any>('');
  const { characterData, setCharacterData } = props;

  // Fetches character profile, equipment, and progression statistics
  const getCharacterData = (character: any, realm: any) => {
    uiDispatchAction.setCharacterDataFetched(false);
    uiDispatchAction.setCharacterDataFetchFailed(false);
    uiDispatchAction.setCharacterDataFetchFailedMessage('');
    uiDispatchAction.setCharacterDataFetching(true);
    let realmSlug = findRealmSlug(realm);
    if (realmSlug !== null) {
      getCharacterDataFromBlizzard(character, realmSlug)
        .then(result => {
          uiDispatchAction.setCharacterDataFetched(true);
          setCharacterData(result.data);
        })
        .catch(error => {
          uiDispatchAction.setCharacterDataFetchFailed(true);
          console.error(error);
          uiDispatchAction.setCharacterDataFetchFailedMessage(
            `Something went wrong fetching character data.  Please try again...`
          );
        });
      uiDispatchAction.setCharacterDataFetching(false);
    } else {
      uiDispatchAction.setCharacterDataFetching(false);
      uiDispatchAction.setCharacterDataFetchFailed(true);
      uiDispatchAction.setCharacterDataFetchFailedMessage(
        `You didn't enter in a valid Realm name.  Yes, it has to be Capitol specific... for now.`
      );
    }
  };

  // Fetches character rankings from Warcraft Logs
  const getCharacterRankings = (character: any, realm: any) => {
    uiDispatchAction.setCharacterRankingsFetched(false);
    uiDispatchAction.setCharacterRankingsFetchFailed(false);
    uiDispatchAction.setCharacterRankingsFetchFailedMessage('');
    uiDispatchAction.setCharacterRankingsFetching(true);
    let realmSlug = findRealmSlug(realm); // May refactoer this after we add in the select for the text input
    if (realmSlug !== null) {
      getRankingsForCharacter(character, realmSlug)
        .then(result => {
          uiDispatchAction.setCharacterRankingsFetched(true);
          // console.log('results from the Warcraft Logs search: ', result);
        })
        .catch(error => {
          uiDispatchAction.setCharacterRankingsFetchFailed(true);
          uiDispatchAction.setCharacterRankingsFetchFailedMessage(
            `Something went wrong fetching warcraft logs character rankings.  Please try again...`
          );
          console.error(error);
        });
      uiDispatchAction.setCharacterRankingsFetching(false);
    } else {
      uiDispatchAction.setCharacterRankingsFetchFailed(true);
      uiDispatchAction.setCharacterRankingsFetching(false);
      uiDispatchAction.setCharacterRankingsFetchFailedMessage(
        `You didn't enter in a valid Realm name.  Yes, it has to be Capitol specific... for now.`
      );
    }
  };

  // When the form is submitted, we prevent the page refreshing, while also pushing a new state to the applciation window
  const handleCharacterFormSubmit = e => {
    e.preventDefault();
    appHistory.push(
      `${window.location.pathname}?${queryString.stringify({
        character: characterName,
        realm: realmName,
      })}`
    );
  };

  // if the search changes, we want to register that in the state and launch the query
  useEffect(() => {
    let { character, realm } = queryString.parse(window.location.search);
    if (character) setCharacterName(character);
    if (realm) setRealmName(realm);
    if (character && realm) {
      getCharacterData(character, realm);
      getCharacterRankings(character, realm);
    }
  }, [window.location.search]);

  return (
    <div id="character-page">
      <CharacterHeader
        left={<span className="cp_header-text">Your Character</span>}
        right={
          <form className="cp_character-search" onSubmit={e => handleCharacterFormSubmit(e)}>
            <Text
              value={characterName}
              placeholder="Character"
              onChange={e => {
                setCharacterName(e.target.value);
              }}
              backgroundColor="#113149"
              borderWidth="0px"
              borderRadius="0px"
              height="40px"
              padding="0px 10px"
              textColor="#20f6f8"
              width="400px"
              // leftElement={<div style={{ margin: '0px 10px' }}>Character</div>}
            />
            <Text
              value={realmName}
              placeholder="Realm"
              onChange={e => {
                setRealmName(e.target.value);
              }}
              backgroundColor="#113149"
              borderWidth="0px"
              borderRadius="0px"
              height="40px"
              padding="0px 10px"
              textColor="#20f6f8"
              width="400px"
              // leftElement={<div style={{ margin: '0px 10px' }}>Realm</div>}
            />
            <PrimaryButton height="40px" borderSize="1px" borderRadius="0px" width="75px">
              <i className="fas fa-search"></i>
            </PrimaryButton>
          </form>
        }
      />
      <GridWrapper>
        {characterData === null && !uiState.characterDataFetching && (
          <div className="cp_no-character-prompt">
            <h1>Find a Specific Raider</h1>
          </div>
        )}
        {uiState.characterDataFetching && (
          <div className="cp_no-character-prompt">
            <h1>Loading...</h1>
          </div>
        )}
        {uiState.characterDataFetchFailed && (
          <div className="cp_no-character-prompt">
            <div>{uiState.characterDataFetchFailedMessage}</div>
          </div>
        )}
        {characterData !== null && (
          <GridItem size="half">
            <CharacterDisplay characterData={characterData} />
          </GridItem>
        )}
        {characterData !== null && (
          <GridItem size="half" column>
            <ItemLevel characterData={characterData} />
            <CurrentProgression characterData={characterData} />
          </GridItem>
        )}
        {characterData !== null && (
          <GridItem size="full">
            <WarcraftLogs characterData={characterData} />
          </GridItem>
        )}
      </GridWrapper>
    </div>
  );
};

export default CharacterPage;
