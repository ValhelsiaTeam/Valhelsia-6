// priority: 5
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file Fixes for issues with certain mods.
 * 
 * @copyright Valhelsia Inc 2025
 */

/**
 * Prevents breaking Clibano Furnace from crashing the game:
 */
BlockEvents.broken('forbidden_arcanus:clibano_center', event => {
  event.block.set('minecraft:air');
  event.cancel();
});

BlockEvents.broken('forbidden_arcanus:clibano_corner', event => {
  event.block.set('minecraft:air');
  event.cancel();
});

BlockEvents.broken('forbidden_arcanus:clibano_side_vertical', event => {
  event.block.set('minecraft:air');
  event.cancel();
});

BlockEvents.broken('forbidden_arcanus:clibano_side_horizontal', event => {
  event.block.set('minecraft:air');
  event.cancel();
});