LootJS.lootTables(event => {
//surface ruins
    event.getLootTable("nova_structures:chests/dungeon_1")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_materials").when(c => c.randomChance(0.4)),//40%
                    LootEntry.reference("strossel:basic_food").when(c => c.randomChance(0.66)),//40%
                    LootEntry.reference("strossel:basic_mine").when(c => c.randomChance(0.5)),//10%
                    LootEntry.reference("strossel:basic_potions").when(c => c.randomChance(0.5)),//5%
                    LootEntry.reference("strossel:empty")//5%
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:surface_discs")
            )
            pool.when(conditions => {
                conditions.randomChance(0.05)
            })
        })

    event.getLootTable("nova_structures:chests/dungeon_2")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("nova_structures:chests/dungeon_3")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("nova_structures:chests/dungeon_4")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("nova_structures:chests/dungeon_5")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("nova_structures:chests/dungeon_6")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("nova_structures:chests/dungeon_7")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_armorer")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_toolsmith")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_weaponsmith")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_butcher")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_fisher")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_cartographer")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_fletcher")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_mason")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_shepherd")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_tannery")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_temple")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_desert_house")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_plains_house")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_savanna_house")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_snowy_house")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/village/village_taiga_house")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("nova_structures:pots/pot_wild_ruin")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_pot").when(c => c.randomChance(0.9)),
                    LootEntry.reference("strossel:seed_pot")
                )
            )
        })

    event.getLootTable("nova_structures:pots/pot_generic_ruin")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_pot").when(c => c.randomChance(0.9)),
                    LootEntry.reference("strossel:seed_pot")
                )
            )
        })

    event.getLootTable("nova_structures:pots/pot_basic")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_pot").when(c => c.randomChance(0.9)),
                    LootEntry.reference("strossel:seed_pot")
                )
            )
        })

    event.getLootTable("minecraft:archaelogy/ruins")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:poisonous_potato").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:skeleton_skull").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:charcoal").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ingot_mould").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint_and_steel").withWeight(3).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword").withWeight(3).damage([0.05, 0.15])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe").withWeight(3).damage([0.05, 0.15])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife").withWeight(2).damage([0.05, 0.15])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bow").withWeight(3).damage([0.05, 0.15])
            )
            pool.addEntry(
                LootEntry.of("minecraft:shield").withWeight(2).damage([0.05, 0.15])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:wooden_shield").withWeight(1).damage([0.2, 0.6])
            )
        })

//Illagers
    event.getLootTable("nova_structures:chests/illager_camp")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([4, 16])
            )
            pool.addEntry(
                LootEntry.of("minecraft:feather").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:tripwire_hook").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:dark_oak_sapling").withWeight(5).setCount([5, 7])
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").withWeight(5).setCount([1, 3])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:apple").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bread").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crossbow").damage([0.1, 0.6]).withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "pillager_outpost",
                    "decoration": "mansion",
                    "skip_existing_chunks": false
                }).setName("Outpost Map").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:allay_calling_bell").withWeight(1)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_stal").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_mellohi").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:goat_horn[minecraft:instrument=seek_goat_horn]").withWeight(20)
            )
            pool.when(conditions => {
                conditions.randomChance(0.2)
            })
        })

    event.getLootTable("nova_structures:chests/badland_miner_outpost_towers")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_iron").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:dark_oak_sapling").withWeight(5).setCount([5, 7])
            )
            pool.addEntry(
                LootEntry.of("minecraft:tripwire_hook").withWeight(5).setCount([1, 2])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 20])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:wooden_scaffolding").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:apple").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bread").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(5).setCount([2, 4])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crossbow").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(2)
            )
        })

    event.getLootTable("nova_structures:chests/illager_hideout_lesser_tresure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/badland_miner_outpost_towers")
            )
        })

    event.getLootTable("minecraft:chests/pillager_outpost")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(10).setCount([10, 24])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strength").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(5)
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(2).setCount([3, 6])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:crossbow").damage([0.6, 0.8]).withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:allay_calling_bell").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:ominous_bottle").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:ominous_bottle[minecraft:ominous_bottle_amplifier=1]").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:ominous_bottle[minecraft:ominous_bottle_amplifier=2]").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:saddle").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:spyglass").withWeight(5)
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "on_woodland_explorer_maps",
                    "decoration": "mansion",
                    "skip_existing_chunks": false
                }).setName("Mansion Map").withWeight(1)
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_stal").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_mellohi").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:goat_horn[minecraft:instrument=seek_goat_horn]").withWeight(20)
            )
            pool.when(conditions => {
                conditions.randomChance(0.5)
            })
        })

    event.getLootTable("nova_structures:chests/pillager_outpost_treasure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/pillager_outpost")
            )
        })

    event.getLootTable("nova_structures:chests/pillager_outpost_kitchen")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:inhabited_food")
            )
        })

    event.getLootTable("nova_structures:pots/pot_illager_camp")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_pot").when(c => c.randomChance(0.8)),
                    LootEntry.reference("strossel:seed_pot")
                )
            )
        })

    event.getLootTable("nova_structures:pots/pot_pillager_outpost")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_pot").when(c => c.randomChance(0.8)),
                    LootEntry.reference("strossel:seed_pot")
                )
            )
        })

//Witch Hut
    event.create("nova_structures:chests/mangrove_witchhud")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:basic_potions")
            )
        })

    event.create("minecraft:chests/village/village_swamp_house")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_potions").when(c => c.randomChance(0.5)),
                    LootEntry.reference("nova_structures:chests/dungeon_1")
                )
            )
        })

//Shipwreck
    event.getLootTable("minecraft:chests/shipwreck_treasure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:seagrass").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:kelp").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("spawn:barnacle").withWeight(10).setCount([2, 4])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(2).setCount([3, 6])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:spyglass").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(15)
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(2)
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_creator").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:globe").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:hourglass").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:goblet").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:skull_banner_pattern").withWeight(10)
            )
            pool.rolls([1, 2])
        })

    event.getLootTable("minecraft:chests/shipwreck_map")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:seagrass").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:kelp").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("spawn:barnacle").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water").withWeight(10).setCount([1, 3])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:map").withWeight(15).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:scribing_tools").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:compass").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:antique_ink").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([4, 10])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "on_treasure_maps",
                    "decoration": "red_x",
                    "skip_existing_chunks": false
                }).setName("Buried Treasure Map").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "on_ocean_explorer_maps",
                    "decoration": "monument",
                    "skip_existing_chunks": false
                }).setName("Ocean Monument Map").withWeight(5)
            )
        })

    event.getLootTable("minecraft:chests/shipwreck_supply")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(15).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:seagrass").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:kelp").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("spawn:barnacle").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:poisonous_potato").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10).setCount([1, 3])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:hardtack").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(15).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:fishing_rod").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:water_bucket").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:tropical_fish_bucket").withWeight(5)
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:pumpkin_seeds").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:melon_seeds").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:tomato_seeds").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rice").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("windswept:ginger_root").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cocoa_beans").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:flax_seeds").withWeight(10).setCount([3, 6])
            )
            pool.rolls([2, 3])
        })

//Buried treasure
    event.getLootTable("minecraft:chests/buried_treasure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:sand").withWeight(10).setCount([3, 6])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(2).setCount([6, 12])
            )
            pool.rolls(3)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_shard").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_crystals").withWeight(10).setCount([3, 6])
            )
            pool.rolls(2)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:heart_of_the_sea").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:nautilus_shell").withWeight(10).setCount([2, 6])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(25).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(25).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(2)
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_creator_music_box").withWeight(10)
            )
            pool.when(conditions => {
                conditions.randomChance(0.2)
            })
        })

//Ocean ruin
    event.getLootTable("minecraft:chests/underwater_ruin_small")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(5).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:seagrass").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:kelp").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("spawn:barnacle").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sand").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gravel").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water").withWeight(5).setCount(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10).setCount([1, 3])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:wooden_scaffolding").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_shard").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_crystals").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:fishing_rod").withWeight(5).damage([0.2, 0.8])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nautilus_shell").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water_breathing").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:thrasher_tooth").withWeight(3)
            )
        })

    event.getLootTable("minecraft:chests/underwater_ruin_big")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(5).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:seagrass").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:kelp").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("spawn:barnacle").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sand").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gravel").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10).setCount([1, 3])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(5).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:wooden_scaffolding").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_shard").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_crystals").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:fishing_rod").withWeight(10).damage([0.2, 0.8])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nautilus_shell").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:heart_of_the_sea").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:thrasher_tooth").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water_breathing").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "conduit_ruin",
                    "decoration": "monument",
                    "skip_existing_chunks": false
                }).setName("Ocean Pilgrim Map").withWeight(10).when(c => c.matchStructure("minecraft:ocean_ruin"))
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "on_ocean_explorer_maps",
                    "decoration": "monument",
                    "skip_existing_chunks": false
                }).setName("Ocean Explorer Map").withWeight(10).when(c => c.matchStructure("nova_structures:conduit_ruin"))
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:disc_fragment_atlantis").withWeight(20).setCount([2, 4])
            )
            pool.when(conditions => {
                conditions.randomChance(0.33)
            })
        })

    event.getLootTable("nova_structures:chests/conduit_ruin/conduit_ruin_big")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/underwater_ruin_big")
            )
        })

    event.getLootTable("nova_structures:chests/conduit_ruin/conduit_ruin_main")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/underwater_ruin_big")
            )
        })

    event.getLootTable("nova_structures:chests/conduit_ruin/conduit_ruin_small")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/underwater_ruin_small")
            )
        })

    event.getLootTable("minecraft:archaeology/ocean_ruin_cold")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("nomansland:seashells").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_shard").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_crystals").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:thrasher_tooth").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("minecraft:nautilus_shell").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:disc_fragment_atlantis").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:angler_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:explorer_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:brewer_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:howl_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:predator_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:cast_pottery_sherd").withWeight(3)
            )
        })

    event.getLootTable("minecraft:archaeology/ocean_ruin_warm")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("nomansland:seashells").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_shard").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:prismarine_crystals").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:nautilus_shell").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:disc_fragment_atlantis").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:sniffer_egg").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:snort_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:shelter_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:angler_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:explorer_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:brewer_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:cast_pottery_sherd").withWeight(3)
            )
        })

    event.getLootTable("nova_structures:archaelogy/conduit_ruin")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:archaeology/ocean_ruin_cold")
            )
        })

//Desert pyramid
    event.getLootTable("minecraft:chests/desert_pyramid")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:sand").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:paper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(15).setCount([3, 6])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lapis_lazuli").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(5)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword").withWeight(2).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe").withWeight(2).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife").withWeight(2).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:saddle").withWeight(5)
            )
            pool.rolls([1, 2])
        })

    event.getLootTable("minecraft:archaeology/desert_pyramid")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lapis_lazuli").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:scrape_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:blade_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:skull_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:prize_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:plenty_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:boom_pottery_sherd").withWeight(3)
            )
        })

//Desert remnant
    event.getLootTable("nova_structures:archaelogy/desert_ruin_ruins")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lapis_lazuli").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:scrape_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:blade_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:skull_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:prize_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:plenty_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:boom_pottery_sherd").withWeight(3)
            )
        })

    event.getLootTable("nova_structures:pots/pot_desert_ruin")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(5).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sand").withWeight(5).setCount([1, 4])
            )
        })

    event.getLootTable("nova_structures:chests/desert_ruins/desert_ruin_lesser_treasure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:sand").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:paper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lapis_lazuli").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(5)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword").withWeight(2).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe").withWeight(2).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife").withWeight(2).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:saddle").withWeight(5)
            )
            pool.rolls([1, 2])
        })

//Jungle temple
    event.getLootTable("minecraft:chests/jungle_temple")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:vine").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(15).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(5).setCount([1, 3])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(5)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:bamboo").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:melon_seeds").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cocoa_beans").withWeight(10).setCount([3, 6])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
            pool.rolls(2)
        })

//Trail ruins
    event.getLootTable("minecraft:archaeology/trail_ruins_common")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(25)
            )
            pool.addEntry(
                LootEntry.of("nomansland:seashells").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:charcoal").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ingot_mould").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:howl_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:sheaf_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:friend_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:arms_up_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:burn_pottery_sherd").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:cast_pottery_sherd").withWeight(3)
            )
        })

    event.getLootTable("minecraft:archaeology/trail_ruins_rare")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("nomansland:seashells").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:charcoal").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ingot_mould").withWeight(20).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:howl_pottery_sherd").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:sheaf_pottery_sherd").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:friend_pottery_sherd").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:arms_up_pottery_sherd").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:burn_pottery_sherd").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:cast_pottery_sherd").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "nomansland:alchemist_ruins",
                    "decoration": "nomansland:alchemist_ruins",
                    "skip_existing_chunks": false
                }).setName("Ancestral Ruins Map").withWeight(15)
            )
        })

    event.getLootTable("nomansland:archaeology/alchemist_maps")
        .clear()

//Ruined portal
    event.getLootTable("minecraft:chests/ruined_portal")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:netherrack").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:magma_block").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crying_obsidian").withWeight(5).setCount([2, 4])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glowstone_dust").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:magma_cream").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:rift_sediment").withWeight(15).setCount([2, 4])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:flint_and_steel").withWeight(10).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:fire_charge").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(15).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet").withWeight(10).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:fire_resistance").withWeight(10)
            )
            pool.rolls([2, 3])
        })

//Bunker and Undead Crypt
    event.getLootTable("nova_structures:chests/bunker_altar")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("nova_structures:chests/undead_crypts_grave")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_grave").when(c => c.matchStructure("nova_structures:bunker")),
                    LootEntry.reference("strossel:medium_grave")
                )
            )
        })

    event.getLootTable("nova_structures:pots/pot_bunker")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:basic_pot").when(c => c.randomChance(0.9)),
                    LootEntry.reference("strossel:seed_pot")
                )
            )
        })

    event.getLootTable("nova_structures:pots/pot_undead_crypt")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:bone_ash").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(15).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone_meal").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:silverfish_eggs").withWeight(3).setCount([2, 4])
            )
        })

//creeping crypt
    event.getLootTable("nova_structures:chests/creeping_crypt/crypt_grave")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_grave")
            )
        })

    event.getLootTable("nova_structures:chests/creeping_crypt/crypt_hallway")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_grave")
            )
        })

    event.getLootTable("nova_structures:chests/creeping_crypt/vault_creeping")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("tolerable_creepers:creeper_spores").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:mischief_arrow").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:spore_bomb").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("minecraft:ominous_bottle").withWeight(10)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(2).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(2).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:chthonic_calculus").withWeight(5)
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife[wayfarer_core:upgrade_count=1]").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife[wayfarer_core:upgrade_count=2]").withWeight(2).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bow").withWeight(5).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crossbow").withWeight(5).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:golden_shield").withWeight(7).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:iron_shield").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_helmet").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_chestplate").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_leggings").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_boots").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(8)
            )
            pool.addEntry(
                LootEntry.of("minecraft:saddle").withWeight(8)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_horse_armor").withWeight(4)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_horse_armor").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.reference("strossel:high_rings").withWeight(8)
            )
            pool.rolls([1, 2])
        })

    event.getLootTable("nova_structures:spawners/creeping_crypt/spawner_creeping")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("tolerable_creepers:creeper_spores").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:mischief_arrow").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:spore_bomb").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:poison").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:poison").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:slowness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:slowness").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:weakness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:weakness").withWeight(1)
            )
            pool.rolls([1, 2])
        })

    event.getLootTable("nova_structures:spawners/creeping_crypt/spawner_creeping_ominous")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("tolerable_creepers:creeper_spores").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:mischief_arrow").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:spore_bomb").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(7).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(7).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(7).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(7).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:poison").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:poison").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:slowness").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:slowness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:weakness").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:weakness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strength").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:swiftness").withWeight(7)
            )
            pool.rolls([2, 3])
        })

    event.getLootTable("nova_structures:pots/pot_creeping_crypt")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:creeper_spores").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:bone_ash").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone_meal").withWeight(5).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:silverfish_eggs").withWeight(3).setCount([2, 4])
            )
        })

    event.getLootTable("nova_structures:archaelogy/crypt")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(25)
            )
            pool.addEntry(
                LootEntry.of("minecraft:skeleton_skull").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(25)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword[wayfarer_core:upgrade_count=1]").withWeight(5).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe[wayfarer_core:upgrade_count=1]").withWeight(5).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife[wayfarer_core:upgrade_count=1]").withWeight(2).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bow").withWeight(3).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crossbow").withWeight(2).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:shield").withWeight(3).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:golden_shield").withWeight(2).damage([0.1, 0.3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.3]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.3]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.3]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.3]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.reference("strossel:high_rings").withWeight(2)
            )
        })

//undeground shelter
    event.getLootTable("nomansland:chests/underground_shelter")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:medium_food").when(c => c.randomChance(0.25)),//25%
                    LootEntry.reference("strossel:medium_mine").when(c => c.randomChance(0.33)),//25%
                    LootEntry.reference("strossel:medium_materials").when(c => c.randomChance(0.25)),//12%
                    LootEntry.reference("strossel:mine_materials").when(c => c.randomChance(0.33)),//12%
                    LootEntry.reference("strossel:medium_library").when(c => c.randomChance(0.5)),//12%
                    LootEntry.reference("strossel:medium_potions").when(c => c.randomChance(0.5)),//6%
                    LootEntry.reference("strossel:medium_reward"),//6%
                )
            )
        })

//small dungeon
    event.getLootTable("minecraft:chests/simple_dungeon")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:medium_food").when(c => c.randomChance(0.25)),//25%
                    LootEntry.reference("strossel:medium_materials").when(c => c.randomChance(0.33)),//25%
                    LootEntry.reference("strossel:medium_mine").when(c => c.randomChance(0.4)),//20%
                    LootEntry.reference("strossel:medium_library").when(c => c.randomChance(0.5)),//15%
                    LootEntry.reference("strossel:medium_potions").when(c => c.randomChance(0.5)),//7%
                    LootEntry.reference("strossel:medium_reward"),//7%
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:dungeon_discs")
            )
            pool.when(conditions => {
                conditions.randomChance(0.1)
            })
        })


    event.getLootTable("nomansland:chests/small_dungeon_core")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_reward")
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:dungeon_discs")
            )
            pool.when(conditions => {
                conditions.randomChance(0.1)
            })
        })


    event.getLootTable("nomansland:chests/dungeon_kitchen")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_food")
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:seed_pot")
            )
            pool.rolls(2)
        })

//mineshaft
    event.getLootTable("minecraft:chests/abandoned_mineshaft")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:mine_materials").when(c => c.randomChance(0.4)),//40%
                    LootEntry.reference("strossel:badlands_mine").when(c => c.matchStructure("minecraft:mineshaft_mesa")),//60%
                    LootEntry.reference("strossel:medium_mine")//60%
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:badlands_mine_reward").when(c => c.matchStructure("minecraft:mineshaft_mesa")),
                    LootEntry.reference("strossel:mine_reward")
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_chirp").withWeight(12)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_13").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_11").withWeight(2)
            )
            pool.when(conditions => {
                conditions.randomChance(0.1)
            })
        })


//trial chambers
    event.getLootTable("minecraft:chests/trial_chambers/reward")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:wind_charge").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("minecraft:ominous_bottle").withWeight(10)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(2).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(2).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:chthonic_calculus").withWeight(5)
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:stormtuning_fork").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife[wayfarer_core:upgrade_count=1]").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife[wayfarer_core:upgrade_count=2]").withWeight(2).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bow").withWeight(5).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crossbow").withWeight(5).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:golden_shield").withWeight(7).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:iron_shield").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_helmet").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_chestplate").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_leggings").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_boots").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(8)
            )
            pool.addEntry(
                LootEntry.of("minecraft:saddle").withWeight(8)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_horse_armor").withWeight(4)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_horse_armor").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(8)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:dungeon_discs")
            )
            pool.when(conditions => {
                conditions.randomChance(0.1)
            })
        })


    event.getLootTable("minecraft:chests/trial_chambers/reward_ominous")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:sulfur").withWeight(25).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_lead").withWeight(25).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_gold").withWeight(25).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:rift_sediment").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:chthonic_calculus").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:mercury_droplet").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:lifesalt").withWeight(10)
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:stormtuning_fork[wayfarer_core:upgrade_count=1]").withWeight(10).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:stormtuning_fork[wayfarer_core:upgrade_count=2]").withWeight(5).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:heart_crystal").withWeight(15).damage([0.25, 0.75])
            )
            pool.addEntry(
                LootEntry.reference("strossel:high_rings").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(10)
            )
            pool.rolls([1, 2])
        })

    event.getLootTable("caverns_and_chasms:chests/trial_chambers/token")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:wind_charge").withWeight(12).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:poison").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:poison").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:slowness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:slowness").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:weakness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:weakness").withWeight(1)
            )
            pool.rolls([1, 2])
        })

    event.getLootTable("caverns_and_chasms:chests/trial_chambers/token_ominous")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:wind_charge").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(7).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(7).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:poison").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:poison").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:slowness").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:slowness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:weakness").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:weakness").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strength").withWeight(7)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:swiftness").withWeight(7)
            )
            pool.rolls([2, 3])
        })

    event.getLootTable("minecraft:chests/trial_chambers/corridor")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:medium_materials").when(c => c.randomChance(0.6)),//60%
                    LootEntry.reference("strossel:medium_food").when(c => c.randomChance(0.5)),//20%
                    LootEntry.reference("strossel:medium_potions")//20%
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:dungeon_discs")
            )
            pool.when(conditions => {
                conditions.randomChance(0.1)
            })
        })


    event.getLootTable("minecraft:chests/trial_chambers/entrance")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/trial_chambers/corridor")
            )
        })

    event.getLootTable("minecraft:chests/trial_chambers/intersection")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/trial_chambers/corridor")
            )
        })

    event.getLootTable("minecraft:chests/trial_chambers/intersection_barrel")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/trial_chambers/corridor")
            )
        })

    event.getLootTable("minecraft:chests/trial_chambers/supply")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/trial_chambers/corridor")
            )
        })

    event.getLootTable("minecraft:pots/trial_chambers/corridor")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:medium_pot").when(c => c.randomChance(0.9)),
                    LootEntry.reference("strossel:seed_pot")
                )
            )
        })

//ancient city
    event.getLootTable("minecraft:chests/ancient_city")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:sculk").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sculk_vein").withWeight(25).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:echo_shard").withWeight(7).setCount([1, 3])
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gray_wool").withWeight(20).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gray_carpet").withWeight(20).setCount([5, 10])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:high_reward").when(c => c.randomChance(0.4)),//40%
                    LootEntry.reference("strossel:high_materials").when(c => c.randomChance(0.33)),//20%
                    LootEntry.reference("strossel:high_library").when(c => c.randomChance(0.37)),//15%
                    LootEntry.reference("strossel:high_potions").when(c => c.randomChance(0.2)),//15%
                    LootEntry.reference("strossel:high_food").when(c => c.randomChance(0.5)),//5%
                    LootEntry.reference("strossel:high_mine")//5%
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:disc_fragment_5").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_13").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_11").withWeight(5)
            )
            pool.when(conditions => {
                conditions.randomChance(0.1)
            })
        })


    event.getLootTable("minecraft:chests/ancient_city_center")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/ancient_city")
            )
        })

    event.getLootTable("abundant_atmosphere:chests/ancient_city_alchemy_room")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/ancient_city")
            )
        })

    event.getLootTable("nova_structures:chests/ancient_city")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/ancient_city")
            )
        })

    event.getLootTable("nova_structures:chests/ancient_city_ice_box")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/ancient_city_ice_box")
            )
        })

//Stronghold
    event.getLootTable("minecraft:chests/stronghold/generic")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minersdelight:silverfish_eggs").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:rift_sediment").withWeight(5).setCount([3, 6])
            )
            pool.rolls([0, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:ender_pearl").withWeight(25).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:ender_eye").withWeight(15)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:discharged_matrix").withWeight(2)
            )
            pool.rolls([1, 2])
            pool.when(conditions => {
                conditions.randomChance(0.5)
            })
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:high_reward").when(c => c.randomChance(0.4)),//40%
                    LootEntry.reference("strossel:high_materials").when(c => c.randomChance(0.25)),//15%
                    LootEntry.reference("strossel:high_library").when(c => c.randomChance(0.2)),//10%
                    LootEntry.reference("strossel:high_potions").when(c => c.randomChance(0.2)),//10%
                    LootEntry.reference("strossel:high_food").when(c => c.randomChance(0.33)),//15%
                    LootEntry.reference("strossel:high_mine")//5%
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:stronghold_discs").when(c => c.randomChance(0.2))
            )
        })


    event.getLootTable("minecraft:chests/stronghold_crossing")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:high_food")
            )
        })
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:high_food")
            )
        })

    event.getLootTable("minecraft:chests/stronghold_library")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:high_library")
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:high_library").when(c => c.randomChance(0.66)),
                    LootEntry.reference("strossel:high_potions")
                )
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:stronghold_discs")
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:stronghold_discs")
            )
        })


    event.getLootTable("minecraft:chests/stronghold/base")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/stronghold/generic")
            )
        })

    event.getLootTable("minecraft:chests/stronghold/jail")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/stronghold/generic")
            )
        })

    event.getLootTable("minecraft:chests/stronghold/jail_cell")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/stronghold/generic")
            )
        })

    event.getLootTable("minecraft:chests/stronghold/sewer")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/stronghold/generic")
            )
        })

    event.getLootTable("minecraft:chests/stronghold/library")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/stronghold_library")
            )
        })

    event.getLootTable("minecraft:chests/stronghold/library_bookshelf")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/stronghold_library")
            )
        })

    event.getLootTable("minecraft:chests/stronghold/library_eye")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/stronghold_library")
            )
        })

    event.getLootTable("minecraft:chests/stronghold/nether_portal")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/ruined_portal")
            )
        })

//Misc
    event.getLootTable("nova_structures:chests/food_supply")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:inhabited_food")
            )
        })

    event.getLootTable("nova_structures:chests/water_supply")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(5).setCount([3, 6])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:water_bucket").withWeight(20).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bucket").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(5).setCount([1, 3])
            )
            pool.rolls([2, 3])
        })

    event.getLootTable("nova_structures:chests/mining_supply")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:mine_materials").when(c => c.randomChance(0.2)),//20%
                    LootEntry.reference("strossel:badlands_mine").when(c => c.matchStructure(["minecraft:mineshaft_mesa", "nova_structures:badlands_miner_outpost"])),//80%
                    LootEntry.reference("strossel:medium_mine")//80%
                )
            )
        })
})