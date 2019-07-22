import * as React from 'react';
import axios from 'axios';
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

import realms from '../../lib/realms';

interface CharacterPageProps {
  match: object;
}

// interface CharacterRequest {
//   characterName: string;
//   realmSlug: string;
// }

const { useState } = React;

// const characterEndpoints = [
//   'achievements',
//   'appearance',
//   'equipment',
//   'character-media',
//   // 'pvp-bracket/{pvpBracket}',
//   'pvp-summary',
//   'specializations',
//   'statistics',
//   'titles',
//   'mythic-keystone-profile',
//   // 'mythic-keystone-profile/season/{seasonId}',
// ];

const findRealmSlug = target => {
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
  console.log('what is the curent api url: ', process.env.REACT_APP_RAIDTEAM_API_URL);
  let apiLink =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/blizzard/character'
      : `${process.env.REACT_APP_RAIDTEAM_API_URL}/blizzard/character`;
  return axios.get(apiLink || '', { params });
};

const CharacterPage = (props: CharacterPageProps) => {
  const [characterData, setCarachterData] = useState<any | null>(null);
  const [characterName, setCharacterName] = useState('');
  const [realmName, setRealmName] = useState('');
  const { match } = props;

  const handleCharacterSearch = e => {
    e.preventDefault();
    let realmSlug = findRealmSlug(realmName);
    if (realmSlug !== null) {
      searchForCharacter(characterName, realmSlug).then(result => {
        setCarachterData(result.data);
        console.log('result from search for character: ', result.data);
      });
    } else {
      // console.log(`Couldn't find the realm for the target you searched for: `, realmName);
    }
  };

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
            <ItemLevel characterData={characterData} />
          </GridItem>
        )}
      </GridWrapper>
    </div>
  );
};

export default CharacterPage;
