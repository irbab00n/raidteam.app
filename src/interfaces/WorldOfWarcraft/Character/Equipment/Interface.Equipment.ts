import { EquipmentCharacterKey } from './Interface.EquipmentKeys';
import { EquippedItem } from './Interface.EquippedItem';

export interface Equipment {
  character: EquipmentCharacterKey;
  equipped_items: EquippedItem[];
  _links: { [key: string]: any; self: { [key: string]: string } };
}
