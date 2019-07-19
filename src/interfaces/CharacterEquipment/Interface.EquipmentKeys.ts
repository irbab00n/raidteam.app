export interface EquipmentDataKey {
  id: number;
  key: {
    [key: string]: string;
    href: string;
  };
  name?: string | { [key: string]: string };
}

export interface EquipmentRealmKey extends EquipmentDataKey {
  slug: string;
}

export interface EquipmentCharacterKey extends EquipmentDataKey {
  realm: EquipmentRealmKey;
}
