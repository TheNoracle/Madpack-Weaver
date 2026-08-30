LootJS.lootTables(event => {
//Fortress
    event.getLootTable("minecraft:chests/nether_bridge")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nether_brick").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:wither_rose").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(5).setCount([1, 2])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glowstone_dust").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:magma_cream").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:ghast_tear").withWeight(5).setCount([1, 3])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:fire_charge").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5).setCount([5, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_healing").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:fire_resistance").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(2)
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:nether_wart").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:blaze_powder").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:blaze_rod").withWeight(5).setCount([1, 2])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:lead_ingot").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:lead_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(5).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:netherite_scrap").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:obsidian").withWeight(10).setCount([2, 4])
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
                LootEntry.of("shieldexp:iron_shield").withWeight(3).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_helmet[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_chestplate[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_leggings[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_boots[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_helmet[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_chestplate[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_leggings[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_boots[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:saddle").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_horse_armor").withWeight(4)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_horse_armor").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(15).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.reference("strossel:nether_rings").withWeight(12)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "minecraft:bastion_remnant",
                    "decoration": "target_point",
                    "skip_existing_chunks": false
                }).setName("Bastion Map").withWeight(5)
            )
            pool.rolls([2, 3])
        })


    event.getLootTable("minecraft:chests/nether_fortress/fort_inside")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/nether_bridge")
            )
        })

    event.getLootTable("minecraft:chests/nether_fortress/fort_inside_generic")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/nether_bridge")
            )
        })

    event.getLootTable("nova_structures:chests/nether_keep/fortress_overhaul_loot")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/nether_bridge")
            )
        })

    event.getLootTable("nova_structures:chests/nether_port/nether_port_chest")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/nether_bridge")
            )
        })

    event.getLootTable("nova_structures:chests/nether_port/nether_port_supplies")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.reference("minecraft:chests/nether_bridge")
            )
        })

//Bastion
    event.getLootTable("minecraft:chests/bastion_bridge")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:fire_charge").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:spectral_arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5).setCount([5, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_healing").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:fire_resistance").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nether_wart").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(2)
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:grume").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:netherite_scrap").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:obsidian").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(10).setCount([1, 2])
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:mace").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword[wayfarer_core:upgrade_count=1]").withWeight(18).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe[wayfarer_core:upgrade_count=1]").withWeight(18).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword[wayfarer_core:upgrade_count=2]").withWeight(12).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe[wayfarer_core:upgrade_count=2]").withWeight(12).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots[wayfarer_core:upgrade_count=2]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "minecraft:fortress",
                    "decoration": "target_point",
                    "skip_existing_chunks": false
                }).setName("Fortress Map").withWeight(5)
            )
            pool.addEntry(
                LootEntry.reference("strossel:nether_rings").withWeight(10)
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_pigstep").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:piglin_banner_pattern").withWeight(10)
            )
            pool.when(conditions => {
                conditions.randomChance(0.2)
            })
        })

    event.getLootTable("minecraft:chests/bastion_hoglin_stable")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crimson_fungus").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cooked_porkchop").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:smoked_ham").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rabbit_hide").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:wax").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nether_wart").withWeight(5).setCount([2, 4])
            )
            pool.rolls([3, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:spectral_arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_healing").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:fire_resistance").withWeight(5).setCount([1, 2])
            )
            pool.rolls(2)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:grume").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:mace").withWeight(5).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:saddle").withWeight(25)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "minecraft:fortress",
                    "decoration": "target_point",
                    "skip_existing_chunks": false
                }).setName("Fortress Map").withWeight(5)
            )
            pool.addEntry(
                LootEntry.reference("strossel:nether_rings").withWeight(5)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_pigstep").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:piglin_banner_pattern").withWeight(10)
            )
            pool.when(conditions => {
                conditions.randomChance(0.1)
            })
        })

    event.getLootTable("minecraft:chests/bastion_other")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(5).setCount([1, 2])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glowstone_dust").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:magma_cream").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:ghast_tear").withWeight(5).setCount([1, 3])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:crimson_fungus").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cooked_porkchop").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:smoked_ham").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nether_wart").withWeight(10).setCount([2, 4])
            )
            pool.rolls(2)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:spectral_arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5).setCount([5, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_healing").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:fire_resistance").withWeight(5).setCount([1, 2])
            )
            pool.rolls(2)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:grume").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:mace").withWeight(5).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(2)
            )
            pool.addEntry(
                LootEntry.reference("strossel:nether_rings").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "minecraft:fortress",
                    "decoration": "target_point",
                    "skip_existing_chunks": false
                }).setName("Fortress Map").withWeight(5)
            )
            pool.rolls(1)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_pigstep").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:piglin_banner_pattern").withWeight(10)
            )
            pool.when(conditions => {
                conditions.randomChance(0.05)
            })
        })

    event.getLootTable("minecraft:chests/bastion_treasure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:grume").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_ingot").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:iron_nugget").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_block").withWeight(25).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(25).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:netherite_scrap").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:obsidian").withWeight(5).setCount([2, 4])
            )
            pool.rolls([6])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword[wayfarer_core:upgrade_count=3]").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe[wayfarer_core:upgrade_count=3]").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet[wayfarer_core:upgrade_count=3]").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate[wayfarer_core:upgrade_count=3]").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings[wayfarer_core:upgrade_count=3]").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots[wayfarer_core:upgrade_count=3]").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(5)
            )
            pool.addEntry(
                LootEntry.reference("strossel:nether_rings").withWeight(10)
            )
            pool.rolls(3)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:mace[wayfarer_core:upgrade_count=1]").withWeight(3).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:mace[wayfarer_core:upgrade_count=2]").withWeight(2).damage([0.2, 0.8])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_pigstep").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:piglin_banner_pattern").withWeight(10)
            )
        })

//Hamlet
    event.getLootTable("nova_structures:chests/hamlet/hamlet")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(5).setCount([1, 2])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glowstone_dust").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:quartz").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:magma_cream").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:ghast_tear").withWeight(5).setCount([1, 3])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:crimson_fungus").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cooked_porkchop").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:smoked_ham").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nether_wart").withWeight(10).setCount([2, 4])
            )
            pool.rolls(2)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:spectral_arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(5).setCount([4, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_healing").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_fire_resistance").withWeight(5).setCount([1, 2])
            )
            pool.rolls(2)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:grume").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:mace").withWeight(5).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_sword[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_axe[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots").withWeight(9).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_chestplate[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_leggings[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_boots[wayfarer_core:upgrade_count=1]").withWeight(6).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(2)
            )
            pool.addEntry(
                LootEntry.reference("strossel:nether_rings").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "minecraft:fortress",
                    "decoration": "target_point",
                    "skip_existing_chunks": false
                }).setName("Fortress Map").withWeight(5)
            )
            pool.rolls(1)
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_pigstep").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:piglin_banner_pattern").withWeight(10)
            )
            pool.when(conditions => {
                conditions.randomChance(0.05)
            })
        })

    event.getLootTable("nova_structures:chests/hamlet/hamlet_tresure")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:grume").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(20).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(15).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:netherite_scrap").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:obsidian").withWeight(5).setCount([2, 4])
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:mace").withWeight(12).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:mace[wayfarer_core:upgrade_count=1]").withWeight(8).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.reference("strossel:nether_rings").withWeight(10)
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "minecraft:fortress",
                    "decoration": "target_point",
                    "skip_existing_chunks": false
                }).setName("Fortress Map").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").jsonFunction({
                    "function": "minecraft:exploration_map",
                    "destination": "minecraft:bastion_remnant",
                    "decoration": "target_point",
                    "skip_existing_chunks": false
                }).setName("Bastion Map").withWeight(10)
            )
        })

    event.getLootTable("nova_structures:pots/pot_piglin")
        .clear()
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glowstone_dust").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:magma_cream").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:crimson_fungus").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:nether_wart").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:wax").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.empty().withWeight(15)
            )
        })
})