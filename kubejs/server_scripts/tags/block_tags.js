// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file Block Tag Additions for Valhelsia 6.
 * 
 * These tags differ from item tags in that they impact the block form only,
 * and therefore mainly have in-world effects. 
 * 
 * @see block_tags_remove.js
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Block Tag Event Handler
 */
ServerEvents.tags('block', event => {
  // Missing Quark Revertable Chests
  event.add('quark:revertable_chests', [
    'ars_nouveau:archwood_chest'
  ]);
});