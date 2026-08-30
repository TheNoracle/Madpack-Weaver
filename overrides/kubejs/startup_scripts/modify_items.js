// priority: 0

ItemEvents.modification(event => {

// ** RARITIES **

// Common Items
event.modify([
    'supplementaries:quiver'
], item => {
    item.rarity = 'common'
})

// Uncommon Items
event.modify([
    'supplementaries:quiver',
    'minecraft:sentry_armor_trim_smithing_template',
    'minecraft:dune_armor_trim_smithing_template',
    'minecraft:coast_armor_trim_smithing_template',
    'minecraft:wild_armor_trim_smithing_template',
    'atmospheric:petrified_armor_trim_smithing_template',
    'atmospheric:druid_armor_trim_smithing_template',
    'atmospheric:apostle_armor_trim_smithing_template',
    'minecraft:wayfinder_armor_trim_smithing_template',
    'minecraft:raiser_armor_trim_smithing_template',
    'minecraft:shaper_armor_trim_smithing_template',
    'minecraft:host_armor_trim_smithing_template',
    'neapolitan:primal_armor_trim_smithing_template',
    'caverns_and_chasms:forger_armor_trim_smithing_template',
    'caverns_and_chasms:immolate_armor_trim_smithing_template',
    'caverns_and_chasms:rim_armor_trim_smithing_template',
    'minecraft:tide_armor_trim_smithing_template',
    'minecraft:snout_armor_trim_smithing_template',
    'minecraft:rib_armor_trim_smithing_template',
    'minecraft:golden_carrot',
    'minecraft:glistering_melon_slice',
    'minecraft:golden_apple',
    'atmospheric:golden_dragon_fruit',
    'galosphere:golden_lichen_cordyceps',
    'mynethersdelight:golden_egg',
//    'sob:golden_potato',
 //   'sob:golden_prickly_pear',
    'minecraft:ender_eye',
	'galosphere:preserved_flesh',
    'alexscaves:heavyweight',
   'alexscaves:quarry_smasher',
//    'sob:portal_drink',
    'quark:pickarang',
    'quark:flamerang',
    'heartstone:heartstone',
    'minecraft:netherite_upgrade_smithing_template',
//    'sullysmod:jade_upgrade_smithing_template',
    'quark:smithing_template_rune',
    'galosphere:preserved_template',
    'caverns_and_chasms:bejeweled_apple',
    'create:transmitter',
    'create:precision_mechanism',
    'kubejs:music_disc_dog',
    'kubejs:music_disc_frontier',
    'kubejs:music_disc_origin',
    'kubejs:music_disc_shimmer',
    'snowyspirit:music_disc_a_carol',
    'minecraft:music_disc_cat',
    'minecraft:music_disc_blocks',
    'minecraft:music_disc_chirp',
    'minecraft:music_disc_far',
    'minecraft:music_disc_mall',
    'minecraft:music_disc_mellohi',
    'minecraft:music_disc_stal',
    'minecraft:music_disc_strad',
    'minecraft:music_disc_ward',
    'minecraft:music_disc_wait',
    'neapolitan:music_disc_hullabaloo',
    'berry_good:music_disc_fox',
    'environmental:music_disc_slabrave',
    'spawn:music_disc_rot',
    'minecraft:music_disc_relic',
//    'species:music_disc_dial',
    'upgrade_aquatic:disc_fragment_atlantis',
    'minecraft:shelter_pottery_sherd',
    'minecraft:skull_pottery_sherd',
    'neapolitan:snack_pottery_sherd',
    'minecraft:snort_pottery_sherd',
    'spawn:spade_pottery_sherd',
    'neapolitan:spider_pottery_sherd',
    'caverns_and_chasms:stalker_pottery_sherd',
    'atmospheric:succulent_pottery_sherd',
    'atmospheric:sun_pottery_sherd',
    'minecraft:angler_pottery_sherd',
    'minecraft:arms_up_pottery_sherd',
    'minecraft:archer_pottery_sherd',
    'minecraft:blade_pottery_sherd',
    'caverns_and_chasms:boom_pottery_sherd',
    'minecraft:brewer_pottery_sherd',
    'minecraft:burn_pottery_sherd',
    'spawn:crown_pottery_sherd',
    'caverns_and_chasms:cast_pottery_sherd',
    'minecraft:danger_pottery_sherd',
    'minecraft:explorer_pottery_sherd',
    'minecraft:friend_pottery_sherd',
    'minecraft:heart_pottery_sherd',
    'minecraft:heartbreak_pottery_sherd',
    'minecraft:howl_pottery_sherd',
    'minecraft:miner_pottery_sherd',
    'minecraft:mourner_pottery_sherd',
    'minecraft:plenty_pottery_sherd',
    'upgrade_aquatic:predator_pottery_sherd',
    'minecraft:prize_pottery_sherd',
    'spawn:school_pottery_sherd',
    'neapolitan:reflection_pottery_sherd',
    'caverns_and_chasms:ride_pottery_sherd',
    'neapolitan:scream_pottery_sherd',
    'atmospheric:scythe_pottery_sherd',
    'minecraft:sheaf_pottery_sherd',
    'spawn:shell_pottery_sherd',
    'netherexp:sealed_pottery_sherd',
    'netherexp:spectre_pottery_sherd',
    'netherexp:marionette_pottery_sherd',
    'netherexp:eldritch_pottery_sherd',
    'netherexp:deception_pottery_sherd',
    'netherexp:firearm_pottery_sherd',
    'netherexp:botanical_pottery_sherd',
    'alexscaves:dinosaur_pottery_sherd',
    'alexscaves:footprint_pottery_sherd',
    'alexscaves:guardian_pottery_sherd',
    'alexscaves:hero_pottery_sherd'
], item => {
    item.rarity = 'uncommon'
})

// Rare Items
event.modify([
    'minecraft:vex_armor_trim_smithing_template',
    'minecraft:ward_armor_trim_smithing_template',
    'minecraft:eye_armor_trim_smithing_template',
    'minecraft:spire_armor_trim_smithing_template',
    'netherexp:rift_armor_trim_smithing_template',
    'netherexp:spirit_armor_trim_smithing_template',
    'netherexp:valor_armor_trim_smithing_template',
    'alexscaves:polarity_armor_trim_smithing_template',
    'netherexp:pump_charge_upgrade_smithing_template',
    'alexscaves:immortal_embryo',
    'minecraft:enchanted_golden_apple',
    'mynethersdelight:enchanted_golden_egg',
    'galosphere:saltbound_tablet',
    'minecraft:disc_fragment_5',
    'alexscaves:disc_fragment_fusion',
    'alexscaves:disc_fragment_tasty',
    'minecraft:nether_star',
    'minecraft:globe_banner_pattern',
    'minecraft:trident'
], item => {
    item.rarity = 'rare'
})

// Epic Items
event.modify([
//    'clash:spear',
//    'clash:greatblade',
//    'clash:swept_axe',
//    'clash:rod_of_gales',
    'minecraft:mace',
    'minecraft:silence_armor_trim_smithing_template',
    'minecraft:dragon_head',
    'minecraft:elytra',
    'kubejs:music_disc_halland_dalarna'
], item => {
    item.rarity = 'epic'
})

// Artifacts
//event.modify([
//    'species:petrified_egg',
//    'species:cruncher_egg',
//    'species:springling_egg',
//    'species:music_disc_lapidarian',
//    'minecraft:sniffer_egg',
//    'alexscaves:amber_curiosity',
//    'supplementaries:antique_ink',
//], item => {
//    item.rarity = 'sullysmod:ancient'
//})

// Demonic
event.modify([
    'redomesticate:sinister_carrot'
], item => {
    item.rarity = 'alexscaves:demonic'
})

// ** CRAFTING REMAINDERS **

event.modify('minecraft:potion', item => {
    item.craftingRemainder = Item.of('minecraft:glass_bottle').item
})


// ** ITEM COMPONENTS **

event.modify('minecraft:ender_pearl', item => {
    item.set('aeronautics:levitating', {})
})

})