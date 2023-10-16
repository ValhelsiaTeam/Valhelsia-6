// priority: 90
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe input / output replacements for Valhelsia 6.
 * 
 * Contains several convenience functions for frequently used replacement approaches.
 * The majority of the recipe changes in this script are to convert recipe inputs to
 * use tags instead of specific items, or adjusting the output where we have a prefered mod to use.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Recipe Replacement Event Handler
 */
ServerEvents.recipes(event => {

  // ----- Convenience Functions -----
  // Replace inputs and outputs across all recipes that use the given ingredient / item.
  const replaceInput = (from, to) => {event.replaceInput({}, from, to)};
  const replaceOutput = (from, to) => {event.replaceOutput({}, from, to)};

  // Replace inputs / outputs by recipe ID.
  const replaceInputID = (recipeID, from, to) => {event.replaceInput({id: recipeID}, from, to)};
  const replaceOutputID = (recipeID, from, to) => {event.replaceOutput({id: recipeID}, from, to)};

  // Replace inputs / outputs by recipe type.
  const replaceInputType = (recipeType, from, to) => {event.replaceInput({type: recipeType}, from, to)};
  const replaceOutputType = (recipeType, from, to) => {event.replaceOutput({type: recipeType}, from, to)};

  // ----- Fixes -----
  replaceOutputID('enlightened_end:regleam_iridescent_bismuth_sheets', 'enlightened_end:dazzling_bismuth_sheets', 'enlightened_end:iridescent_bismuth_sheets');
  replaceInputID('minecraft:beacon', 'enlightened_end:xenon_gas', '#forge:obsidian');
  replaceInputID('minecraft:ender_chest', 'enlightened_end:malachite', '#forge:obsidian');

  // ----- Compatibility -----
  // Use tags instead of items for all dye colours.
  COLORS.forEach((color) => replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`));

  // Ingot Compatibility
  replaceInput('ad_astra:calorite_ingot', '#forge:ingots/calorite');
  replaceInput('ad_astra:desh_ingot', '#forge:ingots/desh');
  replaceInput('ad_astra:steel_ingot', '#forge:ingots/steel');
  replaceInput('forbidden_arcanus:deorum_ingot', '#forge:ingots/deorum');
  replaceInput('forbidden_arcanus:obsidian_ingot', '#forge:ingots/obsidian');
  replaceInput('galosphere:silver_ingot', '#forge:ingots/silver');
  replaceInput('immersiveengineering:ingot_silver', '#forge:ingots/silver');

  // Plate Compatibility
  replaceInput('ad_astra:calorite_plate', '#forge:plates/calorite');
  replaceInput('ad_astra:desh_plate', '#forge:plates/desh');
  replaceInput('ad_astra:steel_plate', '#forge:plates/steel');

  // Nugget Compatibility
  replaceInput('galosphere:silver_nugget', '#forge:nuggets/silver');
  replaceInput('immersiveengineering:nugget_silver', '#forge:nuggets/silver');

  // Raw Material Compatibility
  replaceInput('galosphere:raw_silver', '#forge:raw_materials/silver');
  replaceInput('immersiveengineering:raw_silver', '#forge:raw_materials/silver');

  // Storage Block Compatibility
  replaceInput('galosphere:silver_block', '#forge:storage_blocks/silver');
  replaceInput('immersiveengineering:storage_silver', '#forge:storage_blocks/silver');
  replaceInput('immersiveengineering:raw_block_silver', '#forge:storage_blocks/raw_silver');
  replaceInput('immersiveengineering:storage_uranium', '#forge:storage_blocks/uranium');
  
  // Cheese Compatibility
  //replaceInput('ad_astra:cheese', '#valhelsia:cheese');
  //replaceInput('brewinandchewin:flaxen_cheese_wedge', '#valhelsia:cheese');

  // Electron Tube Compatibility
  replaceInput('create:electron_tube', '#valhelsia:electron_tubes');
  replaceInput('immersiveengineering:electron_tube', '#valhelsia:electron_tubes');

  // Flour Compatibility
  replaceInput('create:wheat_flour', '#forge:flour/wheat');
  replaceInput('pneumaticcraft:wheat_flour', '#forge:flour/wheat');

  // Rope Unification
  replaceInput('farmersdelight:rope', '#valhelsia:ropes');
  replaceInput('supplementaries:rope', '#valhelsia:ropes');

  // Rose Quartz Compatibility
  replaceInput('biomesoplenty:rose_quartz_shard', '#valhelsia:rose_quartz');
  //replaceInput('cave_enhancements:rose_quartz', '#valhelsia:rose_quartz');
  replaceInput('create:rose_quartz', '#valhelsia:rose_quartz');

  // Stick / Rod Compatibility
  event.replaceInput({output:'#minecraft:arrows'}, 'minecraft:stick', '#forge:rods/wooden');
  //replaceInputID([
    //'galosphere_delight:silver_kitchen_hammer',
    // TODO: Check which other recipes need sticks changed to use tags.
  //], 'minecraft:stick', '#forge:rods/wooden');

  replaceInputID('galosphere:silver_panel', 'galosphere:silver_block', '#forge:storage_blocks/silver');
  
  // ----- Output Unification -----

  // Note: Priority for metals is Create > Mekanism > Immersive Engineering > Darker Depths

  // Nuggets
  replaceOutput('galosphere:silver_nugget', 'immersiveengineering:nugget_silver');
  replaceOutput('immersiveengineering:nugget_copper', 'create:copper_nugget');
  replaceOutput('immersiveengineering:nugget_lead', 'mekanism:nugget_lead');
  replaceOutput('immersiveengineering:nugget_steel', 'mekanism:nugget_steel');
  replaceOutput('immersiveengineering:nugget_uranium', 'mekanism:nugget_uranium');

  // Ingots
  //replaceOutput('darkerdepths:silver_ingot', 'immersiveengineering:ingot_silver');
  replaceOutput('galosphere:silver_ingot', 'immersiveengineering:ingot_silver');
  replaceOutput('immersiveengineering:ingot_lead', 'mekanism:ingot_lead');
  replaceOutput('immersiveengineering:ingot_steel', 'mekanism:ingot_steel');
  replaceOutput('immersiveengineering:ingot_uranium', 'mekanism:ingot_uranium');

  // Raw Ore
  //replaceOutput('darkerdepths:raw_silver', 'immersiveengineering:raw_silver');
  replaceOutput('galosphere:raw_silver', 'immersiveengineering:raw_silver');
  replaceOutput('immersiveengineering:raw_lead', 'mekanism:raw_lead');
  replaceOutput('immersiveengineering:raw_uranium', 'mekanism:raw_uranium');

  // Storage Blocks
  //replaceOutput('darkerdepths:raw_silver_block', 'immersiveengineering:raw_block_silver');
  //replaceOutput('darkerdepths:silver_block', 'immersiveengineering:storage_silver');
  replaceOutput('galosphere:silver_block', 'immersiveengineering:block_silver');
  replaceOutput('immersiveengineering:storage_lead', 'mekanism:block_lead');
  replaceOutput('immersiveengineering:raw_block_lead', 'mekanism:block_raw_lead');
  replaceOutput('immersiveengineering:raw_block_uranium', 'mekanism:block_raw_uranium');
  replaceOutput('immersiveengineering:storage_steel', 'mekanism:block_steel');
  replaceOutput('immersiveengineering:storage_uranium', 'mekanism:block_uranium');
  //replaceOutput('mekanism:block_charcoal', 'quark:charcoal_block');

  // Misc
  replaceOutput('farmersdelight:rope', 'supplementaries:rope');

  // ----- Gameplay Changes / Fixes -----
  // No idea why this is replacing a bunch of things that *aren't* in the '#forge:chests' tag.
  //replaceInput('#forge:chests', '#forge:chests/wooden'); // Prevent using Personal Chests and similar in chest recipes.
  replaceInputID('create:crafting/kinetics/rope_pulley', '#minecraft:wool', '#valhelsia:ropes'); // Use rope instead of wool.
  //replaceInputID('tetra:modular_toolbelt', 'minecraft:string', '#valhelsia:ropes'); // Tetra Rope Toolbelt - now with rope!
  replaceInputID('waystones:warp_dust', 'minecraft:ender_pearl', '#forge:dusts/ender_pearl');
  replaceInputID('forbidden_arcanus:silver_dragon_scale', 'minecraft:iron_ingot', '#forge:ingots/silver'); // Silver Dragon Scales are now actually silver.
  replaceInputID('ars_nouveau:warp_scroll', 'minecraft:lapis_lazuli', '#forge:dusts/warp'); // Now even warpier!
});
