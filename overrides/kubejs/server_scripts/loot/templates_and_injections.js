LootJS.lootTables(event => {
//Remove unnecessary injections
    event.clearLootTables(/.*chests\/fd.*/)
    event.getLootTable("nomansland:chests/hardtack_addition").clear()
    event.getLootTable("nomansland:chests/warding_effigy_addition").clear()
    event.getLootTable("nomansland:chests/warding_effigy_extra_addition").clear()
    event.clearLootTables(/envelope:chests.*/)
    event.clearLootTables(/envelope:packages.*/)
    event.getLootTable("envelope:gameplay/charred_pigeon_mail").clear()

//Food
    event.create("strossel:basic_food")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(20).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:red_mushroom").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:poisonous_potato").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("redomesticate:rotten_apple").withWeight(5).setCount([2, 3])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:brown_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:field_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:poreshroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(10).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:hardtack").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("cookscollection:salt").withWeight(5).setCount([2, 4])
            )
            pool.rolls([1, 2])
        })

    event.create("strossel:medium_food")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(15).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:red_mushroom").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:poisonous_potato").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(15).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("redomesticate:rotten_apple").withWeight(5).setCount([2, 3])
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:hardtack").withWeight(20).setCount([3, 6])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:brown_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:field_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:poreshroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(15).setCount([2, 6])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:nutritional_bar").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potato").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:baked_potato").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:flour").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("cookscollection:salt").withWeight(10).setCount([2, 4])
            )
            pool.rolls([2, 4])
        })

    event.create("strossel:high_food")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(15).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:red_mushroom").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:poisonous_potato").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("redomesticate:rotten_apple").withWeight(5).setCount([2, 3])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:hardtack").setCount([3, 6])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:brown_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:field_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:poreshroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:nutritional_bar").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_carrot").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:golden_nutritional_bar").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:flour").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("kubejs:corn_flour").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:baked_potato").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potato").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("cookscollection:salt").withWeight(15).setCount([2, 4])
            )
            pool.rolls([3, 4])
        })

    event.create("strossel:inhabited_food")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:apple").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:pear").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("atmospheric:orange").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:lemon").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("atmospheric:passion_fruit").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:carrot").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potato").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:beetroot").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:cabbage").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:cabbage_leaf").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:tomato").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rice").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:onion").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("windswept:ginger_root").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("brewinandchewin:corn").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sweet_berries").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("windswept:wild_berries").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:elderberries").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("environmental:cherries").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("neapolitan:strawberries").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("upgrade_aquatic:mulberry").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("atmospheric:currant").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("nomansland:pine_nuts").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("nomansland:walnuts").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("windswept:chestnuts").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:brown_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:field_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:flour").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("kubejs:corn_flour").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:straw").withWeight(20).setCount([3, 5])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cooked_beef").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cooked_chicken").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cooked_porkchop").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cooked_mutton").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cooked_rabbit").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:horse_steak").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("environmental:cooked_venison").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("naturalist:cooked_bushmeat").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("windswept:cooked_goat").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("autumnity:cooked_turkey_piece").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:smoked_ham").withWeight(3)
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:egg").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sugar").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bowl").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:water").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:honey_bottle").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:milk_bottle").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("cookscollection:salt").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("cookscollection:cooking_oil").withWeight(5).setCount([1, 3])
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:bread").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("brewinandchewin:corn_bread").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("autumnity:pumpkin_bread").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:pickled_beetroot").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("brewinandchewin:flaxen_cheese_wedge").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("brewinandchewin:apple_jelly").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("brewinandchewin:sweet_berry_jam").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:squashberry_jam").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:maple_syrup_bottle").withWeight(5).setCount([1, 2])
            )
            pool.rolls([1, 2])
        })

//Materials
    event.create("strossel:basic_materials")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10).setCount([3, 6])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:straw").withWeight(10).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("naturalist:hide").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("blocksabound:tar").withWeight(10).setCount([2, 4])
            )
            pool.rolls([3, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([3, 7])
            )
            pool.addEntry(
                LootEntry.of("nomansland:wooden_scaffolding").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(7).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:wooden_shield").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("alexscaves:limestone_spear").withWeight(10).setCount([3, 5])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:tiny_horseshoe").damage([0.2, 0.8])
            )
            pool.when(conditions => {
                conditions.randomChance(0.05)
            })
        })

    event.create("strossel:medium_materials")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10).setCount([2, 4])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:copper_ingot").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:copper_nugget").withWeight(5).setCount([3, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([3, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:redstone").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("blocksabound:tar").withWeight(5).setCount([2, 4])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(20).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:wooden_scaffolding").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:torch").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("alexscaves:limestone_spear").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("galosphere:rope_dart").withWeight(10).setCount([4, 8])
            )
            pool.rolls([2, 4])
        })

    event.create("strossel:high_materials")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(10).setCount([2, 4])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([4, 7])
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:copper_ingot").withWeight(6).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:copper_nugget").withWeight(2).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:redstone").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([2, 4])
            )
            pool.rolls([3, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:hardtack").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(5).setCount([5, 1])
            )
            pool.addEntry(
                LootEntry.of("nomansland:wooden_scaffolding").withWeight(5).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:torch").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(10).setCount([6, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:dried_tea_leaves").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("alexscaves:limestone_spear").withWeight(10).setCount([4, 7])
            )
            pool.addEntry(
                LootEntry.of("galosphere:rope_dart").withWeight(10).setCount([5, 10])
            )
            pool.rolls([4, 5])
        })

    event.create("strossel:mine_materials")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:silverfish_eggs").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:feldspar").withWeight(5).setCount([5, 10])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:torch").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:stick").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(20).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:string").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:hardtack").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:rope").withWeight(20).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:wooden_scaffolding").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:explosive").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(7).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(3).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(10).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(7).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("galosphere:rope_dart").withWeight(10).setCount([6, 10])
            )
            pool.rolls([3, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:chain").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rail").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:powered_rail").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bucket").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:brush").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:depth_gauge").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("nomansland:charcoal_filter").withWeight(10)
            )
            pool.rolls([2, 3])
        })

//Library
    event.create("strossel:medium_library")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:book").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:paper").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:feather").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:writable_book").withWeight(5)
            )
            pool.rolls(4)
        })
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([3, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(1).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:scribing_tools").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(1)
            )
            pool.rolls([2, 3])
        })

    event.create("strossel:high_library")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:book").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:paper").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:map").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:feather").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("spawn:pheasant_feather").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:writable_book").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("envelope:letter_and_quill").withWeight(5)
            )
            pool.rolls(5)
        })
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("kubejs:turquoise_shard").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(1).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:scribing_tools").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:antique_ink").withWeight(5)
            )
            pool.addEntry(
                LootEntry.reference("strossel:high_rings").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("newworld:illager_tome").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:hourglass").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:globe").withWeight(5)
            )
            pool.rolls([2, 4])
        })

//Mine
    event.create("strossel:basic_mine")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:dirt").withWeight(20).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gravel").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:cobblestone").withWeight(15).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:rocky_dirt").withWeight(15).setCount([3, 6])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:clay_ball").withWeight(15).setCount([8, 16])
            )
            pool.addEntry(
                LootEntry.of("minecraft:clay").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("blocksabound:tar").withWeight(10).setCount([3, 6])
            )
            pool.rolls([1, 2])
        })

    event.create("strossel:medium_mine")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobblestone").withWeight(20).setCount([4, 10]).matchBiome("nomansland:caves")
            )
            pool.addEntry(
                LootEntry.of("minecraft:cobbled_deepslate").withWeight(20).setCount([4, 10]).matchBiome("nomansland:cave_depths")
            )
            pool.addEntry(
                LootEntry.of("minecraft:gravel").withWeight(10).setCount([4, 10]).matchBiome("nomansland:caves")
            )
            pool.addEntry(
                LootEntry.of("nomansland:silt").withWeight(10).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(15).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:silverfish_eggs").withWeight(3).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("kubejs:deepslate_gravel").withWeight(10).setCount([4, 10]).matchBiome("nomansland:cave_depths")
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(20).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(20).setCount([3, 5]).matchBiome("nomansland:caves")
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_iron").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_gold").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lapis_lazuli").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:redstone").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(3).matchBiome("nomansland:cave_depths")
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_silver").withWeight(2).matchBiome("nomansland:cave_depths")
            )
            pool.rolls([2, 4])
        })

    event.create("strossel:high_mine")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobblestone").withWeight(20).setCount([4, 10]).matchBiome("nomansland:caves")
            )
            pool.addEntry(
                LootEntry.of("minecraft:cobbled_deepslate").withWeight(20).setCount([4, 10]).matchBiome("nomansland:cave_depths")
            )
            pool.addEntry(
                LootEntry.of("minecraft:gravel").withWeight(10).setCount([4, 10]).matchBiome("nomansland:caves")
            )
            pool.addEntry(
                LootEntry.of("kubejs:deepslate_gravel").withWeight(10).setCount([4, 10]).matchBiome("nomansland:cave_depths")
            )
            pool.addEntry(
                LootEntry.of("nomansland:silt").withWeight(10).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(15).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:silverfish_eggs").withWeight(3).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("bitsandbalance:resurfacing").withWeight(3)
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_iron").withWeight(15).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_gold").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_lead").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:magnetite").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lapis_lazuli").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:redstone").withWeight(10).setCount([6, 10])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:cinnabar").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:sulfur").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:orpiment").withWeight(3).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(3).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_silver").withWeight(2).setCount([1, 2])
            )
            pool.rolls([3, 4])
        })

    event.create("strossel:badlands_mine")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobblestone").withWeight(20).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:terracotta").withWeight(20).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gravel").withWeight(10).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:red_sand").withWeight(10).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:pebbles").withWeight(15).setCount([4, 10])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_gold").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_tin").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:raw_copper").withWeight(5).setCount([2, 4])
            )
            pool.rolls([1, 3])
        })

//Reward
    event.create("strossel:medium_reward")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(20).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(5).setCount([1, 2])
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
                LootEntry.of("galosphere:rope_dart").withWeight(10).setCount([4, 8])
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
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("mynethersdelight:golden_egg").withWeight(10)
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([3, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(1).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("dungeonsdelight:stained_scrap_fragment").withWeight(5).setCount([2, 5])
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword[wayfarer_core:upgrade_count=1]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe[wayfarer_core:upgrade_count=1]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife[wayfarer_core:upgrade_count=1]").withWeight(2).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bow").withWeight(10).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:shield").withWeight(7).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:golden_shield").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(8)
            )
            pool.addEntry(
                LootEntry.of("etcetera:chisel").withWeight(10)
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
                LootEntry.of("nomansland:warding_effigy").withWeight(10)
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(3)
            )
            pool.rolls([1, 3])
        })

    event.create("strossel:high_reward")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:arrow").withWeight(15).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("nomansland:firebomb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:ink_bomb").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:spore_bomb").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_healing").withWeight(15).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_regeneration").withWeight(7).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(7).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_swiftness").withWeight(7).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("wayfarer_core:vitality").withWeight(7).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("wayfarer_core:long_vitality").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("caverns_and_chasms:rewind").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("bitsandbalance:returning").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:kunai").withWeight(10).setCount([6, 10])
            )
            pool.addEntry(
                LootEntry.of("galosphere:rope_dart").withWeight(10).setCount([6, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:bandage").withWeight(10).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_bandage").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("mynethersdelight:golden_egg").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("mynethersdelight:enchanted_golden_egg").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(3).setCount([1, 2])
            )
            pool.rolls([3, 5])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(15).setCount([2, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:turquoise")
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(2).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_ingot").withWeight(1)
            )
            pool.rolls([2, 3])
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
                LootEntry.of("minecraft:crossbow").withWeight(10).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:golden_shield").withWeight(7).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:iron_shield").withWeight(3).damage([0.1, 0.6])
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
                LootEntry.of("nomansland:warding_effigy").withWeight(15).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.reference("strossel:high_rings").withWeight(10)
            )
            pool.rolls([2, 4])
        })

    event.create("strossel:mine_reward")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_pickaxe[wayfarer_core:upgrade_count=1]").withWeight(12).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_shovel[wayfarer_core:upgrade_count=1]").withWeight(12).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_pickaxe[wayfarer_core:upgrade_count=2]").withWeight(8).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_shovel[wayfarer_core:upgrade_count=2]").withWeight(8).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:gas_mask").withWeight(20)
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:regeneration").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minersdelight:long_haste").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("bitsandbalance:resurfacing").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("mynethersdelight:golden_egg").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:enchanted_golden_apple").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("mynethersdelight:enchanted_golden_egg").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(3)
            )
            pool.rolls([1, 2])
        })

    event.create("strossel:badlands_mine_reward")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_pickaxe").withWeight(20).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_shovel").withWeight(20).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_apple").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
        })

//Potions
    event.create("strossel:basic_potions")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(20).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:red_mushroom").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:brown_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:field_mushroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:poreshroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:spider_eye").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:paper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:puffball_spores").withWeight(5).setCount([2, 4])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:fermented_spider_eye").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sugar").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:ink_sac").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("windswept:holly_berries").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:awkward").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:weakness").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:slowness").withWeight(5).setCount([1, 2])
            )
            pool.rolls([1, 2])
        })

    event.create("strossel:medium_potions")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(15).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:spider_eye").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:red_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:brown_mushroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:field_mushroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:poreshroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:paper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:puffball_spores").withWeight(5).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:frog_leg").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:tentacles").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("alexscaves:moth_dust").withWeight(5).setCount([3, 4])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:fermented_spider_eye").withWeight(15).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:ink_sac").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("windswept:holly_berries").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:redstone").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sugar").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("nomansland:sulfur").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:creeper_spores").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:slime_ball").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("dungeonsdelight:rotgourd_slice").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:resin").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:dragon_breath").withWeight(5).setCount([1, 3])
            )
            pool.rolls([2, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:awkward").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:healing").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:poison").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:poison").withWeight(3).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:slowness").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:slowness").withWeight(3).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:weakness").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:weakness").withWeight(3).setCount([1, 2])
            )
            pool.rolls([2, 3])
        })

    event.create("strossel:high_potions")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glass_bottle").withWeight(15).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:spider_eye").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:red_mushroom").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:brown_mushroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:field_mushroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:poreshroom").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:paper").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("abundant_atmosphere:puffball_spores").withWeight(5).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("nomansland:frog_leg").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minersdelight:tentacles").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("alexscaves:moth_dust").withWeight(10).setCount([3, 4])
            )
            pool.rolls([2, 4])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:fermented_spider_eye").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:ink_sac").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:redstone").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glowstone_dust").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:sugar").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:magma_cream").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:glistering_melon_slice").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:dragon_breath").withWeight(10).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("tolerable_creepers:creeper_spores").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:sulfur").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("dungeonsdelight:rotgourd_slice").withWeight(10).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:slime_ball").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("nomansland:resin").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:zirconia").withWeight(3).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("kubejs:rotten_brain").withWeight(5).setCount([1, 2])
            )
            pool.rolls([3, 5])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:antidote_bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("nomansland:medicinal_bandage").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:awkward").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_healing").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strong_regeneration").withWeight(7).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:long_regeneration").withWeight(7).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("wayfarer_core:vitality").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("wayfarer_core:strong_vitality").withWeight(3).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("wayfarer_core:long_vitality").withWeight(3).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:swiftness").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:potion").addPotion("minecraft:strength").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:strong_poison").withWeight(3).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:long_poison").withWeight(3).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:strong_poison").withWeight(2).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:long_poison").withWeight(2).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:strong_slowness").withWeight(3).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:long_slowness").withWeight(3).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:strong_slowness").withWeight(2).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:long_slowness").withWeight(2).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:long_weakness").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:lingering_potion").addPotion("minecraft:long_weakness").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:splash_potion").addPotion("minecraft:strong_harming").withWeight(10).setCount([2, 4])
            )
            pool.rolls([2, 4])
        })

//Grave
    event.create("strossel:basic_grave")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:skeleton_skull").withWeight(1)
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(5).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(5).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("dungeonsdelight:stained_scrap_fragment").withWeight(2).setCount([3, 5])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword").withWeight(5).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe").withWeight(5).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife").withWeight(2).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:flint_knife").withWeight(1).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bow").withWeight(5).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:shield").withWeight(7).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:wooden_shield").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("caverns_and_chasms:cowl").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_helmet").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_chestplate").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_leggings").damage([0.1, 0.6]).withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_boots").damage([0.1, 0.6]).withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_hide_helmet").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_hide_chestplate").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:raw_hide_leggings").damage([0.1, 0.6]).withWeight(2)
            )
            pool.when(conditions => {
                conditions.randomChance(0.33)
            })
        })

    event.create("strossel:medium_grave")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:skeleton_skull").withWeight(1)
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(20).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(10).setCount([1, 2])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(20).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("dungeonsdelight:stained_scrap_fragment").withWeight(5).setCount([4, 8])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:goblet").withWeight(3)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet").damage([0.2, 0.8]).withWeight(3)
            )
            pool.rolls([1, 2])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe").withWeight(6).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_sword[wayfarer_core:upgrade_count=1]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_axe[wayfarer_core:upgrade_count=1]").withWeight(4).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ruined_knife[wayfarer_core:upgrade_count=1]").withWeight(2).damage([0.1, 0.4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bow").withWeight(10).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("minecraft:shield").withWeight(7).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:golden_shield").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(5)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots").damage([0.1, 0.6]).withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:chainmail_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_helmet[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_chestplate[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_leggings[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_boots[wayfarer_core:upgrade_count=1]").damage([0.1, 0.6]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_helmet[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_chestplate[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_leggings[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("minecraft:leather_boots[wayfarer_core:upgrade_count=2]").damage([0.1, 0.4]).withWeight(1)
            )
            pool.addEntry(
                LootEntry.reference("strossel:medium_rings").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
        })

    event.create("strossel:high_grave")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:rotten_flesh").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone").withWeight(10).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:skeleton_skull").withWeight(1)
            )
            pool.rolls([1, 3])
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:emerald").withWeight(20).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_ingot").withWeight(15).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([6, 12])
            )
            pool.addEntry(
                LootEntry.of("dungeonsdelight:stained_scrap_fragment").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:diamond").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silver_nugget").withWeight(1).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:goblet").withWeight(2)
            )
            pool.addEntry(
                LootEntry.of("minecraft:golden_helmet").damage([0.2, 0.8]).withWeight(2)
            )
            pool.rolls([2, 3])
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
                LootEntry.of("minecraft:crossbow").withWeight(10).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:golden_shield").withWeight(7).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("shieldexp:iron_shield").withWeight(3).damage([0.1, 0.6])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:quiver").withWeight(5)
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
                LootEntry.reference("strossel:high_rings").withWeight(1)
            )
            pool.addEntry(
                LootEntry.of("nomansland:warding_effigy").withWeight(5)
            )
            pool.rolls([1, 2])
        })

//Rings
    event.create("strossel:medium_rings")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:rusted_iron_ring").withWeight(25).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:dull_iron_ring").withWeight(25).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:bulwark_ring").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:fireward_ring").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:spellward_ring").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ailward_ring").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_the_afflicted").withWeight(10).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_warmth").withWeight(5).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_the_rat").withWeight(5).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silvercat_ring").withWeight(5).damage([0.2, 0.8])
            )
        })

    event.create("strossel:high_rings")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:rusted_iron_ring").withWeight(5).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:dull_iron_ring").withWeight(5).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:bulwark_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:fireward_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:spellward_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ailward_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_the_afflicted").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_warmth").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_the_rat").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:silvercat_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_silence").withWeight(65).when(c => c.matchStructure("minecraft:ancient_city")).damage([0.2, 0.8])
            )
        })

    event.create("strossel:nether_rings")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:bulwark_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:fireward_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:spellward_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ailward_ring").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:ring_of_the_afflicted").withWeight(15).damage([0.2, 0.8])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:mercury_gemstone_ring").withWeight(25).when(c => c.matchStructure(["minecraft:fortress", "nova_structures:nether_keep"])).damage([0.2, 0.8])
            )
        })

//Pot
    event.create("strossel:basic_pot")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:clay_ball").withWeight(10).setCount([4, 12])
            )
            pool.addEntry(
                LootEntry.of("minecraft:charcoal").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:straw").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:flint").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:flour").withWeight(5).setCount([2, 4])
            )
            pool.addEntry(
                LootEntry.empty().withWeight(15)
            )
        })

    event.create("strossel:medium_pot")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minersdelight:silverfish_eggs").withWeight(3).setCount([1, 3])
            )
            pool.addEntry(
                LootEntry.of("minecraft:coal").withWeight(15).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:clay_ball").withWeight(10).setCount([8, 20])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gunpowder").withWeight(10).setCount([3, 6])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:ash").withWeight(10).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("wayfarer_core:bone_ash").withWeight(5).setCount([3, 5])
            )
            pool.addEntry(
                LootEntry.of("minecraft:slime_ball").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:resin").withWeight(5).setCount([2, 3])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(15).setCount([4, 7])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:flour").withWeight(15).setCount([4, 7])
            )
            pool.addEntry(
                LootEntry.of("minecraft:gold_nugget").withWeight(10).setCount([4, 10])
            )
            pool.addEntry(
                LootEntry.empty().withWeight(10)
            )
        })

    event.create("strossel:seed_pot")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:wheat_seeds").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:beetroot_seeds").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:pumpkin_seeds").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:cabbage_seeds").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("farmersdelight:tomato_seeds").withWeight(5).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("supplementaries:flax_seeds").withWeight(5).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("nomansland:trail_mix").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("bountifulfares:flour").withWeight(10).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.of("minecraft:bone_meal").withWeight(5).setCount([5, 10])
            )
            pool.addEntry(
                LootEntry.empty().withWeight(10)
            )
        })

//Discs
    event.create("strossel:surface_discs")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_far").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_strad").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_wait").withWeight(10)
            )
            pool.when(conditions => {
                conditions.randomChance(0.66)
            })
        })

    event.create("strossel:dungeon_discs")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_cat").withWeight(12)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_13").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_11").withWeight(2)
            )
        })

    event.create("strossel:stronghold_discs")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_otherside").withWeight(14)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_mall").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_ward").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_blocks").withWeight(10)
            )
            pool.addEntry(
                LootEntry.of("minecraft:music_disc_cat").withWeight(6)
            )
        })

//Misc
    event.create("strossel:empty")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("minecraft:cobweb").setCount([3, 6])
            )
        })
        
    event.create("strossel:fear")
        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("wayfarer_core:fresh_flesh").setCount([8, 12])
            )
        })

        .createPool(pool => {
            pool.addEntry(
                LootEntry.of("nomansland:trinket")
            )
        })
})