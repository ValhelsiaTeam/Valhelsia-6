// priority: 110
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file Item Tag Additions for Valhelsia 6.
 * 
 * These are mostly for recipe input unification, but sometimes have other uses.
 * 
 * @see item_tags_remove.js
 * @copyright Valhelsia Inc 2023
 */

/**
 * Item Tag Event Handler
 */
ServerEvents.tags('item', event => {

  // ----- Valhelsia Tags -----
  event.add('valhelsia:ropes', [
    'farmersdelight:rope',
    'immersiveengineering:wirecoil_structure_rope',
    'supplementaries:rope',
  ]);

  event.add('valhelsia:bowls', [
    'minecraft:bowl',
    'ecologics:coconut_husk',
  ]);
  
  event.add('valhelsia:capacitors', [
    'createaddition:capacitor',
    'pneumaticcraft:capacitor',
  ]);

  event.add('valhelsia:cheese', [
    'ad_astra:cheese',
    //'brewinandchewin:flaxen_cheese_wedge',
  ]);

  event.add('valhelsia:electron_tubes', [
    'create:electron_tube',
    'immersiveengineering:electron_tube',
  ]);
  
  event.add('valhelsia:furnaces', [
    'minecraft:furnace',
    'nethersdelight:blackstone_furnace',
    'quark:deepslate_furnace',
    'quark:blackstone_furnace',
  ]);

  event.add('valhelsia:nuts', [
    // 'blue_skies:solnut',
    'ecologics:walnut',
    //'windswept:chestnuts',
  ]);
  
  event.add('valhelsia:raw_proteins', [
    '#forge:eggs',
    '#forge:raw_fishes',
    'minecraft:beef',
    'minecraft:brown_mushroom',
    'minecraft:chicken',
    'minecraft:mutton',
    'minecraft:porkchop',
    'minecraft:rabbit',
    'minecraft:red_mushroom',
    // 'abnormals_delight:duck_fillet',
    // 'abnormals_delight:venison_shanks',
    // 'alexsdelight:bison_mince',
    // 'alexsdelight:kangaroo_shank',
    // 'alexsdelight:loose_moose_rib',
    // 'alexsdelight:raw_bison',
    // 'alexsdelight:raw_bunfungus',
    // 'alexsdelight:raw_bunfungus_drumstick',
    // 'alexsdelight:raw_catfish_slice',
    'alexsmobs:blobfish',
    'alexsmobs:cosmic_cod',
    'alexsmobs:flying_fish',
    'alexsmobs:kangaroo_meat',
    'alexsmobs:lobster_tail',
    'alexsmobs:moose_ribs',
    'alexsmobs:raw_catfish',
    'aquamirae:spinefish',
    'autumnity:turkey',
    'autumnity:turkey_piece',
    // 'blue_skies:carabeef',
    // 'blue_skies:monitor_tail',
    // 'blue_skies:venison',
    'ecologics:crab_claw',
    'enlightened_end:raw_stalker',
    // 'environmental:duck',
    // 'environmental:venison',
    'farmersdelight:bacon',
    'farmersdelight:chicken_cuts',
    'farmersdelight:ham',
    'farmersdelight:minced_beef',
    'farmersdelight:mutton_chops',
    'forbidden_arcanus:tentacle',
    // 'neapolitan:adzuki_beans',
    'quark:crab_leg',
    'twilightforest:raw_meef',
    // 'twilightforest:raw_venison',
    // 'windswept:goat',
    // 'windswept:goat_shanks',
  ]);

  event.add('valhelsia:cooked_proteins', [
    '#forge:cooked_fishes',
    'minecraft:cooked_beef',
    'minecraft:cooked_chicken',
    'minecraft:cooked_mutton',
    'minecraft:cooked_porkchop',
    'minecraft:cooked_rabbit',
    //'abnormals_delight:cooked_duck_fillet',
    //'abnormals_delight:cooked_venison_shanks',
    // 'alexsdelight:bison_patty',
    // 'alexsdelight:cooked_bison',
    // 'alexsdelight:cooked_bunfungus',
    // 'alexsdelight:cooked_bunfungus_drumstick',
    // 'alexsdelight:cooked_catfish_slice',
    // 'alexsdelight:cooked_centipede_leg',
    // 'alexsdelight:cooked_kangaroo_shank',
    // 'alexsdelight:cooked_loose_moose_rib',
    'alexsmobs:boiled_emu_egg',
    'alexsmobs:cooked_catfish',
    'alexsmobs:cooked_kangaroo_meat',
    'alexsmobs:cooked_lobster_tail',
    'alexsmobs:cooked_moose_ribs',
    'aquamirae:cooked_spinefish',
    'autumnity:cooked_turkey',
    'autumnity:cooked_turkey_piece',
    // 'blue_skies:cooked_carabeef',
    // 'blue_skies:cooked_monitor_tail',
    // 'blue_skies:cooked_venison',
    'ecologics:crab_meat',
    'enlightened_end:cooked_stalker',
    //'environmental:cooked_duck',
    //'environmental:cooked_venison',
    'farmersdelight:beef_patty',
    'farmersdelight:cooked_bacon',
    'farmersdelight:cooked_chicken_cuts',
    'farmersdelight:cooked_mutton_chops',
    'farmersdelight:fried_egg',
    'farmersdelight:smoked_ham', // or steamed. ;)
    'forbidden_arcanus:cooked_tentacle',
    'incubation:fried_egg',
    //'neapolitan:roasted_adzuki_beans',
    'quark:cooked_crab_leg',
    'twilightforest:cooked_meef',
    'twilightforest:cooked_venison',
    //'windswept:cooked_goat',
    //'windswept:cooked_goat_shanks',
  ]);

  event.add('valhelsia:proteins', [
    '#valhelsia:raw_proteins',
    '#valhelsia:cooked_proteins',
    '#minecraft:fishes', // Because some fish aren't tagged with the Forge tags for fish.
  ]);

  event.add('valhelsia:ropes', [
    'farmersdelight:rope',
    'immersiveengineering:wirecoil_structure_rope',
    'supplementaries:rope',
  ]);

  event.add('valhelsia:rose_quartz', [
    'biomesoplenty:rose_quartz_chunk',
    //'cave_enhancements:rose_quartz',
    'create:rose_quartz',
  ]);

  event.add('forge:bones/wither', [
    'nourished_nether:wither_bone',
  ]);

  event.add('forge:bones/sculk', [
    'deeperdarker:sculk_bone',
  ]);

  event.add('forge:bones/fish', [
    'alexsmobs:fish_bones',
    'aquaculture:fish_bones',
  ]);

  // ----- Ores -----
  event.add('forge:ores', [
    //'darkerdepths:aridrock_silver_ore',
    //'darkerdepths:limestone_silver_ore',
    'alexscaves:radrock_uranium_ore',
  ]);
  
  event.add('forge:ores/uranium', [
    'alexscaves:radrock_uranium_ore',
  ]);

  event.add('forge:ores/silver', [
    //'darkerdepths:aridrock_silver_ore',
    //'darkerdepths:limestone_silver_ore',
  ]);

  // ----- Ingots -----
  event.add('forge:ingots', [
    //'moreminecarts:silica_steel',
  ]);

  event.add('forge:ingots/silica_steel', [
    //'moreminecarts:silica_steel',
  ]);

  // ----- Storage Blocks -----
  event.add('forge:storage_blocks', [
    //'moreminecarts:silica_steel_block',
  ]);

  event.add('forge:storage_blocks/silica_steel', [
    //'moreminecarts:silica_steel_block',
  ]);

  // ----- Dusts -----
  event.add('forge:dusts', [
    'botania:pixie_dust',
    'waystones:warp_dust',
  ]);

  event.add('forge:dusts/pixie', [
    'botania:pixie_dust',
  ]);

  event.add('forge:dusts/warp', [
    'waystones:warp_dust',
  ]);

  event.add('forge:flour/wheat', [
    'pneumaticcraft:wheat_flour',
  ]);

  // ----- Logs / Wood -----
  event.add('forge:stripped_logs', [
    'forbidden_arcanus:stripped_aurum_log',
    //'upgrade_aquatic:stripped_driftwood_log',
  ]);

  event.add('forge:stripped_wood', [
    'forbidden_arcanus:stripped_aurum_wood',
    //'upgrade_aquatic:stripped_driftwood',
  ]);

  event.add('minecraft:logs_that_burn', [
    'forbidden_arcanus:aurum_log',
    'forbidden_arcanus:stripped_aurum_log',
  ]);

   
  // ----- Sandstone -----
  event.add('forge:sandstone/colorless', [
    'quark:sandstone_bricks',
  ]);

  event.add('forge:sandstone/red', [
    'quark:red_sandstone_bricks',
  ]);

  event.add('forge:sandstone/arid', [
    //'atmospheric:arid_sandstone',
    //'atmospheric:smooth_arid_sandstone',
    //'atmospheric:cut_arid_sandstone',
    //'atmospheric:chiseled_arid_sandstone',
    //'atmospheric:arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/red_arid', [
    //'atmospheric:red_arid_sandstone',
    //'atmospheric:smooth_red_arid_sandstone',
    //'atmospheric:cut_red_arid_sandstone',
    //'atmospheric:chiseled_red_arid_sandstone',
    //'atmospheric:red_arid_sandstone_bricks',
  ]);

  event.add('forge:sandstone/orange', [
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:smooth_orange_sandstone',
    'biomesoplenty:cut_orange_sandstone',
    'biomesoplenty:chiseled_orange_sandstone',
  ]);

  event.add('forge:sandstone/white', [
    'biomesoplenty:white_sandstone',
    'biomesoplenty:smooth_white_sandstone',
    'biomesoplenty:cut_white_sandstone',
    'biomesoplenty:chiseled_white_sandstone',
  ]);

  event.add('forge:sandstone/black', [
    'biomesoplenty:black_sandstone',
    'biomesoplenty:smooth_black_sandstone',
    'biomesoplenty:cut_black_sandstone',
    'biomesoplenty:chiseled_black_sandstone',
  ]);

  event.add('forge:sandstone/soul', [
    'quark:soul_sandstone',
    'quark:soul_sandstone_bricks',
    'quark:smooth_soul_sandstone',
    'quark:cut_soul_sandstone',
    'quark:chiseled_soul_sandstone',
  ]);

  event.add('forge:sandstone/soulless', [
    'forbidden_arcanus:soulless_sandstone',
    'forbidden_arcanus:cut_soulless_sandstone',
    'forbidden_arcanus:polished_soulless_sandstone',
  ]);

  // Create Slice & Dice
  event.add('sliceanddice:allowed_tools', [
    //'galosphere_delight:silver_kitchen_hammer',
  ]);
});