// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file Entity Type Tag additions for Valhelsia 6.
 * @copyright Valhelsia Inc 2023
 */

/**
 * Entity Type Tag Event Handler
 */
ServerEvents.tags('entity_type', event => {

  // Add Halloween Event Candy to Spoopy Mobs
  event.add('valhelsia_tweaks:drops_candy', [
    'minecraft:zombie',
    'minecraft:husk',
    'minecraft:skeleton',
    'minecraft:stray',
    'minecraft:witch',
    'minecraft:spider',
    'minecraft:phantom',
    'minecraft:cave_spider',
    'minecraft:wither_skeleton',
    'alexsmobs:underminer',
    'alexsmobs:murmur',
    //'quark:wraith',
    //'quark:forgotten',
    'goblintraders:goblin_trader',
    'goblintraders:vein_goblin_trader',
    //'savage_and_ravage:skeleton_villager',
    'twilightforest:skeleton_druid',
  ]);

});