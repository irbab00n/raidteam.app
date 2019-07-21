interface ProfileLink {
  href: string;
}

interface ProfileAttribute {
  id: number;
  key: ProfileLink;
  name: { [key: string]: string };
}

interface ProfileRealm extends ProfileAttribute {
  slug: string;
}

interface ProfileGuild extends ProfileAttribute {
  realm: ProfileRealm;
}

interface ProfileValue {
  name: { [key: string]: string };
  type: string;
}

export interface Profile {
  achievement_points: number;
  achievements: ProfileLink;
  active_spec: ProfileAttribute;
  appearance: ProfileLink;
  average_item_level: number;
  character_class: ProfileAttribute;
  collections: ProfileLink;
  equipment: ProfileLink;
  equipped_item_level: number;
  experience: number;
  faction: ProfileValue;
  gender: ProfileValue;
  guild: ProfileGuild;
  id: number;
  last_login_timestamp: number;
  level: number;
  media: ProfileLink;
  mythic_keystone_profile: ProfileLink;
  name: string;
  pvp_summary: ProfileLink;
  race: ProfileAttribute;
  raid_progression: ProfileLink;
  realm: ProfileRealm;
  specializations: ProfileLInk;
  statistics: ProfileLInk;
  titles: ProfileLInk;
  _links: { [key: string]: ProfileLink; self: ProfileLink };
}
