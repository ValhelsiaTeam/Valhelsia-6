// priority: 120
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file Fluid Tag Changes for Valhelsia 6.
 * @copyright Valhelsia Inc 2024
 */

/**
 * Fluid Tag Event Handler.
 */
ServerEvents.tags('fluid', event => {
  event.remove('minecraft:water', [
    'ad_astra:fuel',
    'ad_astra:flowing_fuel',
    'ad_astra:oil',
    'ad_astra:flowing_oil',
    'ad_astra:cryo_fuel',
    'ad_astra:flowing_cryo_fuel',
    'createaddition:bioethanol',
    'createaddition:flowing_bioethanol',
    'createaddition:seed_oil',
    'createaddition:flowing_seed_oil',
    'enlightened_end:ooze_fluid',
    'enlightened_end:flowing_ooze_fluid',
  ]);

  event.add('forge:ethene', [
    //'immersivepetroleum:ethylene',
  ]);

  event.add('forge:ethylene', [
    "mekanism:ethene",
    "mekanism:flowing_ethene",
  ]);
});