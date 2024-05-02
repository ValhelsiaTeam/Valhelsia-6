// priority: 0

//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file JEI Blacklist for Valhelsia 6
 * 
 * For consistency, Item / Fluid IDs should be in the order of Minecraft entries first, then by mod in alphabetical order.
 *  
 * @copyright Valhelsia Inc 2024
 */

/**
 * JEI Item Hiding Event Handler
 */
JEIEvents.hideItems(event => {
  event.hide([

    // Minecraft
    'minecraft:barrier',
    'minecraft:jigsaw',
    'minecraft:light',
    'minecraft:structure_block',
    'minecraft:structure_void',

    // Ad Astra
    'ad_astra:iron_rod',
    'ad_astra:iron_plate',
    'ad_astra:steel_block',
    'ad_astra:steel_ingot',
    'ad_astra:steel_nugget',
    'ad_astra:steel_plate',

    // Advanced Peripherals
    'advancedperipherals:rs_bridge',

    // Applied Energistics 2
    'ae2:facade',

    // Ars Nouveau
    'ars_nouveau:creative_spell_book',

    // Biomes O' Plenty
    'biomesoplenty:blood',
    'biomesoplenty:bop_icon',
    'biomesoplenty:glowshroom_block',
    'biomesoplenty:glowing_moss_block',
    'biomesoplenty:glowing_moss_carpet',
    'biomesoplenty:glowworm_silk',
    'biomesoplenty:glowworm_silk_strand',
    'biomesoplenty:glowshroom',
    'biomesoplenty:potted_origin_sapling',
    'biomesoplenty:potted_flowering_oak_sapling',
    'biomesoplenty:potted_rainbow_birch_sapling',
    'biomesoplenty:potted_yellow_autumn_sapling',
    'biomesoplenty:potted_orange_autumn_sapling',
    'biomesoplenty:potted_maple_sapling',
    'biomesoplenty:potted_fir_sapling',
    'biomesoplenty:potted_redwood_sapling',
    'biomesoplenty:potted_white_cherry_sapling',
    'biomesoplenty:potted_pink_cherry_sapling',
    'biomesoplenty:potted_mahogany_sapling',
    'biomesoplenty:potted_jacaranda_sapling',
    'biomesoplenty:potted_palm_sapling',
    'biomesoplenty:potted_willow_sapling',
    'biomesoplenty:potted_dead_sapling',
    'biomesoplenty:potted_magic_sapling',
    'biomesoplenty:potted_umbran_sapling',
    'biomesoplenty:potted_hellbark_sapling',
    'biomesoplenty:potted_rose',
    'biomesoplenty:potted_violet',
    'biomesoplenty:potted_lavender',
    'biomesoplenty:potted_wildflower',
    'biomesoplenty:potted_orange_cosmos',
    'biomesoplenty:potted_pink_daffodil',
    'biomesoplenty:potted_pink_hibiscus',
    'biomesoplenty:potted_glowflower',
    'biomesoplenty:potted_wilted_lily',
    'biomesoplenty:potted_burning_blossom',
    'biomesoplenty:potted_sprout',
    'biomesoplenty:potted_clover',
    'biomesoplenty:potted_toadstool',
    'biomesoplenty:potted_glowshroom',

    // Citadel
    'citadel:debug',
    'citadel:citadel_book',
    'citadel:effect_item',
    'citadel:fancy_item',

    // Create
    'create:copper_backtank_placeable',
    'create:netherite_backtank_placeable',

    // Darker Depths
    'darkerdepths:silver_ore',
    'darkerdepths:raw_silver',
    'darkerdepths:raw_silver_block',
    'darkerdepths:silver_ingot',
    'darkerdepths:silver_block',
    'darkerdepths:rope',

    // Deeper and Darker
    'deeperdarker:sculk_tendrils_plant',
    'deeperdarker:sculk_vines_plant',
    'deeperdarker:otherside_portal',

    // Domum Ornamentum
    'domum_ornamentum:plain',
    'domum_ornamentum:double_crossed',
    'domum_ornamentum:framed',
    'domum_ornamentum:side_framed',
    'domum_ornamentum:up_gated',
    'domum_ornamentum:down_gated',
    'domum_ornamentum:one_crossed_lr',
    'domum_ornamentum:one_crossed_rl',
    'domum_ornamentum:horizontal_plain',
    'domum_ornamentum:side_framed_horizontal',
    'domum_ornamentum:shingle',
    'domum_ornamentum:shingle_slab',
    'domum_ornamentum:blockpaperwall',
    'domum_ornamentum:blockpillar',
    'domum_ornamentum:vanilla_fence_compat',
    'domum_ornamentum:vanilla_wall_compat',
    'domum_ornamentum:vanilla_slab_compat',
    'domum_ornamentum:vanilla_trapdoors_compat',
    'domum_ornamentum:vanilla_stairs_compat',
    'domum_ornamentum:vanilla_fence_gate_compat',
    'domum_ornamentum:vanilla_doors_compat',
    'domum_ornamentum:fancy_trapdoors',
    'domum_ornamentum:fancy_door',
    'domum_ornamentum:panel',

    // Embers
    'embers:silver_nugget',
    'embers:silver_ingot',
    'embers:raw_silver',
    'embers:silver_block',
    'embers:raw_silver_block',
    'embers:silver_ore',
    'embers:deepslate_silver_ore',
    'embers:lead_nugget',
    'embers:lead_ingot',
    'embers:raw_lead',
    'embers:lead_block',
    'embers:raw_lead_block',
    'embers:lead_ore',
    'embers:deepslate_lead_ore',

    // Enlightend
    'enlightened_end:cerulean_vine_tip',
    'enlightened_end:cerulean_bush_top',
    'enlightened_end:cerulean_bush_bottom',
    'enlightened_end:helium_gas',
    'enlightened_end:xenon_gas',
    'enlightened_end:planetary_air',
    'enlightened_end:plantery_system_air',
    'enlightened_end:springleaf_vine',
    'enlightened_end:spring_leaf_deactivated',
    'enlightened_end:laser_emission',
    'enlightened_end:closed_malachite_capsule',
    'enlightened_end:malachite_reflector_up',
    'enlightened_end:malachite_reflector_horizontal',
    'enlightened_end:malachite_reflector_veritcal_on', // typo in mod
    'enlightened_end:malachite_reflector_horizontal_on',
    'enlightened_end:malachite_reflector_horizontal',
    'enlightened_end:malachite_reflector_down',
    'enlightened_end:malachite_reflector_down_on',
    'enlightened_end:xenon_laser_on',
    'enlightened_end:bouncling_nut_0',
    'enlightened_end:bouncling_nut_2',
    'enlightened_end:azure_berry_vine_0',
    'enlightened_end:azure_berry_vine_1',
    'enlightened_end:azure_berry_vine_2',
    'enlightened_end:irradium_lamp_off',
    'enlightened_end:gas_vent_middle',
    'enlightened_end:gas_vent_ooze',
    'enlightened_end:gas_vent_bottom',
    'enlightened_end:gas_vent_water',
    'enlightened_end:gas_vent_lava',
    'enlightened_end:gas_vent_xenon',
    'enlightened_end:gas_vent_helium',
    'enlightened_end:cerulean_stalk_0',
    'enlightened_end:cerulean_stalk_1',
    'enlightened_end:cerulean_stalk_2',
    'enlightened_end:cerulean_stalk_3',
    'enlightened_end:elevibloom_0',
    'enlightened_end:elevibloom_1',
    'enlightened_end:elevibloom_2',
    'enlightened_end:elevibloom_3',
    'enlightened_end:ooze_cauldron_full',
    'enlightened_end:ooze_cauldron_2',
    'enlightened_end:ooze_cauldron_1',
    'enlightened_end:ringling_pot',
    'enlightened_end:potted_ennegel_fern',
    'enlightened_end:potted_odd_roots',
    'enlightened_end:potted_open_odd_roots',
    'enlightened_end:potted_indigo_sprouts',
    'enlightened_end:potted_indigo_roots',

    // Every Compat
    'everycomp:all_woods',

    // Farmer's Delight
    'farmersdelight:rope',

    // Galosphere
    'galosphere:silver_ore',
    'galosphere:deepslate_silver_ore',
    'galosphere:raw_silver_block',
    'galosphere:raw_silver',
    'galosphere:silver_ingot',
    'galosphere:silver_nugget',
    'galosphere:silver_block',

    // Immersive Engineering
    'immersiveengineering:ore_lead',
    'immersiveengineering:deepslate_ore_lead',
    'immersiveengineering:raw_lead',
    'immersiveengineering:raw_block_lead',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:storage_lead',
    'immersiveengineering:nugget_lead',
    'immersiveengineering:ore_uranium',
    'immersiveengineering:deepslate_ore_uranium',
    'immersiveengineering:raw_uranium',
    'immersiveengineering:raw_block_uranium',
    'immersiveengineering:ingot_uranium',
    'immersiveengineering:storage_uranium',
    'immersiveengineering:nugget_uranium',
    'immersiveengineering:storage_steel',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:nugget_steel',
    'immersiveengineering:nugget_copper',
    'immersiveengineering:fake_icon_birthday',
    'immersiveengineering:fake_icon_lucky',
    'immersiveengineering:fake_icon_drillbreak',
    'immersiveengineering:fake_icon_ravenholm',
    'immersiveengineering:fake_icon_fried',
    'immersiveengineering:fake_icon_bttf',

    // Mekanism
    'mekanism:block_charcoal',
    'mekanism:bounding_block',
    'mekanism:creative_fluid_tank',
    'mekanism:creative_chemical_tank',
    'mekanism:uranium_ore',
    'mekanism:deepslate_uranium_ore',
    'mekanism:block_raw_uranium',
    'mekanism:raw_uranium',

    // Mekanism Additions
    'mekanismadditions:baby_creeper_spawn_egg',
    'mekanismadditions:baby_enderman_spawn_egg',
    'mekanismadditions:baby_wither_skeleton_spawn_egg',

    // Mekanism Tools
    'mekanismtools:lapis_lazuli_helmet',
    'mekanismtools:lapis_lazuli_chestplate',
    'mekanismtools:lapis_lazuli_leggings',
    'mekanismtools:lapis_lazuli_boots',
    'mekanismtools:lapis_lazuli_sword',
    'mekanismtools:lapis_lazuli_pickaxe',
    'mekanismtools:lapis_lazuli_axe',
    'mekanismtools:lapis_lazuli_shovel',
    'mekanismtools:lapis_lazuli_hoe',
    'mekanismtools:lapis_lazuli_paxel',
    'mekanismtools:lapis_lazuli_shield',
    'mekanismtools:steel_sword',
    'mekanismtools:steel_pickaxe',
    'mekanismtools:steel_axe',
    'mekanismtools:steel_shovel',
    'mekanismtools:steel_hoe',
    'mekanismtools:steel_helmet',
    'mekanismtools:steel_chestplate',
    'mekanismtools:steel_leggings',
    'mekanismtools:steel_boots',

    // Moonlight
    'moonlight:placeable_item',

    // Phantasmic (Nourished Nether)
    'nourished_nether:basalt_ash_spawner',
    'nourished_nether:ectoplasm_block_active',

    // Quark
    'quark:carrot_crate',
    'quark:potato_crate',
    'quark:beetroot_crate',

    // Quark Oddities
    'quark:backpack',

    // Structure Gel API
    'structure_gel:red_gel',
    'structure_gel:blue_gel',
    'structure_gel:green_gel',
    'structure_gel:cyan_gel',
    'structure_gel:orange_gel',
    'structure_gel:yellow_gel',

    // Tetra
    'tetra:modular_bow',
    'tetra:modular_crossbow',
    'tetra:modular_bow',
    'tetra:modular_single',
    'tetra:modular_shield',
    'tetra:shootable_dummy',

    // Twilight Forest
    'twilightforest:uncrafting_table',
  ]);
});