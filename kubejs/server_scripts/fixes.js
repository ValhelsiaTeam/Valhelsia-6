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
 * Prevent breaking a Clibano Furnace from crashing the game.
 */
[
  'forbidden_arcanus:clibano_center',
  'forbidden_arcanus:clibano_corner',
  'forbidden_arcanus:clibano_side_vertical',
  'forbidden_arcanus:clibano_side_horizontal',
].forEach((block) => {
  BlockEvents.broken(block, event => {
    event.block.set('minecraft:air');
    event.cancel();
  });
});
