// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Shaped recipe additions for Valhelsia 6.
 * 
 * Contains several convenience functions for frequently used shapes.
 * 
 * @see shapeless.js
 * 
 * @copyright Valhelsia Inc 2024
 */

/**
 * Shaped Recipe Event Handler
 */
ServerEvents.recipes(event => {
  const ID_PREFIX = 'valhelsia:crafting/';

  // Convenience Functions:

  /**
   * Adds a new 2x2 shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const shaped2x2 = (output, input, recipeID) => {
    let recipe = event.shaped(output, ['AA', 'AA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 3x3 shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const shaped3x3 = (output, input, recipeID) => {
    let recipe = event.shaped(output, ['AAA', 'AAA', 'AAA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new donut shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const donut = (output, input, recipeID) => {
    let recipe = event.shaped(output, ['AAA', 'A A', 'AAA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new wrapped shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} core Middle ingredient.
   * @param {*} wrap Outer ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const wrapped = (output, core, wrap, recipeID) => {
    let recipe = event.shaped(output, ['AAA', 'ABA', 'AAA'], {A: wrap, B: core});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new plus wrapped shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} core Middle ingredient.
   * @param {*} wrap Outer ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const plusWrapped = (output, core, wrap, recipeID) => {
    let recipe = event.shaped(output, [' A ', 'ABA', ' A '], {A: wrap, B: core});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 'barrel' shaped recipe.
   * 
   * @param {*} output Item(s) to craft.
   * @param {*} plank Plank ingredient.
   * @param {*} slab Slab ingredient.
   * @param {string} [recipeID] ID of the recipe.
   */
  const barrel = (output, plank, slab, recipeID) => {
    let recipe = event.shaped(output, ['ABA', 'A A', 'ABA'], {A: plank, B: slab});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 'slab' shaped recipe.
   * 
   * @param {*} output Item to craft (quantity is automatically set).
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const slab = (output, input, recipeID) => {
    let recipe = event.shaped(Item.of(output, 6), ['AAA'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  /**
   * Adds a new 'vertical slab' shaped recipe.
   * 
   * @param {*} output Item to craft (quantity is automatically set).
   * @param {*} input Recipe ingredients.
   * @param {string} [recipeID] ID of the recipe.
   */
  const vslab = (output, input, recipeID) => {
    let recipe = event.shaped(Item.of(output, 3), ['A', 'A', 'A'], {A: input});
    if (typeof recipeID == 'string') {
      recipe.id(`${ID_PREFIX}${recipeID}`);
    }
  };

  // Valhelsia
  //plusWrapped(Item.of('akashictome:tome', AKASHIC_TOME_NBT), 'minecraft:book', '#forge:bookshelves', 'filled_akashic_tome');

  // Minecraft
  shaped3x3('minecraft:cobweb', 'minecraft:string', 'cobweb');

  donut('minecraft:chest', '#minecraft:planks', 'oak_chest');

  event.shaped('minecraft:dispenser', [
    'AAA',
    'ABA',
    'ACA'
  ], {
    A: '#forge:cobblestone',
    B: 'minecraft:crossbow',
    C: 'minecraft:redstone'
  }).id(`${ID_PREFIX}dispenser_with_crossbow`);

  event.shaped('minecraft:chainmail_helmet', [
    'AAA',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_helmet`);

  event.shaped('minecraft:chainmail_chestplate', [
    'A A',
    'AAA',
    'AAA'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_chestplate`);

  event.shaped('minecraft:chainmail_leggings', [
    'AAA',
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_leggings`);

  event.shaped('minecraft:chainmail_boots', [
    'A A',
    'A A'
  ], {
    A: 'minecraft:chain'
  }).id(`${ID_PREFIX}chainmail_boots`);

  event.shaped('minecraft:bundle', [
    'SCS',
    'C C',
    'CCC'
  ], {
    S: '#forge:string',
    C: 'farmersdelight:canvas'
  }).id(`${ID_PREFIX}bundle`);
  
  event.shaped('4x minecraft:ladder', [
    'A A',
    'ABA',
    'A A'
  ], {
    A: '#forge:rods/wooden',
    B: '#minecraft:planks'
  }).id(`${ID_PREFIX}ladder`);

  // Darker Depths
  //shaped2x2('darkerdepths:ash_block', '#forge:dusts/ash', 'ash_block');

  //vslab('darkerdepths:petrified_vertical_slab', 'darkerdepths:petrified_slab', 'darkerdepths/petrified_vertical_slab');

  //vslab('darkerdepths:aridrock_vertical_slab', 'darkerdepths:aridrock_slab', 'darkerdepths/aridrock_vertical_slab');
  //vslab('darkerdepths:aridrock_bricks_vertical_slab', 'darkerdepths:aridrock_bricks_slab', 'darkerdepths/aridrock_bricks_vertical_slab');
  //vslab('darkerdepths:polished_aridrock_vertical_slab', 'darkerdepths:polished_aridrock_slab', 'darkerdepths/polished_aridrock_vertical_slab');

  //vslab('darkerdepths:grimestone_vertical_slab', 'darkerdepths:grimestone_slab', 'darkerdepths/grimestone_vertical_slab');
  //vslab('darkerdepths:grimestone_bricks_vertical_slab', 'darkerdepths:grimestone_bricks_slab', 'darkerdepths/grimestone_bricks_vertical_slab');
  //vslab('darkerdepths:polished_grimestone_vertical_slab', 'darkerdepths:polished_grimestone_slab', 'darkerdepths/polished_grimestone_vertical_slab');

  //vslab('darkerdepths:limestone_vertical_slab', 'darkerdepths:limestone_slab', 'darkerdepths/limestone_vertical_slab');
  //vslab('darkerdepths:limestone_bricks_vertical_slab', 'darkerdepths:limestone_bricks_slab', 'darkerdepths/limestone_bricks_vertical_slab');
  //vslab('darkerdepths:polished_limestone_vertical_slab', 'darkerdepths:polished_limestone_slab', 'darkerdepths/polished_limestone_vertical_slab');

  //vslab('darkerdepths:shale_vertical_slab', 'darkerdepths:shale_slab', 'darkerdepths/shale_vertical_slab');
  //vslab('darkerdepths:shale_bricks_vertical_slab', 'darkerdepths:shale_bricks_slab', 'darkerdepths/shale_bricks_vertical_slab');
  //vslab('darkerdepths:polished_shale_vertical_slab', 'darkerdepths:polished_shale_slab', 'darkerdepths/polished_shale_vertical_slab');

  // Decorative Blocks
  //event.shaped('2x decorative_blocks:chain', [
  //  'A',
  //  'B',
  //  'A'
  //], {
  //  A: 'minecraft:iron_ingot',
  //  B: 'minecraft:iron_nugget'
  //}).id(`${ID_PREFIX}big_chain`);

  //event.shaped('4x decorative_blocks:rocky_dirt', [
  //  'AB',
  //  'BA'
  //], {
  //  A: 'minecraft:dirt',
  //  B: '#forge:cobblestone'
  //}).id(`${ID_PREFIX}rocky_dirt`);

  // Ecologics
  //shaped2x2('minecraft:moss_block', 'ecologics:surface_moss', 'moss_block');

  // Farmer's Delight
  shaped3x3('farmersdelight:organic_compost', 'minecolonies:compost', 'organic_compost_from_minecolonies_compost');
  shaped2x2('farmersdelight:canvas', 'supplementaries:flax', 'canvas_from_flax');

  // Immersive Engineering
  shaped3x3('immersiveengineering:storage_silver', '#forge:ingots/silver', 'silver_block_from_silver_ingots');
  shaped3x3('immersiveengineering:storage_steel', '#forge:ingots/steel', 'steel_block_from_steel_ingots');
  shaped3x3('immersiveengineering:ingot_silver', '#forge:nuggets/silver', 'silver_ingot_from_silver_nuggets');

  // Mekanism
  event.shaped('mekanismtools:steel_paxel', [
    'ABC',
    ' D ',
    ' D '
  ], {
    A: 'immersiveengineering:pickaxe_steel',
    B: 'immersiveengineering:axe_steel',
    C: 'immersiveengineering:shovel_steel',
    D: '#forge:rods/wooden'
  }).id(`${ID_PREFIX}steel_paxel`);

  // Phantasmic (Nourished Nether)
  // shaped3x3('nourished_nether:wither_bone_block', 'nourished_nether:wither_bone', `${ID_PREFIX}wither_bone_block_from_wither_bone`);

  // PneumaticCraft: Repressurized
  event.shaped('pneumaticcraft:speed_upgrade', [
    'LSL',
    'SFS',
    'LSL'
  ], {
    S: 'minecraft:sugar',
    L: '#pneumaticcraft:upgrade_components',
    F: {
      type: 'immersiveengineering:fluid',
      amount: 1000,
      tag: 'forge:lubricant'
    }
  }).id(`${ID_PREFIX}pneumaticcraft/speed_upgrade`);

  event.shaped('2x pneumaticcraft:speed_upgrade', [
    'LSL',
    'SFS',
    'LSL'
  ], {
    S: 'pneumaticcraft:glycerol',
    L: '#pneumaticcraft:upgrade_components',
    F: {
      type: 'immersiveengineering:fluid',
      amount: 1000,
      tag: 'forge:lubricant'
    }
  }).id(`${ID_PREFIX}pneumaticcraft/speed_upgrade_from_glycerol`);

  // Quark
  shaped3x3('quark:bonded_ravager_hide', 'quark:ravager_hide', 'bonded_ravager_hide_from_ravager_hide');

  // Supplementaries
  event.shaped('supplementaries:quiver', [
    'L L',
    'LSL',
    ' L '
  ], {
    S: '#forge:string',
    L: '#forge:leather'
  }).id(`${ID_PREFIX}quiver`);
  
  // Twilight Forest
  wrapped('8x twilightforest:nagastone', 'twilightforest:naga_scale', 'minecraft:stone', 'nagastone');

  // Waystones
  event.shaped('waystones:warp_scroll', [
    'NWN',
    'NEN',
    'PPP'
  ], {
    N: '#forge:nuggets/gold',
    W: '#forge:dusts/warp',
    E: '#forge:ender_pearls',
    P: '#forge:paper'
  }).id(`${ID_PREFIX}warp_scroll`);

  event.shaped('waystones:warp_stone', [
    'WPW',
    'PEP',
    'WPW'
  ], {
    W: '#forge:dusts/warp',
    P: '#forge:ender_pearls',
    E: '#forge:gems/emerald'
  }).id(`${ID_PREFIX}warp_stone`);

});
