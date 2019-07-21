interface MediaLink {
  href: string;
}

interface MediaCharacterRealm {
  key: MediaLink;
  name: { [key: string]: string };
}

interface MediaCharacter {
  id: number;
  key: { [key: string]: string; href: string };
  name: string;
  realm: MediaCharacterRealm;
}

interface Media {
  avatar_url: string;
  bust_url: string;
  character: MediaCharacter;
  render_url: string;
  _links: { [key: string]: MediaLink; self: MediaLink };
}
