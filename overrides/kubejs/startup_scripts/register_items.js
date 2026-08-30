$EventPriority: 0

StartupEvents.registry('item', event => {


	//Simple Items
	event.create('corn_flour').displayName('Corn Flour')
	event.create('corn_dough').displayName('Corn Dough')
	event.create('cinnamon').displayName('Cinnamon')
	event.create('fragrant_tree_bark').displayName('Fragrant Tree Bark')
	event.create('birch_bark').displayName('Birch Bark')
	event.create('dry_moss_clump').displayName('Dry Moss Clump')
	event.create('pale_moss_clump').displayName('Pale Moss Clump')
	event.create('alphacene_moss_clump').displayName('Alphacene Moss Clump')

	event.create('silver_plate').displayName('Silver Plate')
	event.create('turquoise_shard').displayName('Turquoise Shard').rarity('caverns_and_chasms:fancy')

	event.create('dungeonsteel_ingot').displayName('Dungeonsteel Ingot')
	event.create('uranium_ingot').displayName('Uranium Ingot')
	event.create('lead_sheet').displayName('Lead Sheet')

	event.create('horn_of_the_warden').displayName('Horn of the Warden').rarity('rare')

	event.create('synthetic_mind').displayName('Synthetic Mind').rarity('uncommon')
	event.create('spinel_smithing_template').displayName('Smithing Template')

	//Magic Relics
	event.create('totem_of_uncleansing').displayName('Totem of Uncleansing')
	.rarity('alexscaves:demonic')

	event.create('tome_of_undeath').displayName('Tome of Undeath')
//	.rarity('sullysmod:ancient')

	event.create('harp_of_madness').displayName('Harp of Madness')
//	.rarity('sullysmod:ancient')

	event.create('vex_blade', 'sword')
		.tier('iron')
		.displayName('Vex Blade')
		.rarity('rare')
		.attackDamageBaseline(5)
		.speedBaseline(-2)
		.maxDamage(1000)

	event.create('sun_effigy').displayName('Sun Effigy').rarity('spawn:solar')

	event.create('chalice_of_the_great_hog').displayName('Chalice of the Great Hog')
//	.rarity('sullysmod:ancient')

	event.create('ankh').displayName('Ankh')
//	.rarity('sullysmod:ancient')

	event.create('stormlander', 'sword')
		.tier('netherite')
		.displayName('Stormlander')
		.rarity('epic')
		.attackDamageBaseline(10)
		.speedBaseline(-3.2)
		.maxDamage(8000)

	event.create('hammer_of_gravity', 'sword')
		.tier('netherite')
		.displayName('Hammer of Gravity')
		.rarity('epic')
		.attackDamageBaseline(10)
		.speedBaseline(-3.2)
		.maxDamage(8000)

	event.create('creeper_idol').displayName('Creeper Idol')
//	.rarity('sullysmod:ancient')

	//Food and Drinks
	event.create('rotten_brain').displayName('Rotten Brain').food(food => {
		food
			.nutrition(8)
			.saturation(1.2)
			.effect('minecraft:hunger', 800, 0, 80)
			.effect('minecraft:darkness', 40, 0, 40)
			.effect('atmospheric:worsening', 1200, 0, 40)
//			.effect('sleep_tight:invigorating', 600, 0, 20)
	})
	event.create('cinnamon_roll').displayName('Cinnamon Roll').food(food => {
		food
			.nutrition(6)
			.saturation(0.75)
		})
	event.create('whitefish_roll').displayName('Whitefish Roll').food(food => {
		food
			.nutrition(7)
			.saturation(0.2)
		})
	event.create('cooked_prickly_pear').displayName('Cooked Prickly Pear').food(food => {
		food
			.nutrition(5)
			.saturation(0.3)
		})
	event.create('cinnamon_cracker').displayName('Cinnamon Cracker').food(food => {
		food
			.nutrition(2)
			.saturation(0.9)
			.fastToEat()
		})
	event.create('corn_fritters').displayName('Corn Fritters').food(food => {
		food
			.nutrition(5)
			.saturation(0.7)
			.fastToEat()
		})
	event.create('squid_stir_fry').maxStackSize(16).displayName('Squid Stir Fry').food(food => {
		food
			.nutrition(14)
			.saturation(0.6)
			.effect('farmersdelight:nourishment', 3600, 0, 100)
		})
		.tooltip("§9Nourishment (03:00)")
	event.create('turkey_chowder').maxStackSize(16).displayName('Turkey Chowder').food(food => {
		food
			.nutrition(12)
			.saturation(0.7)
			.effect('farmersdelight:nourishment', 2400, 0, 100)
		})
		.tooltip("§9Nourishment (02:00)")
	event.create('chevon_and_potatoes').maxStackSize(16).displayName('Chevon and Potatoes').food(food => {
		food
			.nutrition(12)
			.saturation(0.8)
			.effect('farmersdelight:nourishment', 3600, 0, 100)
		})
		.tooltip("§9Nourishment (03:00)")
	event.create('pasta_with_turkey').maxStackSize(16).displayName('Pasta with Turkey').food(food => {
		food
			.nutrition(12)
			.saturation(0.65)
			.effect('farmersdelight:nourishment', 3600, 0, 100)
		})
		.tooltip("§9Nourishment (03:00)")
	event.create('bacon_and_fried_corn').maxStackSize(16).displayName('Bacon and Fried Corn').food(food => {
		food
			.nutrition(10)
			.saturation(0.8)
			.effect('farmersdelight:nourishment', 1200, 0, 100)
		})
		.tooltip("§9Nourishment (01:00)")
	event.create('cinnamon_mint_curry').maxStackSize(16).displayName('Cinnamon Mint Curry').food(food => {
		food
			.nutrition(10)
			.saturation(0.7)
			.effect('farmersdelight:comfort', 3600, 0, 100)
			.effect('neapolitan:berserking', 800, 0, 100)
		})
		.tooltip("§9Comfort (03:00)")
		.tooltip("§9Berserking (00:40)")
	event.create('preserved_skewer').food(food => {
		food
    		.nutrition(12)
			.saturation(0.725)
			.effect('water_breathing', 900, 0, 1)
			.effect('mynethersdelight:g_pungent', 400, 1, 1)
        	})
	
	event.create('prismatic_ice_cream').maxStackSize(16).containerItem('minecraft:bowl').maxStackSize(16).displayName('Prismatic Ice Cream').food(food => {
		food
			.nutrition(12)
			.saturation(0.4)
			.effect('neapolitan:agility', 400, 0, 100)
			.effect('neapolitan:harmony', 200, 0, 100)
			.effect('neapolitan:berserking', 600, 0, 100)
		})
		.tooltip("§9Agility (00:20)")
		.tooltip("§9Berserking (00:30)")
		.tooltip("§9Harmony (00:10)")

	event.create('neapolitan_ice_cream_sandwich').displayName('Neapolitan Ice Cream Sandwich').food(food => {
		food
			.nutrition(13)
			.saturation(0.5)
			.effect('neapolitan:sugar_rush', 600, 1, 100)
			.effect('neapolitan:vanilla_scent', 300, 0, 100)
		})
		.tooltip("§9Sugar Rush II (00:30)")
		.tooltip("§9Vanilla Scent (00:15)")
	event.create('prismatic_ice_cream_sandwich').displayName('Prismatic Ice Cream Sandwich').food(food => {
		food
			.nutrition(13)
			.saturation(0.5)
			.effect('neapolitan:agility', 600, 0, 100)
			.effect('neapolitan:harmony', 300, 0, 100)
			.effect('neapolitan:berserking', 900, 0, 100)
		})
		.tooltip("§9Agility (00:30)")
		.tooltip("§9Berserking (00:45)")
		.tooltip("§9Harmony (00:15)")

// Drinks
	event.create('cactus_juice').containerItem('minecraft:glass_bottle').displayName('Cactus Juice').food(food => {
		food
			.alwaysEdible()
			.effect('windswept:thorns', 1200, 0, 100)
		})
		.useAnimation("drink")
		.tooltip("§9Thorns (01:00)")
	event.create('soulstice_sake').displayName('Soulstice Sake').food(food => {
		food
			.effect('brewinandchewin:tipsy', 6000, 0, 100)
			.effect('brewinandchewin:intoxication', 5400, 0, 100)
//			.effect('alexsmobs:soulsteal', 3600, 0, 100)
			.effect('upgrade_aquatic:restfulness', 1, 1, 100)
			.alwaysEdible()
		})
		.useAnimation("drink")
		.tooltip("§cTipsy (05:00)")
		.tooltip("§cIntoxication (04:30)")
//        .tooltip("§9Soulsteal (03:00)")
		.tooltip("§9Restfulness II")
	event.create('buzzing_bourbon').displayName('Buzzing Bourbon').food(food => {
		food
			.effect('brewinandchewin:tipsy', 6000, 0, 100)
			.effect('brewinandchewin:intoxication', 5400, 0, 100)
			.effect('buzzier_bees:sunny', 9000, 0, 100)
			.effect('upgrade_aquatic:vibing', 3600, 1, 100)
			.alwaysEdible()
		})
		.useAnimation("drink")
		.tooltip("§cTipsy (05:00)")
		.tooltip("§cIntoxication (04:30)")
		.tooltip("§9Sunny (07:30)")
		.tooltip("§9Vibing (03:00)")
	event.create('prickly_gin').displayName('Prickly Gin').food(food => {
		food
			.effect('windswept:thorns', 3600, 0, 100)
			.effect('brewinandchewin:tipsy', 6000, 1, 100)
			.alwaysEdible()
		})
		.useAnimation("drink")
		.tooltip("§cTipsy")
		.tooltip("§9Thorns (03:00)")
	event.create('primordial_painkiller').displayName('Primordial Painkiller').food(food => {
		food
			.effect('brewinandchewin:tipsy', 6000, 1, 100)
			.effect('brewinandchewin:intoxication', 5400, 0, 100)
			.effect('alexscaves:rage', 2400, 0, 100)
//			.effect('other effect', 600, 0, 100)
			.alwaysEdible()
		})
		.useAnimation("drink")
		.tooltip("§cTipsy II (05:00)")
		.tooltip("§cIntoxication (04:30)")
		.tooltip("§9Rage (02:00)")
		.tooltip("§9Heartstop (00:30)")
	event.create('draconic_whisky').displayName('Draconic Whisky').food(food => {
		food
			.effect('brewinandchewin:tipsy', 6000, 2, 100)
			.effect('brewinandchewin:tipsy', 4800, 0, 100)
			.effect('minecraft:darkness', 600, 0, 100)
//			.effect('other effect', 3600, 3, 100)
			.alwaysEdible()
		})
		.useAnimation("drink")
		.tooltip("§cTipsy III (05:00)")
		.tooltip("§cIntoxication (04:00)")
		.tooltip("§cDarkness (00:30)")
		.tooltip("§9Evasion IV (03:00)")


	event.create('cat_food').maxStackSize(16).displayName('Cat Food').food(food => {
		food
			.nutrition(3)
			.saturation(0.3)
		})
	event.create('glogg').displayName('Glogg').food(food => {
		food
			.alwaysEdible()
			//Needs effect
		})
		.useAnimation("drink")
	event.create('cloud_latte').displayName('Cloud Latte').food(food => {
		food
			.alwaysEdible()
			.effect('minecraft:slow_falling', 1200, 0, 100)
		})
		.useAnimation("drink")
		.tooltip("§9Slow Falling (01:00)")
	event.create('berry_popsicle').displayName('Berry Popsicle').food(food => {
		food
			.nutrition(3)
			.saturation(0.1)
		})
	event.create('cream').displayName('Cream').food(food => {
		food
			.nutrition(1)
			.saturation(0.5)
		})
	event.create('travelers_panini').displayName("Traveler's Panini").food(food => {
		food
			.nutrition(10)
			.saturation(0.7)
			.effect('minecraft:luck', 600, 0, 100)
			.effect('minecraft:invisibility', 600, 0, 100)
		})
		.tooltip("§9Luck (00:30)")
		.tooltip("§9Invisibility (00:30)")
	event.create('mashed_potatoes').maxStackSize(16).displayName('Mashed Potatoes').food(food => {
		food
			.nutrition(9)
			.saturation(0.5)
		})
	event.create('exotic_fruit_salad').maxStackSize(16).displayName('Exotic Fruit Salad').food(food => {
		food
			.nutrition(8)
			.saturation(0.3)
			.effect('minecraft:regeneration', 200, 0, 100)
		})
		.tooltip("§9Regeneration (00:10)")
	event.create('sweet_gelatine_bucket').displayName('Sweet Gelatine Bucket').food(food => {
		food
			.nutrition(8)
			.saturation(0.2)
			.effect('minecraft:jump_boost', 2400, 1, 100)
		})
		.tooltip("§9Jump Boost II (02:00)")
	event.create('lush_moss_salad').maxStackSize(16).displayName('Lush Moss Salad').food(food => {
		food
			.nutrition(8)
			.saturation(0.3)
			.effect('minecraft:regeneration', 100, 0, 100)
			.effect('minecraft:glowing', 2400, 0, 100)
		})
		.tooltip("§9Regeneration (00:05")
		.tooltip("§9Glowing (02:00)")
	event.create('salted_caramel').displayName('Salted Caramel').food(food => {
		food
			.nutrition(3)
			.saturation(0.2)
		})
	event.create('salted_caramel_apple').displayName('Salted Caramel Apple').food(food => {
		food
			.nutrition(7)
			.saturation(0.4)
		})
	event.create('salted_fish').displayName('Salted Fish').food(food => {
		food
			.nutrition(6)
			.saturation(0.5)
		})
	event.create('lava_chicken').displayName('Lava Chicken').food(food => {
		food
			.nutrition(10)
			.saturation(0.8)
			.effect('mynethersdelight:g_pungent', 1200, 0, 100)
		})
		.tooltip("§9Pungent (01:00)")
	event.create('raw_rabbit_leg').displayName('Raw Rabbit Leg').food(food => {
		food
			.nutrition(2)
			.saturation(0.2)
		})
	event.create('cooked_rabbit_leg').displayName('Cooked Rabbit Leg').food(food => {
		food
			.nutrition(3)
			.saturation(0.4)
		})
	event.create('syrup_toast_stacks').maxStackSize(16).displayName('Syrup Toast Stacks').food(food => {
		food
			.nutrition(11)
			.saturation(0.2)
		})
	event.create('whitefish_slice').displayName('Whitefish Slice').food(food => {
		food
			.nutrition(1)
		})
	event.create('cooked_whitefish_slice').displayName('Cooked Whitefish Slice').food(food => {
		food
			.nutrition(3)
			.saturation(0.2)
		})
	event.create('raw_crocodile_tail').displayName("Raw Crocodile Tail").food(food => {
		food
			.nutrition(6)
			.saturation(0.2)
		})
	event.create('cooked_crocodile_tail').displayName("Cooked Crocodile Tail").food(food => {
		food
			.nutrition(12)
			.saturation(0.5)
		})
	event.create('raw_crocodile_meat').displayName("Raw Crocodile Meat").food(food => {
		food
			.nutrition(2)
		})
	event.create('cooked_crocodile_meat').displayName("Cooked Crocodile Meat").food(food => {
		food
			.nutrition(6)
			.saturation(0.3)
		})
	event.create('crocodile_skewer').displayName("Crocodile Skewer").food(food => {
		food
			.nutrition(12)
			.saturation(0.5)
		})
	event.create('roast_bird').maxStackSize(16).displayName("Roast Bird").food(food => {
		food
			.nutrition(14)
			.saturation(0.4)
			.effect('farmersdelight:nourishment', 6000, 0, 100)
		})
		.tooltip("§9Nourishment (05:00)")
	event.create('stuffed_crocodile_tail').maxStackSize(16).displayName("Stuffed Crocodile Tail").food(food => {
		food
			.nutrition(18)
			.saturation(0.7)
			.effect('farmersdelight:nourishment', 7200, 0, 100)
		})
		.tooltip("§9Nourishment (06:00)")
	event.create('cthulhus_breakfast').maxStackSize(16).displayName("Cthulhu's Breakfast").food(food => {
		food
			.nutrition(13)
			.saturation(0.4)
			.effect('minecraft:darkness', 200, 0, 100)
			.effect('farmersdelight:nourishment', 2400, 0, 100)
		})
		.tooltip("§9Nourishment (02:00)")
	event.create('bioluminescent_slice').displayName("Bioluminescent Slice").food(food => {
		food
			.nutrition(2)
			.effect('minecraft:glowing', 200, 0, 50)
		})
	event.create('cooked_bioluminescent_slice').displayName("Cooked Bioluminescent Slice").food(food => {
		food
			.nutrition(4)
			.saturation(0.2)
			.effect('minecraft:glowing', 200, 0, 100)
		})
		.tooltip("§9Glowing (00:10)")
	event.create('bioluminescent_roll').displayName("Bioluminescent Roll").food(food => {
		food
			.nutrition(7)
			.saturation(0.4)
			.effect('minecraft:glowing', 1200, 0, 100)
		})
		.tooltip("§9Glowing (01:00)")
	event.create('sea_noodle_soup').maxStackSize(16).displayName("Sea Noodle Soup").food(food => {
		food
			.nutrition(16)
			.saturation(0.4)
			.effect('farmersdelight:nourishment', 3600, 0, 100)
			.effect('minecraft:glowing', 2400, 0, 100)
		})
		.tooltip("§9Nourishment (03:00)")
		.tooltip("§9Glowing (02:00)")
	event.create('dinosaur_tartare').maxStackSize(16).displayName("Dinosaur Tartar").food(food => {
		food
			.nutrition(20)
			.saturation(0.8)
			.effect('farmersdelight:nourishment', 8400, 0, 100)
		})
		.tooltip("§9Nourishment (07:00)")
	event.create('raw_bird').displayName("Raw Bird").food(food => {
		food
			.nutrition(2)
			.effect('minecraft:hunger', 600, 0, 30)
		})
	event.create('cooked_bird').displayName("Cooked Bird").food(food => {
		food
			.nutrition(5)
			.saturation(0.3)
		})
	event.create('raw_dinosaur_cut').displayName("Raw Dinosaur Cut").food(food => {
		food
			.nutrition(6)
		})
	event.create('raw_clam').displayName("Raw Clam").food(food => {
		food
			.nutrition(1)
		})
	event.create('shulker_mollusk').displayName("Shulker Mollusk").food(food => {
		food
			.nutrition(2)
			.effect('minecraft:nausea', 200, 0, 100)
		})
	event.create('shulker_fillet').displayName("Shulker Fillet").food(food => {
		food
			.nutrition(1)
			.effect('minecraft:nausea', 200, 0, 100)
		})
	event.create('ender_paella').displayName("Ender Paella").food(food => {
		food
			.nutrition(12)
			.effect('farmersdelight:nourishment', 3600, 0, 100)
//			.effect('exquisito:resonance', 600, 0, 100)
		})
		.tooltip("§9Nourishment (03:00)")
//		.tooltip("§9Resonance (00:30)")
	event.create('pearl_pasta').displayName("Pearl Pasta").food(food => {
		food
			.nutrition(14)
			.effect('farmersdelight:nourishment', 6000, 0, 100)
//			.effect('inhabitants:immaterial', 1200, 0, 100)
		})
		.tooltip("§9Nourishment (05:00)")
//		.tooltip("§9Immaterial (01:00)")
})