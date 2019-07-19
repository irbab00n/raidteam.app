import * as EquipmentKeys from './Interface.EquipmentKeys';

interface EquipmentAttribute {
  name: { [key: string]: string };
  type: string;
}

interface EquipmentValue {
  display_string: { [key: string]: string };
  type?: EquipmentAttribute;
  value: number;
}

interface EquipmentMultipleValues {
  display_strings: { [key: string]: { [key: string]: string } };
  value: number;
}

/*
------------------------------------------------------------------------------------------------------------------
 █████╗ ███████╗███████╗██████╗ ██╗████████╗███████╗    ██████╗ ███████╗████████╗ █████╗ ██╗██╗     ███████╗
██╔══██╗╚══███╔╝██╔════╝██╔══██╗██║╚══██╔══╝██╔════╝    ██╔══██╗██╔════╝╚══██╔══╝██╔══██╗██║██║     ██╔════╝
███████║  ███╔╝ █████╗  ██████╔╝██║   ██║   █████╗      ██║  ██║█████╗     ██║   ███████║██║██║     ███████╗
██╔══██║ ███╔╝  ██╔══╝  ██╔══██╗██║   ██║   ██╔══╝      ██║  ██║██╔══╝     ██║   ██╔══██║██║██║     ╚════██║
██║  ██║███████╗███████╗██║  ██║██║   ██║   ███████╗    ██████╔╝███████╗   ██║   ██║  ██║██║███████╗███████║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝   ╚═╝   ╚══════╝    ╚═════╝ ╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝╚══════╝╚══════╝
*/

interface EquipmentAzeritePowerTooltip {
  cast_time: { [key: string]: string };
  description: { [key: string]: string };
  spell: EquipmentKeys.EquipmentDataKey;
}

interface EquipmentAzeritePower {
  id: number;
  is_display_hidden?: boolean;
  spell_tooltip: EquipmentAzeritePowerTooltip;
  tier: number;
}

interface EquipmentAzeriteDetails {
  selected_powers: EquipmentAzeritePower[];
  selected_powers_string: { [key: string]: string };
}

/*
------------------------------------------------------------------------------------------------------------------
████████╗██████╗  █████╗ ███╗   ██╗███████╗███╗   ███╗ ██████╗  ██████╗ 
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝████╗ ████║██╔═══██╗██╔════╝ 
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██╔████╔██║██║   ██║██║  ███╗
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║╚██╔╝██║██║   ██║██║   ██║
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ 
*/

interface EquipmentTransmog {
  display_string: { [key: string]: string };
  item: EquipmentKeys.EquipmentDataKey;
  item_modified_appearance_id: number;
}

interface EquipmentItem {
  armor: EquipmentValue;
  azerite_details: EquipmentAzeriteDetails;
  binding: EquipmentValue;
  bonus_list: number[];
  context: number;
  durability: EquipmentValue;
  inventory_type: EquipmentAttribute;
  item: EquipmentKeys.EquipmentDataKey;
  item_class: EquipmentKeys.EquipmentDataKey;
  item_subclass: EquipmentKeys.EquipmentDataKey;
  level: EquipmentValue;
  media: EquipmentKeys.EquipmentDataKey;
  name: { [key: string]: string };
  name_description: { [key: string]: string };
  quality: EquipmentAttribute;
  quantity: number;
  requirements: { [key: string]: EquipmentAttribute | EquipmentValue };
  sell_price: EquipmentMultipleValues;
  slot: EquipmentAttribute;
  stats: EquipmentValue[];
  transmog?: EquipmentTransmog;
}

export interface EquipmentItems {
  equipped_items: EquipmentItem[];
}
