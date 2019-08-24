// Formats a characterName and realmSlug into an axios params object
export const createRequestParams = (characterName: string, realmSlug: string) => ({
  characterName: characterName.toLowerCase(),
  realmSlug,
});
