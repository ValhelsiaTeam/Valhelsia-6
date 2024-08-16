// priority: 0

//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file This fixes an issue in Create where some items disappear from JEI sometimes.
 * 
 * Script adapted from KubeJS Discord from user paikeday123, with changes by Vaelzan for Valhelsia.
 */

/**
 * JEI Add Items Event Handler
 */
JEIEvents.addItems(event => {
  /**
   * List of Item IDs (without the namespace) to keep hidden. Everything else
   * inside the create namespace will be made visible.
   */
  const KEEP_HIDDEN = [
    'chromatic_compound', 
    'refined_radiance', 
    'shadow_steel', 
    'refined_radiance_casing', 
    'shadow_steel_casing', 
    'chest_minecart_contraption', 
    'schematic', 
    'copper_backtank_placeable',
    'netherite_backtank_placeable', 
    'brass_encased_shaft', 
    'crushed_raw_quicksilver', 
    'crushed_raw_platinum', 
    'minecart_contraption', 
    'andesite_encased_shaft', 
    'unprocessed_obsidian_sheet',
    'incomplete_precision_mechanism', 
    'brass_encased_large_cogwheel', 
    'andesite_encased_cogwheel', 
    'andesite_encased_large_cogwheel', 
    'incomplete_track', 
    'brass_encased_cogwheel', 
    'furnace_minecart_contraption', 
    'elevator_contact', 
    'mysterious_cuckoo_clock', 
  ];

  const allCreateItems = Ingredient.of('@create').getItemIds().toArray();

  for (var item of allCreateItems) {
    if (!KEEP_HIDDEN.includes(item.split(':')[1])) {
      event.add(item);
    }
  }

});