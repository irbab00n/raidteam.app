import React, { useEffect, useState, useReducer } from 'react';
import queryString from 'query-string';
import { appHistory } from '../../App';
import './_CharacterPage.scss';

// REDUCERS
import { mapDispatchToActions } from '../../utils/mapDispatchToActions';
import * as ui from './ui';
import * as data from './data';

import { CharacterHeader } from '../../components/CharacterPage';
import { Text } from '../../components/Inputs';
import { PrimaryButton } from '../../components/Buttons';
import { GridWrapper } from '../../components/Grid';

// RENDERERS
import {
  renderCharacterDataFetching,
  renderCharacterDisplay,
  renderCharacterFetchFailed,
  renderCharacterILvlAndProgression,
  renderCharacterRankings,
  renderInitialView,
} from './renderers';

// FUNCTIONS
import { getCharacterDataFromBlizzard } from './getCharacterDataFromBlizzard';
import { getRankingsForCharacter } from './getRankingsForCharacter';
import { findRealmSlug } from '../../utils/findRealmSlug';

interface CharacterPageProps {
  match: { [key: string]: any };
}

const CharacterPage = (props: CharacterPageProps) => {
  // INITIALIZE DATA STATE
  const [dataState, dataDispatch] = useReducer(data.reducer, data.initialState());
  const dataDispatchAction = mapDispatchToActions(dataDispatch, data.actions);
  // INITIALIZE UI STATE
  const [uiState, uiDispatch] = useReducer(ui.reducer, ui.initialState());
  const uiDispatchAction = mapDispatchToActions(uiDispatch, ui.actions);

  // Input Form state storage
  const [characterName, setCharacterName] = useState<any>('');
  const [realmName, setRealmName] = useState<any>('');

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
          dataDispatchAction.setCharacterDataInStore(result.data);
          uiDispatchAction.setCharacterDataFetched(true);
        })
        .catch(error => {
          console.error(error);
          dataDispatchAction.setCharacterDataInStore(null);
          uiDispatchAction.setCharacterDataFetchFailed(true);
          uiDispatchAction.setCharacterDataFetchFailedMessage(
            `Something went wrong fetching character data.  Please try again...`
          );
        });
      uiDispatchAction.setCharacterDataFetching(false);
    } else {
      dataDispatchAction.setCharacterDataInStore(null);
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
          dataDispatchAction.setCharacterRankingsInStore(result.data);
          uiDispatchAction.setCharacterRankingsFetched(true);
          console.log('results from the Warcraft Logs search: ', result);
        })
        .catch(error => {
          dataDispatchAction.setCharacterRankingsInStore(null);
          uiDispatchAction.setCharacterRankingsFetchFailed(true);
          uiDispatchAction.setCharacterRankingsFetchFailedMessage(
            `Something went wrong fetching warcraft logs character rankings.  Please try again...`
          );
          console.error(error);
        });
      uiDispatchAction.setCharacterRankingsFetching(false);
    } else {
      dataDispatchAction.setCharacterRankingsInStore(null);
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
        {dataState.characterData === null && !uiState.characterDataFetching && renderInitialView()}
        {uiState.characterDataFetching && renderCharacterDataFetching()}
        {uiState.characterDataFetchFailed &&
          renderCharacterFetchFailed(uiState.characterDataFetchFailedMessage)}
        {dataState.characterData !== null && renderCharacterDisplay(dataState.characterData)}
        {dataState.characterData !== null &&
          renderCharacterILvlAndProgression(dataState.characterData)}
        {dataState.characterData !== null && renderCharacterRankings(dataState.characterData)}
      </GridWrapper>
    </div>
  );
};

export default CharacterPage;
