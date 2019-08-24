import axios from 'axios';
import { createRequestParams } from './createRequestParams';

// Starts a request against the RaidTeam API to retrieve character rankings from Warcraft Logs
export const getRankingsForCharacter = (characterName: string, realmSlug: string) => {
  let params = createRequestParams(characterName, realmSlug);
  let apiLink =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000/warcraftlogs/rankings/character'
      : `${process.env.REACT_APP_RAIDTEAM_API_URL}/warcraftlogs/rankings/character`;
  return axios.get(apiLink || '', { params });
};
