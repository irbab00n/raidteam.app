interface MediaLink {
  href: string;
}

interface MediaCharacterRealm {
  key: MediaLink;
  name: { [key: string]: string };
}

interface MediaCharacter {
  id: number;
  key: MediaLink;
  name: string;
  realm: MediaCharacterRealm;
}

export interface Media {
  avatar_url: string;
  bust_url: string;
  character: MediaCharacter;
  render_url: string;
  _links: { [key: string]: MediaLink; self: MediaLink };
}
