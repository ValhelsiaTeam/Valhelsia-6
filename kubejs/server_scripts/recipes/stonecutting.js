// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Stonecutter recipe additions for Valhelsia 6.
 * Includes functions for frequently used recipe templates.
 * 
 * @copyright Valhelsia Inc 2022-2024
 */

/**
 * Stonecutting Recipe Event Handler
 */
ServerEvents.recipes(event => {
    const ID_PREFIX = 'valhelsia:stonecutting/';
  
    /**
     * Creates multiple stonecutting recipes to convert items between each other.
     * Typically used to convert between equivalent stones from different mods.
     * 
     * @example scConvert(['create:limestone', 'quark:limestone']);
     * 
     * @param {(string[]|Item[])} items An array of items (or item IDs), usually types of raw stone.
     */
    const scConvert = (items) => {
      if (!Array.isArray(items)) {
        console.error('scConvert requires an array as input.');
        return;
      }
  
      for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
          if (i != j) {
            event.stonecutting(items[i], items[j]).id(`${ID_PREFIX}conversion/${OutputItem.of(items[i]).item.id.replace(':', '_')}_from_${OutputItem.of(items[j]).item.id.replace(':', '_')}`);
          }
        }
      }
    };
  
    /**
     * Creates a stonecutter recipe with an automatically generated recipe ID.
     * 
     * @example cut('darkerdepths:stone_brick_pillar', 'minecraft:stone');
     * 
     * @param {(string|OutputItem)} output The output item.
     * @param {(string|InputItem)} input The input ingredient.
     */
    const cut = (output, input) => {
      event.stonecutting(output, input).id(`${ID_PREFIX}${OutputItem.of(output).item.id.replace(':', '/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
    }
  
    // Conversion between stone of the same type.
    scConvert(['alexscaves:limestone', 'create:limestone', 'quark:limestone']);
    //scConvert(['darkerdepths:shale', 'quark:shale']);
    scConvert(['ad_astra:sky_stone', 'ae2:sky_stone_block']);
  
    // PneumaticCraft
    cut('pneumaticcraft:compressed_brick_tile', 'pneumaticcraft:compressed_stone');
    cut('pneumaticcraft:compressed_brick_pillar', 'pneumaticcraft:compressed_stone');
    cut('2x pneumaticcraft:compressed_brick_slab', 'pneumaticcraft:compressed_stone');
    cut('pneumaticcraft:compressed_brick_stairs', 'pneumaticcraft:compressed_stone');
    cut('2x v_slab_compat:pneumaticcraft/compressed_brick_vertical_slab', 'pneumaticcraft:compressed_stone');
    cut('pneumaticcraft:compressed_brick_wall', 'pneumaticcraft:compressed_stone');
  
    // Tetra
    cut('2x tetra:forged_platform_slab', 'tetra:forged_platform');
  
    // Twilight Forest
    cut('twilightforest:nagastone_pillar', 'twilightforest:nagastone');
    cut('twilightforest:etched_nagastone', 'twilightforest:nagastone');
    cut('twilightforest:nagastone_head', 'twilightforest:nagastone');
  });
  