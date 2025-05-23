// priority: 100
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Recipe removals for Valhelsia 6.
 * 
 * If intending to replace the recipe with a new one (be it differing input or output), 
 * it is preferable to use replace instead of remove, if practical.
 * @see replace.js
 * 
 * The Alloying, Crushing, Sawing, and Smelting scripts also remove relevant recipes in the same script
 * if immediately creating a new recipe that is intended to replace that recipe
 * (typically to add multi-mod support for a recipe).
 * @see alloying.js
 * @see crushing.js
 * @see sawing.js
 * @see smelting.js
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Recipe Removal Event Handler
 */
ServerEvents.recipes(event => {
  // Remove recipes by recipe ID.
  [
    // Ars Nouveau
    'ars_nouveau:archwood_to_chest', // Duplicate Recipe.

    // Ad Astra
    'ad_astra:compressing/iron_plate_from_compressing_iron_ingot',
    'ad_astra:compressing/steel_plate_from_compressing_steel_ingot',
    'ad_astra:hammering/iron_plate',
    'ad_astra:hammering/steel_plate',
    'ad_astra:recipes/iron_rod',
    'ad_astra:recipes/steel_block',
    'ad_astra:recipes/steel_ingot',
    'ad_astra:recipes/steel_nugget',
    'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
    'ad_astra:recipes/steel_ingot_from_nuggets',

    // The Aether
    'aether:skyroot_beehive', // EveryCompat includes a proper one.
    'aether:skyroot_barrel',
    'aether:skyroot_cartography_table',
    'aether:skyroot_chest',
    'aether:skyroot_crafting_table',
    'aether:skyroot_fletching_table',
    'aether:skyroot_jukebox',
    'aether:skyroot_grindstone',
    'aether:skyroot_iron_vanilla_shield',
    'aether:skyroot_loom',
    'aether:skyroot_noteblock',
    'aether:skyroot_piston',
    'aether:skyroot_smithing_table',
    'aether:skyroot_tripwire_hook',
    'aether:swet_lead',

    // Alex's Mobs
    'alexsmobs:bonemeal_from_fish_bones', // Aquaculture recipe now works with any fish bones.

    // Botania
    'botania:pure_daisy/sand', // Now made from Soulless Sand, which is made from Soul Sand.

    // Darker Depths
    //'darkerdepths:rope', // Replaced with Supplementaries Rope
    //'darkerdepths:silver_block', // Redundant
    //'darkerdepths:silver_ingot', // Redundant
    //'darkerdepths:raw_silver',

    // Decorative Blocks
    //'decorative_blocks:chain', // Replaced with a different recipe.
    //'decorative_blocks:dirt_from_rocky_dirt', // Removed entirely, no neat way to uncraft with the new recipe.
    //'decorative_blocks:rocky_dirt', // Replaced with a different recipe.

    // Ecologics
    //'ecologics:surface_moss',
    //'ecologics:moss_block',

    // Embers
    'embers:lead_ingot_to_block',
    'embers:lead_block_to_ingot',
    'embers:lead_nugget_to_ingot',
    'embers:lead_ingot_to_nugget',
    'embers:lead_raw_block_to_raw',
    'embers:lead_raw_to_raw_block',
    'embers:silver_block_to_ingot',
    'embers:silver_nugget_to_ingot',
    'embers:silver_ingot_to_nugget',
    'embers:silver_raw_block_to_raw',
    'embers:silver_raw_to_raw_block',

    // Farmer's Delight
    //'farmersdelight:cake_from_milk_bottle', // Redundant: Same as Neapolitan's recipe.

    // Forbidden and Arcanus
    'forbidden_arcanus:ender_pearl_fragment', // Re-added later.

    // Galosphere
    'galosphere:raw_silver',
    'galosphere:raw_silver_block',
    'galosphere:silver_ingot_from_nuggets',
    'galosphere:silver_ingot',
    'galosphere:silver_nugget',

    // Immersive Engineering
    'immersiveengineering:crafting/paper_from_sawdust', // Removed since Mekanism method made this redundant.
    'immersiveengineering:crusher/nether_wart', // Removed to avoid nether wart duping.
    'immersiveengineering:metalpress/blaze_rod', // Removed to avoid blaze powder duping.
    'immersiveengineering:smelting/ingot_uranium',
    'immersiveengineering:smelting/ingot_uranium2',
    'immersiveengineering:smelting/ingot_uranium_from_blasting',
    'immersiveengineering:smelting/ingot_uranium_from_blasting2',
    
    // Redundant IE Metal Recipes (either duplicate or replaced)
    'immersiveengineering:crafting/ingot_lead_to_storage_lead',
    'immersiveengineering:crafting/ingot_uranium_to_storage_uranium',
    'immersiveengineering:crafting/ingot_silver_to_storage_silver',
    'immersiveengineering:crafting/ingot_steel_to_storage_steel',

    'immersiveengineering:crafting/storage_lead_to_ingot_lead',
    'immersiveengineering:crafting/storage_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/storage_steel_to_ingot_steel',

    'immersiveengineering:crafting/nugget_copper_to_copper_ingot',
    'immersiveengineering:crafting/nugget_lead_to_ingot_lead',
    'immersiveengineering:crafting/nugget_uranium_to_ingot_uranium',
    'immersiveengineering:crafting/nugget_silver_to_ingot_silver',
    'immersiveengineering:crafting/nugget_steel_to_ingot_steel',

    'immersiveengineering:crafting/copper_ingot_to_nugget_copper',
    'immersiveengineering:crafting/ingot_lead_to_nugget_lead',
    'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
    'immersiveengineering:crafting/ingot_steel_to_nugget_steel',

    'immersiveengineering:crafting/raw_block_lead_to_raw_lead',
    'immersiveengineering:crafting/raw_block_uranium_to_raw_uranium',

    'immersiveengineering:crafting/raw_lead_to_raw_block_lead',
    'immersiveengineering:crafting/raw_uranium_to_raw_block_uranium',

    // Mekanism
    'mekanism:charcoal',
    'mekanism:storage_blocks/charcoal',
    'mekanism:processing/uranium/ingot/from_block',
    'mekanism:processing/uranium/ingot/from_ore_blasting',
    'mekanism:processing/uranium/ingot/from_ore_smelting',

    // Mekanism Tools
    'mekanismtools:steel/tools/sword',
    'mekanismtools:steel/tools/pickaxe',
    'mekanismtools:steel/tools/axe',
    'mekanismtools:steel/tools/shovel',
    'mekanismtools:steel/tools/hoe',
    'mekanismtools:steel/armor/helmet',
    'mekanismtools:steel/armor/chestplate',
    'mekanismtools:steel/armor/leggings',
    'mekanismtools:steel/armor/boots',
    'mekanismtools:lapis_lazuli/tools/sword',
    'mekanismtools:lapis_lazuli/tools/pickaxe',
    'mekanismtools:lapis_lazuli/tools/axe',
    'mekanismtools:lapis_lazuli/tools/shovel',
    'mekanismtools:lapis_lazuli/tools/hoe',
    'mekanismtools:lapis_lazuli/tools/paxel',
    'mekanismtools:lapis_lazuli/shield',
    'mekanismtools:lapis_lazuli/armor/helmet',
    'mekanismtools:lapis_lazuli/armor/chestplate', 
    'mekanismtools:lapis_lazuli/armor/leggings',
    'mekanismtools:lapis_lazuli/armor/boots',

    // MineColonies
    'minecolonies:chainmailhelmet', // Replaced with a different recipe.
    'minecolonies:chainmailchestplate', // Replaced with a different recipe.
    'minecolonies:chainmailleggings', // Replaced with a different recipe.
    'minecolonies:chainmailboots', // Replaced with a different recipe.

    // Minecraft
    'minecraft:cake', // Duplicate Recipe.
    'minecraft:ladder',
    'minecraft:furnace', // Quark provides an alternative.

    // Phantasmic
    'nourished_nether:smelt_soul_sand', // Conflicts with Scoria smelting.

    // PneumaticCraft: Repressurized
    'pneumaticcraft:copper_nugget', // Duplicate Recipe.
    'pneumaticcraft:speed_upgrade', // Broken by KubeJS, fixed with a replacement recipe.
    'pneumaticcraft:speed_upgrade_from_glycerol', // Broken by KubeJS, fixed with a replacement recipe.

    // Quark
    'quark:building/crafting/oak_bookshelf', // Duplicate recipe.
    'quark:building/crafting/oak_ladder', // Duplicate recipe.
    'quark:building/crafting/compressed/carrot_crate', // Replaced with Farmer's Delight version.
    'quark:building/crafting/compressed/potato_crate', // Replaced with Farmer's Delight version.
    'quark:building/crafting/compressed/beetroot_crate', // Replaced with Farmer's Delight version.
    'quark:building/crafting/furnaces/blackstone_blast_furnace', // Now using modified vanilla recipe.
    'quark:building/crafting/furnaces/deepslate_blast_furnace', // Now using modified vanilla recipe.

    // Waystones
    'waystones:warp_scroll', // Replaced with a different recipe.
    'waystones:warp_stone', // Replaced with a different recipe.
  ].forEach((recipeID) => event.remove({id: recipeID}));

  // Remove recipes by input.
  [
    // Note: Should generally use recipe IDs instead of input ingredient.

  ].forEach((ingredientID) => event.remove({input: ingredientID}));
  
  // Remove recipes by output.
  [
    // Note: Should generally use recipe IDs instead of output item.
    
  ].forEach((itemID) => event.remove({output: itemID}));

});