import axios from 'axios';
import { createRequestParams } from './createRequestParams';

// Starts a request against the RaidTeam API to retireve character data from Blizzard
export const getCharacterDataFromBlizzard = (characterName: string, realmSlug: string) => {
  let params = createRequestParams(characterName, realmSlug);
  let apiLink =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/blizzard/character'
      : `${process.env.REACT_APP_RAIDTEAM_API_URL}/blizzard/character`;
  return axios.get(apiLink || '', { params });
};
