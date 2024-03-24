// priority: 10
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//

/**
 * @file Entity loot table injection / replacement.
 * @copyright Valhelsia Inc 2022-2024
 */

/**
 * Entity Loot Table Event Handler
 */
ServerEvents.entityLootTables(event => {
    // Minecraft - Husk
    event.modifyEntity('minecraft:husk', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('mekanism:ingot_tin');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });
    
    // Minecraft - Pillager
    event.modifyEntity('minecraft:pillager', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('immersiveengineering:ingot_silver');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });

    // Minecraft - Ravager
    event.modifyEntity('minecraft:ravager', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('quark:ravager_hide');
      });
    });
    
    // Minecraft - Stray
    event.modifyEntity('minecraft:stray', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('immersiveengineering:ingot_silver');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });
  
    // Quark - Wraith
    event.modifyEntity('quark:wraith', table => {
      table.addPool(pool => {
        pool.rolls = 1;
        pool.addItem('mekanism:ingot_lead');
        pool.killedByPlayer();
        pool.randomChanceWithLooting(0.11, 0.02);
      });
    });
  
  });