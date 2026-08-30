LootJS.lootTables(event => {
    event.getLootTable("nomansland:chests/alchemist_pot_artisanship")
        .firstPool()
        .addEntry(
            LootEntry.of("supplementaries:ash").withWeight(20).setCount([3, 6])
        )
        .addEntry(
            LootEntry.of("farmersdelight:straw").withWeight(20).setCount([3, 6])
        )
        .addEntry(
            LootEntry.of("nirvana:weed").withWeight(25).setCount([2, 5])
        )
        .addEntry(
            LootEntry.of("nirvana:old_pipe").withWeight(10)
        )
        .addEntry(
            LootEntry.of("wayfarer_core:ancient_blessing").withWeight(10)
        )
        .addEntry(
            LootEntry.of("minecraft:rabbit_hide").withWeight(50).setCount([3, 6])
        )
        .addEntry(
            LootEntry.of("wayfarer_core:wax").withWeight(30).setCount([2, 3])
        )
        .addEntry(
            LootEntry.of("wayfarer_core:raw_tin").withWeight(50).setCount([1, 3])
        )
        .addEntry(
            LootEntry.of("wayfarer_core:raw_lead").withWeight(15).setCount([1, 2])
        )
        .addEntry(
            LootEntry.of("wayfarer_core:mercury_droplet").withWeight(15).setCount([1, 2])
        )
        .addEntry(
            LootEntry.of("nomansland:sulfur").withWeight(25).setCount([1, 2])
        )
        .addEntry(
            LootEntry.of("nomansland:orpiment").withWeight(5)
        )

    event.getLootTable("nomansland:archaeology/alchemist_ruins")
        .firstPool()
        .addEntry(
            LootEntry.of("farmersdelight:straw").withWeight(20)
        )
        .addEntry(
            LootEntry.of("nirvana:weed").withWeight(25)
        )
        .addEntry(
            LootEntry.of("nirvana:old_pipe").withWeight(10)
        )
        .addEntry(
            LootEntry.of("wayfarer_core:ancient_blessing").withWeight(10)
        )
        .addEntry(
            LootEntry.of("wayfarer_core:raw_tin").withWeight(50)
        )
        .addEntry(
            LootEntry.of("wayfarer_core:raw_lead").withWeight(15)
        )
        .addEntry(
            LootEntry.of("wayfarer_core:mercury_droplet").withWeight(15)
        )
        .addEntry(
            LootEntry.of("nomansland:sulfur").withWeight(25)
        )
        .addEntry(
            LootEntry.of("nomansland:orpiment").withWeight(5)
        )

    //Desert ruins
    event.getLootTable("nova_structures:chests/desert_ruins/desert_ruin_grave")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/desert_pyramid")
            )
        })

    event.getLootTable("nova_structures:chests/desert_ruins/desert_ruin_main_temple")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/desert_pyramid")
            )
            pool.rolls(2)
        })

    event.getLootTable("nova_structures:chests/desert_ruins/desert_ruin_house")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(5).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sand").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(5).setCount([1, 3])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(15).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:copper_ingot").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:copper_nugget").withWeight(5).setCount([6, 12])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(10).setCount([2, 4])
            )
        })

    //igloo
    event.getLootTable("minecraft:chests/igloo_chest")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    //nether skeleton tower
    event.getLootTable("nova_structures:chests/nether_skeleton_tower/skeleton_tower_camp")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:pots/pot_piglin")
            )
            pool.rolls([2, 3])
        })

    event.getLootTable("nova_structures:chests/nether_skeleton_tower/skeleton_tower_supply")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:pots/pot_piglin")
            )
            pool.rolls([2, 3])
        })

    event.getLootTable("nova_structures:chests/nether_skeleton_tower/skeleton_tower_chest")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/nether_bridge")
            )
        })

    //piglins
    event.getLootTable("nova_structures:chests/piglin_camp/chest")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/hamlet/hamlet")
            )
        })

    event.getLootTable("nova_structures:chests/piglin_donjon/donjon_generic")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/bastion_other")
            )
        })

    event.getLootTable("nova_structures:chests/piglin_outstation/outstation_generic")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/bastion_other")
            )
        })

    event.getLootTable("nova_structures:chests/piglin_outstation/outstation_tower")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/bastion_bridge")
            )
        })

    event.getLootTable("nova_structures:chests/piglin_outstation/outstation_treasure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/bastion_treasure")
            )
        })
        
    //jungle ruins
    event.getLootTable("nova_structures:chests/jungle_ruins/jungle_ruins_house")
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
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([2, 4])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(15).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:copper_ingot").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:copper_nugget").withWeight(5).setCount([6, 12])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(10).setCount([2, 4])
            )
        })

    event.getLootTable("nova_structures:chests/jungle_ruins/jungle_ruins_main_temple")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/jungle_temple")
            )
        })

    event.getLootTable("nova_structures:chests/jungle_ruins/jungle_ruins_main_temple_wild")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/jungle_temple")
            )
        })

    //lone citadel
    event.getLootTable("nova_structures:chests/lone_citadel/c_banner")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_reward")
            )
        })

    event.getLootTable("nova_structures:chests/lone_citadel/c_cold_barrel")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_reward")
            )
        })

    event.getLootTable("nova_structures:chests/lone_citadel/c_forge")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_materials")
            )
        })

    event.getLootTable("nova_structures:chests/lone_citadel/c_forge_chest")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_materials")
            )
        })

    event.getLootTable("nova_structures:chests/lone_citadel/c_supply")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_materials")
            )
        })

    event.getLootTable("nova_structures:chests/lone_citadel/c_library")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_library")
            )
        })

    event.getLootTable("nova_structures:chests/lone_citadel/c_grave")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_grave")
            )
        })

    event.getLootTable("nova_structures:chests/stray_fort_archer")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:medium_food").when(c => c.randomChance(0.25)),//25%
                    LootEntry.reference("strossel:medium_materials").when(c => c.randomChance(0.33)),//25%
                    LootEntry.reference("strossel:medium_library").when(c => c.randomChance(0.3)),//15%
                    LootEntry.reference("strossel:medium_potions").when(c => c.randomChance(0.4)),//15%
                    LootEntry.reference("strossel:medium_reward"),//20%
                )
            )
        })

    event.getLootTable("nova_structures:chests/stray_fort_loot_generic")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:medium_food").when(c => c.randomChance(0.25)),//25%
                    LootEntry.reference("strossel:medium_materials").when(c => c.randomChance(0.33)),//25%
                    LootEntry.reference("strossel:medium_library").when(c => c.randomChance(0.3)),//15%
                    LootEntry.reference("strossel:medium_potions").when(c => c.randomChance(0.4)),//15%
                    LootEntry.reference("strossel:medium_reward"),//20%
                )
            )
        })

    event.getLootTable("nova_structures:chests/stray_fort_tresure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.alternative(
                    LootEntry.reference("strossel:medium_food").when(c => c.randomChance(0.25)),//25%
                    LootEntry.reference("strossel:medium_materials").when(c => c.randomChance(0.33)),//25%
                    LootEntry.reference("strossel:medium_library").when(c => c.randomChance(0.3)),//15%
                    LootEntry.reference("strossel:medium_potions").when(c => c.randomChance(0.4)),//15%
                    LootEntry.reference("strossel:medium_reward"),//20%
                )
            )
        })

    //toxic_lair
    event.getLootTable("nova_structures:chests/toxic_lair/brewing")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/toxic_lair/generic")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/toxic_lair/kitchen")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/bedroom")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/dirty_clothes")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/gardening")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/general_storage")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/kitchen")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/lab")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/library")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/music_room")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/potion_brewing")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/pumpkin_room")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    event.getLootTable("nova_structures:chests/witch_villa/slime_room")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("strossel:medium_potions")
            )
        })

    //illagers
    event.getLootTable("nova_structures:chests/badland_miner_outpost_forge")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("nova_structures:chests/dungeon_1")
            )
        })

    event.getLootTable("minecraft:chests/woodland_mansion")
        .firstPool()
        .addEntry(
            LootEntry.of("wayfarer_core:allay_calling_bell").withWeight(10)
        )

    event.getLootTable("minecraft:chests/illager_mansion/generic")
        .firstPool()
        .addEntry(
            LootEntry.of("wayfarer_core:allay_calling_bell").withWeight(10)
        )

    event.getLootTable("minecraft:chests/illager_mansion/evoker_chest")
        .firstPool()
        .addEntry(
            LootEntry.of("wayfarer_core:allay_calling_bell").withWeight(10)
        )

    event.getLootTable("nova_structures:chests/illager_hideout_heart_loot")
        .firstPool()
        .addEntry(
            LootEntry.of("wayfarer_core:allay_calling_bell").withWeight(10)
        )

//    event.getLootTable("nova_structures:chests/illager_hideout_tresure")
//       .firstPool()
//       .addEntry(
//            LootEntry.of("wayfarer_core:allay_calling_bell").withWeight(10)
//        )
    })