import realms from '../lib/realms';

// TODOS:  Make this a configurable variable exposed to the front end
const region = 'en-US';

export const findRealmSlug = (target: string) => {
  const extractedRealms = realms[region];
  for (let i = 0; i < extractedRealms.length; i++) {
    if (extractedRealms[i].name === target) {
      return extractedRealms[i].slug;
    }
  }
  return null;
};
