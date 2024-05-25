// priority: 5
//   __   ___   _    _  _ ___ _    ___ ___   _        __
//   \ \ / /_\ | |  | || | __| |  / __|_ _| /_\      / /
//    \ V / _ \| |__| __ | _|| |__\__ \| | / _ \    / _ \
//     \_/_/ \_\____|_||_|___|____|___/___/_/ \_\   \___/
//                       

/**
 * @file First Start Script - Handles the first time a player joins a world (whether single- or multiplayer).
 * 
 * This includes things like introductory chat messages + links, starting items, and anything else that needs 
 * to be set just once the first time a player connects.
 * 
 * @copyright Valhelsia Inc 2023
 */

/**
 * Player Login Event Handler
 */
PlayerEvents.loggedIn(event => {
  if (!event.player.stages.has('first_start')) {
    event.player.stages.add('first_start');

    event.player.tell(Text.translate('valhelsia.chat.first_start_message'));
    event.player.tell(Text.translate('valhelsia.chat.discord_link').blue().underlined().click('https://discord.com/invite/rdfQuaM'));
    event.player.tell(Text.translate('valhelsia.chat.wiki'));
    event.player.tell(Text.translate('valhelsia.chat.wiki_link').blue().underlined().click('https://wiki.valhelsia.net/'));
    event.player.tell(Text.translate('valhelsia.chat.last_start_message'));

    event.player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{ad_astra:{0:{Count:1b,id:"ad_astra:astrodux"}},advancedperipherals:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}}},ae2:{0:{Count:1b,id:"ae2:guide"}},alexscaves:{0:{Count:1b,id:"alexscaves:cave_book"}},alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},botania:{0:{Count:1b,id:"botania:lexicon"}},integrateddynamics:{0:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"}}},"eccentrictome:version":1}'));
  }

  // Note: If added to in the future, creating multiple stages would allow players updating the pack to receive any new
  // "first start" items / settings / whatever.
  // eg. instead of 'first_start', use 'first_start_v2', 'first_start_v3' to allow versioning the first start script.
});