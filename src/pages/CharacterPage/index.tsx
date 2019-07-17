import * as React from 'react';
import axios from 'axios';
import './_CharacterPage.scss';

import { CharacterHeader } from '../../components/CharacterPage';
import { Text } from '../../components/Inputs';
import { PrimaryButton, SecondaryButton } from '../../components/Buttons';

import realms from '../../lib/realms';

interface CharacterPageProps {
  match: object;
}

const { useState } = React;

// achievements
// appearance
// equipment
// character-media
// pvp-bracket/{pvpBracket}
// pvp-summary
// specializations
// statistics
// titles
// mythic-keystone-profile
// mythic-keystone-profile/season/{seasonId}
const characterEndpoints = [
  'achievements',
  'appearance',
  'equipment',
  'character-media',
  // 'pvp-bracket/{pvpBracket}',
  'pvp-summary',
  'specializations',
  'statistics',
  'titles',
  'mythic-keystone-profile',
  // 'mythic-keystone-profile/season/{seasonId}',
];

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
  return axios.get('http://localhost:4000');
  // console.log('Running searchForCharacter method: ', characterName, realmSlug);
  // const region = 'us';
  // let endpointCopy = characterEndpoints.slice(0);
  // console.log(endpointCopy);
  // let baseURL = `https://${region}.api.blizzard.com/profile/wow/character/${realmSlug}/${characterName}`;
  // let urls = endpointCopy
  //   .map(endpoint => {
  //     console.log('endpoint to add: ', endpoint);
  //     let assembled = baseURL + '/' + endpoint + '?access_token=USSTU3lftLE4krEqAMEs4eIwNPhh92RlcP';
  //     console.log('assemlbled url: ', assembled);
  //     return assembled;
  //   })
  //   .concat([baseURL + '?access_token=USSTU3lftLE4krEqAMEs4eIwNPhh92RlcP']);
  // let promises = urls.map(url => {
  //   // let headers = {
  //   //   headers: {
  //   //     Authorization: 'Bearer USSTU3lftLE4krEqAMEs4eIwNPhh92RlcP',
  //   //   },
  //   // };
  //   return axios.get(url);
  // });
  // console.log('Launching requests...');
  // Promise.all(promises)
  //   .then(results => {
  //     console.log('results of all API requests: ', results);
  //   })
  //   .catch(errors => {
  //     console.log('errors have occurred: ', errors);
  //   });
  // https://{region}.api.blizzard.com/profile/wow/character/{realmSlug}/{characterName}/statistics
};

const CharacterPage = (props: CharacterPageProps) => {
  const [characterName, setCharacterName] = useState('');
  const [realmName, setRealmName] = useState('');
  const { match } = props;

  // console.log('match on Character Page: ', match);
  // console.log('current character name: ', characterName);
  // console.log('current realm name: ', realmName);

  // text input to filter a list of realms by the term
  // on select change the realmName slug

  return (
    <div id="character-page">
      <CharacterHeader
        left={<span className="cp_header-text">Your Character</span>}
        right={
          <form
            className="cp_character-search"
            onSubmit={e => {
              e.preventDefault();
              let realmSlug = findRealmSlug(realmName);
              if (realmSlug !== null) {
                searchForCharacter(characterName, realmSlug).then(result => {
                  console.log('result from search for character: ', result);
                });
              } else {
                console.log(`Couldn't find the realm for the target you searched for: `, realmName);
              }
            }}
          >
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
    </div>
  );
};

export default CharacterPage;
