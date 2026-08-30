ItemEvents.modification(event => {
	function maxDura(modifiedItem, modifiedAmount) {
		event.modify(modifiedItem, item => {item.maxDamage = modifiedAmount})
	}

// Sand Paper
	maxDura('create:sand_paper', 64)
	maxDura('create:red_sand_paper', 64)

// Gizmos
	maxDura('minecraft:trident', 1500) 
	maxDura('alexscaves:ortholance', 1500)
	maxDura('alexscaves:magic_conch', 1500)
	maxDura('alexscaves:sea_staff', 1500)
	maxDura('alexscaves:resistor_shield', 2000)
	maxDura('alexscaves:galena_gauntlet', 2000)
	maxDura('netherexp:shotgun_fist', 1000)
	maxDura('netherexp:pump_charge_shotgun', 1200)
//	maxDura('netherexp:jackhammer_fist', 1200)
	maxDura('alexscaves:extinction_spear', 2500)
	maxDura('galosphere:saltbound_tablet', 500)
	maxDura('alexscaves:totem_of_possession', 800)
	maxDura('alexscaves:desolate_dagger', 800)
	maxDura('alexscaves:dreadbow', 1200)
	maxDura('alexscaves:candy_cane_hook', 300)
	maxDura('alexscaves:sugar_staff', 500)
//	maxDura('species:ricoshield', 2000)
	
// Tools & weapons

	// Wooden or other
	event.modify([
	'minecraft:wooden_pickaxe',
	'minecraft:wooden_axe',
	'minecraft:wooden_shovel',
	'minecraft:wooden_hoe',
	'minecraft:wooden_sword',
	'farmersdelight:flint_knife',
	'minecraft:flint_and_steel',
	'minecraft:fishing_rod',
	'minecraft:carrot_on_a_stick',
	'minecraft:warped_fungus_on_a_stick',
	'redomesticate:feather_on_a_stick',
	'netherexp:skull_on_a_stick',
	'supplementaries:flute',
	'supplementaries:slingshot',
	'naturalist:capture_net',
	'minecraft:bow',
	'minecraft:brush'
//	'species:harpoon'
	], item => {item.maxDamage = 150})
	
	// Golden
	event.modify([
	'minecraft:golden_pickaxe',
	'minecraft:golden_axe',
	'minecraft:golden_shovel',
	'minecraft:golden_hoe',
	'minecraft:golden_sword',
	'farmersdelight:golden_knife'
	], item => {item.maxDamage = 200})
	
	// Stone
	event.modify([
	'minecraft:stone_pickaxe',
	'minecraft:stone_axe',
	'minecraft:stone_shovel',
	'minecraft:stone_hoe',
	'minecraft:stone_sword'
	], item => {item.maxDamage = 350})

	// Silver
	event.modify([
	'caverns_and_chasms:silver_pickaxe',
	'caverns_and_chasms:silver_axe',
	'caverns_and_chasms:silver_shovel',
	'caverns_and_chasms:silver_hoe',
	'caverns_and_chasms:silver_sword',
	'abnormals_delight:silver_knife'
//	'species:crankbow'
	], item => {item.maxDamage = 500})
	
	// Iron (and one Copper)
	event.modify([
	'minecraft:iron_pickaxe',
	'minecraft:iron_axe',
	'minecraft:iron_shovel',
	'minecraft:iron_hoe',
	'minecraft:iron_sword',
	'minecraft:shield',
	'farmersdelight:iron_knife',
	'farmersdelight:skillet',
	'minecraft:crossbow',
	'minecraft:shears',
	'etcetera:hammer',
	'etcetera:chisel',
	], item => {item.maxDamage = 700})

	// Dungeon
	event.modify([
	'dungeonsdelight:stained_knife'
//	'species:spectralibur'
	], item => {item.maxDamage = 1800})
	
	// Diamond
	event.modify([
	'minecraft:diamond_pickaxe',
	'minecraft:diamond_axe',
	'minecraft:diamond_shovel',
	'minecraft:diamond_hoe',
	'minecraft:diamond_sword',
	'farmersdelight:diamond_knife',
	'quark:pickarang'
	], item => {item.maxDamage = 2200})
	
	// Necromium
	event.modify([
	'caverns_and_chasms:necromium_pickaxe',
	'caverns_and_chasms:necromium_axe',
	'caverns_and_chasms:necromium_shovel',
	'caverns_and_chasms:necromium_hoe',
	'caverns_and_chasms:necromium_sword',
	'abnormals_delight:necromium_knife'
//	'clash:greatblade',
	], item => {item.maxDamage = 6000})
	
	// Netherite
	event.modify([
	'minecraft:netherite_pickaxe',
	'minecraft:netherite_axe',
	'minecraft:netherite_shovel',
	'minecraft:netherite_hoe',
	'minecraft:netherite_sword',
	'farmersdelight:netherite_knife',
//	'clash:swept_axe',
	'quark:flamerang'
	], item => {item.maxDamage = 8000})
	
	
	
// Armour

	// Gingerbread
	event.modify([
	'alexscaves:gingerbread_helmet',
	'alexscaves:gingerbread_chestplate',
	'alexscaves:gingerbread_leggings',
	'alexscaves:gingerbread_boots'
	], item => {item.maxDamage = 100})

	// Leather
	event.modify([
	'minecraft:leather_helmet',
	'minecraft:leather_chestplate',
	'minecraft:leather_leggings',
	'minecraft:leather_boots'
	], item => {item.maxDamage = 125})

	// Golden
	event.modify([
	'minecraft:golden_helmet',
	'minecraft:golden_chestplate',
	'minecraft:golden_leggings',
	'minecraft:golden_boots'
	], item => {item.maxDamage = 175})

	// Chainmail
	event.modify([
	'minecraft:chainmail_helmet',
	'minecraft:chainmail_chestplate',
	'minecraft:chainmail_leggings',
	'minecraft:chainmail_boots'
	], item => {item.maxDamage = 200})

	// Sterling
	event.modify([
	'galosphere:sterling_helmet',
	'galosphere:sterling_chestplate',
	'galosphere:sterling_leggings',
	'galosphere:sterling_boots'
	], item => {item.maxDamage = 250})

	// Silver
	event.modify([
	'caverns_and_chasms:silver_helmet',
	'caverns_and_chasms:silver_chestplate',
	'caverns_and_chasms:silver_leggings',
	'caverns_and_chasms:silver_boots'
	], item => {item.maxDamage = 300})

	// Primordial
	event.modify([
	'alexscaves:primordial_helmet',
	'alexscaves:primordial_tunic',
	'alexscaves:primordial_pants'
	], item => {item.maxDamage = 350})

	// Iron
	event.modify([
	'minecraft:iron_helmet',
	'minecraft:iron_chestplate',
	'minecraft:iron_leggings',
	'minecraft:iron_boots'
	], item => {item.maxDamage = 500})

	// Diamond
	event.modify([
	'minecraft:diamond_helmet',
	'minecraft:diamond_chestplate',
	'minecraft:diamond_leggings',
	'minecraft:diamond_boots'
	], item => {item.maxDamage = 800})

	// Polymer
	event.modify([
	'alexscaves:hazmat_mask',
	'alexscaves:hazmat_chestplate',
	'alexscaves:hazmat_leggings',
	'alexscaves:hazmat_boots'
	], item => {item.maxDamage = 1225})

	// Necromium
	event.modify([
	'caverns_and_chasms:necromium_helmet',
	'caverns_and_chasms:necromium_chestplate',
	'caverns_and_chasms:necromium_leggings',
	'caverns_and_chasms:necromium_boots'
	], item => {item.maxDamage = 1425})

	// Netherite
	event.modify([
	'minecraft:netherite_helmet',
	'minecraft:netherite_chestplate',
	'minecraft:netherite_leggings',
	'minecraft:netherite_boots'
	], item => {item.maxDamage = 1750})

	// Sanguine
	event.modify([
	'caverns_and_chasms:sanguine_helmet',
	'caverns_and_chasms:sanguine_chestplate',
	'caverns_and_chasms:sanguine_leggings',
	'caverns_and_chasms:sanguine_boots'
	], item => {item.maxDamage = 1000})
	
	// Other
	maxDura('environmental:yak_pants', 250)
	maxDura('quark:forgotten_hat', 250)

	maxDura('minecraft:elytra', 350)
	maxDura('alexscaves:rainbounce_boots', 350)

	maxDura('alexscaves:hood_of_darkness', 400)
	maxDura('alexscaves:cloak_of_darkness', 400)

	maxDura('goated:barbaric_helmet', 500)

	maxDura('autumnity:snail_shell_chestplate', 800)
	maxDura('minecraft:turtle_helmet', 800)
	maxDura('etcetera:tidal_helmet', 1000)
})