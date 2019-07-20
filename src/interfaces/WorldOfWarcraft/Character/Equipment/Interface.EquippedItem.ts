import { EquipmentDataKey } from './Interface.EquipmentKeys';

interface EquipmentAttribute {
  name: { [key: string]: string };
  type: string;
}

interface EquipmentValue {
  display_string: { [key: string]: string };
  type?: EquipmentAttribute;
  is_equip_bonus?: boolean;
  value: number;
}

interface EquipmentRangeValue {
  display_string: { [key: string]: string };
  max_value: number;
  min_value: number;
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
------------------------------------------------------------------------------------------------------------------
*/

interface AzeriteTooltip {
  cast_time: { [key: string]: string };
  cooldown?: { [key: string]: string };
  description: { [key: string]: string };
  spell: EquipmentDataKey;
}

interface AzeritePower {
  id: number;
  is_display_hidden?: boolean;
  spell_tooltip: AzeriteTooltip;
  tier: number;
}

interface AzeriteEssence {
  essence: EquipmentDataKey;
  main_spell_tooltip: AzeriteTooltip;
  media: EquipmentDataKey;
  passive_spell_tooltip: AzeriteTooltip;
  rank: number;
  slot: number;
}

interface AzeriteDetails {
  selected_powers?: AzeritePower[];
  selected_powers_string?: { [key: string]: string };
  level?: EquipmentValue;
  percentage_to_next_level?: number;
  selected_essences?: AzeriteEssence[];
}

/*
------------------------------------------------------------------------------------------------------------------
███████╗███╗   ██╗ ██████╗██╗  ██╗ █████╗ ███╗   ██╗████████╗███╗   ███╗███████╗███╗   ██╗████████╗███████╗
██╔════╝████╗  ██║██╔════╝██║  ██║██╔══██╗████╗  ██║╚══██╔══╝████╗ ████║██╔════╝████╗  ██║╚══██╔══╝██╔════╝
█████╗  ██╔██╗ ██║██║     ███████║███████║██╔██╗ ██║   ██║   ██╔████╔██║█████╗  ██╔██╗ ██║   ██║   ███████╗
██╔══╝  ██║╚██╗██║██║     ██╔══██║██╔══██║██║╚██╗██║   ██║   ██║╚██╔╝██║██╔══╝  ██║╚██╗██║   ██║   ╚════██║
███████╗██║ ╚████║╚██████╗██║  ██║██║  ██║██║ ╚████║   ██║   ██║ ╚═╝ ██║███████╗██║ ╚████║   ██║   ███████║
╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝     ╚═╝╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚══════╝
------------------------------------------------------------------------------------------------------------------
*/

interface EnchantmentSlot {
  id: number;
  type: string;
}

interface EquipmentEnchantment {
  display_string: { [key: string]: string };
  enchantment_id: number;
  enchantment_slot?: EnchantmentSlot;
  source_item: EquipmentDataKey;
}

/*
------------------------------------------------------------------------------------------------------------------
                            ███████╗ ██████╗  ██████╗██╗  ██╗███████╗████████╗
                            ██╔════╝██╔═══██╗██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝
                            ███████╗██║   ██║██║     █████╔╝ █████╗     ██║   
                            ╚════██║██║   ██║██║     ██╔═██╗ ██╔══╝     ██║   
                            ███████║╚██████╔╝╚██████╗██║  ██╗███████╗   ██║   
                            ╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝  
------------------------------------------------------------------------------------------------------------------
*/

interface EquipmentSocket {
  display_string: { [key: string]: string };
  item: EquipmentDataKey;
  media: EquipmentDataKey;
  socket_type: EquipmentAttribute;
}

/*
------------------------------------------------------------------------------------------------------------------
                                  ███████╗██████╗ ███████╗██╗     ██╗     
                                  ██╔════╝██╔══██╗██╔════╝██║     ██║     
                                  ███████╗██████╔╝█████╗  ██║     ██║     
                                  ╚════██║██╔═══╝ ██╔══╝  ██║     ██║     
                                  ███████║██║     ███████╗███████╗███████╗
                                  ╚══════╝╚═╝     ╚══════╝╚══════╝╚══════╝
------------------------------------------------------------------------------------------------------------------
*/

interface EquipmentSpell {
  description: { [key: string]: string };
  spell: EquipmentDataKey;
}

/*
------------------------------------------------------------------------------------------------------------------
                   ████████╗██████╗  █████╗ ███╗   ██╗███████╗███╗   ███╗ ██████╗  ██████╗ 
                   ╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝████╗ ████║██╔═══██╗██╔════╝ 
                      ██║   ██████╔╝███████║██╔██╗ ██║███████╗██╔████╔██║██║   ██║██║  ███╗
                      ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║╚██╔╝██║██║   ██║██║   ██║
                      ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║ ╚═╝ ██║╚██████╔╝╚██████╔╝
                      ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝     ╚═╝ ╚═════╝  ╚═════╝ 
------------------------------------------------------------------------------------------------------------------
*/

interface EquipmentTransmog {
  display_string: { [key: string]: string };
  item: EquipmentDataKey;
  item_modified_appearance_id: number;
}

/*
------------------------------------------------------------------------------------------------------------------
                              ██╗    ██╗███████╗ █████╗ ██████╗  ██████╗ ███╗   ██╗
                              ██║    ██║██╔════╝██╔══██╗██╔══██╗██╔═══██╗████╗  ██║
                              ██║ █╗ ██║█████╗  ███████║██████╔╝██║   ██║██╔██╗ ██║
                              ██║███╗██║██╔══╝  ██╔══██║██╔═══╝ ██║   ██║██║╚██╗██║
                              ╚███╔███╔╝███████╗██║  ██║██║     ╚██████╔╝██║ ╚████║
                              ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝
------------------------------------------------------------------------------------------------------------------
*/

interface EquipmentWeapon {
  attack_speed: EquipmentValue;
  damage: EquipmentRangeValue;
  dps: EquipmentValue;
}

/*
------------------------------------------------------------------------------------------------------------------
| -------------------------------------------------------------------------------------------------------------- |
| | .*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.* | |
| | ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAIN EXPORT ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ | |
| | *.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*.+.*. | |
| -------------------------------------------------------------------------------------------------------------- |
------------------------------------------------------------------------------------------------------------------
*/

export interface EquippedItem {
  armor?: EquipmentValue;
  azerite_details: AzeriteDetails;
  binding: EquipmentValue;
  bonus_list: number[];
  context: number;
  durability: EquipmentValue;
  enchantments: EquipmentEnchantment[];
  inventory_type: EquipmentAttribute;
  item: EquipmentDataKey;
  item_class: EquipmentDataKey;
  item_subclass: EquipmentDataKey;
  level: EquipmentValue;
  media: EquipmentDataKey;
  modified_appearance_id?: number;
  name: { [key: string]: string };
  name_description: { [key: string]: string };
  quality: EquipmentAttribute;
  quantity: number;
  requirements: { [key: string]: EquipmentAttribute | EquipmentValue };
  sell_price?: EquipmentMultipleValues;
  slot: EquipmentAttribute;
  sockets?: EquipmentSocket[];
  spells?: EquipmentSpell[];
  stats: EquipmentValue[];
  transmog?: EquipmentTransmog;
  unique_equippied?: { [key: string]: string };
  weapon?: EquipmentWeapon;
}
