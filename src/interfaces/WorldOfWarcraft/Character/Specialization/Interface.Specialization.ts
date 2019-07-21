interface SpecializationLink {
  href: string;
}

interface SpecializationAttribute {
  id: number;
  key: SpecializationLink;
  name: { [key: string]: string };
}

interface SpecializationRealm extends SpecializationAttribute {
  slug: string;
}

interface SpecializationCharacter extends SpecializationAttribute {
  realm: SpecializationRealm;
}

interface SpecializationSpellTooltip {
  cast_time: { [key: string]: string };
  description: { [key: string]: string };
  range?: { [key: string]: string };
  spell: SpecializationAttribute;
}

interface Talent {
  spell_tooltip: SpecializationSpellTooltip;
  talent: SpecializationAttribute;
}

interface PVPTalent {
  selected: Talent;
  slot_number: number;
  talents: Talent[];
}

interface Spec {
  pvp_talent_slots: PVPTalent[];
  specialization: SpecializationAttribute;
  talents: Talent[];
}

export interface Specialization {
  active_specialization: SpecializationAttribute;
  character: SpecializationCharacter;
  specialization: Spec;
  _links: { [key: string]: SpecializationLink; self: SpecializationLink };
}
