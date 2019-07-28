import React, { useEffect, useState } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import './_CharacterPage.scss';

import { CharacterHeader } from '../../components/CharacterPage';
import { Text } from '../../components/Inputs';
import { PrimaryButton } from '../../components/Buttons';
import { GridWrapper, GridItem } from '../../components/Grid';
import CharacterDisplay from '../../components/CharacterDisplay';
// import DisplayContainer from '../../components/CharacterPage/DisplayContainer';
// import DisplayHeader from '../../components/CharacterPage/DisplayHeader';

import CurrentProgression from '../../components/CharacterPage/CurrentProgression';
import ItemLevel from '../../components/CharacterPage/ItemLevel';
import WarcraftLogs from '../../components/CharacterPage/WarcraftLogs';

import realms from '../../lib/realms';

interface CharacterPageProps {
  match: object;
  characterData: object | null;
  setCharacterData: Function;
}

const findRealmSlug = (target: string) => {
  const extractedRealms = realms['en-US'];
  for (let i = 0; i < extractedRealms.length; i++) {
    if (extractedRealms[i].name === target) {
      return extractedRealms[i].slug;
    }
  }
  return null;
};

const searchForCharacter = (characterName: string, realmSlug: string) => {
  // console.log('Running searchForCharacter method: ', characterName, realmSlug);
  let params = {
    characterName: characterName.toLowerCase(),
    realmSlug: realmSlug,
  };
  let apiLink =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/blizzard/character'
      : `${process.env.REACT_APP_RAIDTEAM_API_URL}/blizzard/character`;
  return axios.get(apiLink || '', { params });
};

const CharacterPage = (props: CharacterPageProps) => {
  const parsedSearch = queryString.parse(window.location.search);

  const _initialCharacterName = parsedSearch.character || '';
  const _initialRealmName = parsedSearch.realm || '';

  const [searchFailed, setSearchFailed] = useState<any>(false);
  const [searchFailedMessage, setSearchFailedMessage] = useState<any>('');
  const [searchingForCharacter, setSearchingForCharacter] = useState<any>(false);
  const [characterName, setCharacterName] = useState<any>(_initialCharacterName);
  const [realmName, setRealmName] = useState<any>(_initialRealmName);
  const { match, characterData, setCharacterData } = props;

  console.log('parsedSearch from query string: ', parsedSearch);
  console.log('match object on character page: ', match);

  const characterSearch = () => {
    console.log('running character search');
    setSearchFailed(false);
    setSearchingForCharacter(true);
    let realmSlug = findRealmSlug(realmName);
    if (realmSlug !== null) {
      searchForCharacter(characterName, realmSlug)
        .then(result => {
          setSearchingForCharacter(false);
          setCharacterData(result.data);
          console.log('result from search for character: ', result.data);
        })
        .catch(error => {
          setSearchingForCharacter(false);
          setSearchFailed(true);
          console.error(error);
          setSearchFailedMessage(
            `Something went wrong fetching character data.  Please try again...`
          );
        });
    } else {
      setSearchingForCharacter(false);
      setSearchFailed(true);
      setSearchFailedMessage(
        `You didn't enter in a valid Realm name.  Yes, it has to be Capitol specific... for now.`
      );
    }
  };

  const handleCharacterSearch = e => {
    e.preventDefault();
    characterSearch();
  };

  useEffect(() => {
    console.log('UseEffect running on characterPage');
    if (characterName !== '' && characterData === null) {
      characterSearch();
    }

    return () => {
      console.log('Cleaning up CharacterPage');
    };
  }, [characterData]);

  return (
    <div id="character-page">
      <CharacterHeader
        left={<span className="cp_header-text">Your Character</span>}
        right={
          <form className="cp_character-search" onSubmit={e => handleCharacterSearch(e)}>
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
        {characterData === null && !searchingForCharacter && (
          <div className="cp_no-character-prompt">
            <h1>Find a Specific Raider</h1>
          </div>
        )}
        {searchingForCharacter && (
          <div className="cp_no-character-prompt">
            <h1>Loading...</h1>
          </div>
        )}
        {searchFailed && (
          <div className="cp_no-character-prompt">
            <div>{searchFailedMessage}</div>
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
