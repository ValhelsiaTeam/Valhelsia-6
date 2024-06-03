// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe additions for Mekanism's crafting methods.
 * 
 * @see crushing.js for crushing recipes.
 * 
 * @copyright Valhelsia Inc 2023-2024
 */

/**
 * Mekanism Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:mekanism/';
  
  /**
   * Adds a recipe to fill a Metallurgic Infuser with a given type of infusion material.
   * @param {string} type The infusion material to fill the infuser with (eg. 'mekanism:carbon').
   * @param {(string|Ingredient)} input The input ingredient to convert into the infusion material.
   * @param {number} amount The amount of the given type to add.
   */
  const infusionConversion = (type, input, amount) => {
    event.custom({
      type: 'mekanism:infusion_conversion',
      input: InputItem.of(input).toJson(),
      output: {
        infuse_type: type,
        amount: amount
      }
    }).id(`${ID_PREFIX}infusion_conversion/${type.replace(':','/')}_from_${InputItem.of(input).ingredient.first.id.replace(':', '_')}`);
  };

  infusionConversion('mekanism:carbon', '#forge:coal_coke', 40);
  infusionConversion('mekanism:carbon', '#forge:dusts/coal_coke', 40);

});