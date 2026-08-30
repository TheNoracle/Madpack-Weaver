LootJS.modifiers((event) => {
//Removals
  event
    .addTableModifier(/.*/)
    .removeLoot("portablehole:portable_hole");

//Additions
  event
    .addEntityModifier([
      "spawn:boar"
    ])
    .addLoot("wayfarer_core:wax")
    .setCount([0, 1]);
  event
    .addEntityModifier([
      "spawn:seal",
      "environmental:yak"
    ])
    .addLoot("wayfarer_core:wax")
    .setCount([1, 1]);
  event
    .addEntityModifier([
      "minecraft:polar_bear",
      "windswept:frostbiter"
    ])
    .addLoot("wayfarer_core:wax")
    .setCount([1, 2]);
  event
    .addEntityModifier([
      "primal:walrus",
      "spawn:sea_cow",
      "spawn:flukeshroom",
      "naturalist:hippo"
    ])
    .addLoot("wayfarer_core:wax")
    .setCount([2, 3]);
  event
    .addEntityModifier(["naturalist:mammoth"])
    .addLoot("wayfarer_core:wax")
    .setCount([3, 5]);

  event
    .addEntityModifier("minecraft:evoker")
    .addLoot("wayfarer_core:vex_calling_bell").randomChance(0.2);
  event
      .addEntityModifier(["skeleton"])
      .addLoot("arrow")
      .setCount([0, 3]);
  event
      .addEntityModifier(["envelope:pigeon"])
      .addLoot("kubejs:raw_bird")
      .setCount([1, 1]);
  event
      .addEntityModifier(["envelope:pigeon"])
      .addLoot("feather")
      .setCount([0, 1]);
  event
      .addEntityModifier(["skeleton"])
      .addLoot("bone")
      .setCount([1, 1]);

  event
    .addEntityModifier(["minecraft:endermite"])
    .addLoot("wayfarer_core:rift_sediment")
    .setCount([1, 3]);
  event
    .addEntityModifier(["minecraft:enderman"])
    .addLoot("wayfarer_core:rift_sediment")
    .setCount([1, 3]);
  event
    .addEntityModifier(["minecraft:shulker"])
    .addLoot("wayfarer_core:rift_sediment")
    .setCount([1, 2]);
  event
    .addEntityModifier(["minecraft:shulker"])
    .addLoot("aeronautics:end_stone_powder")
    .setCount([1, 6]);
    
  event
    .addEntityModifier("#strossel:subject_of_evil")
    .addLoot("wayfarer_core:chthonic_calculus")
    .randomChance(0.05);
  event
    .addTableModifier("minecraft:blocks/spawner")
    .addLoot("wayfarer_core:chthonic_calculus")
    .setCount([1, 2]);
  event
    .addTableModifier("minecraft:blocks/trial_spawner")
    .addLoot("wayfarer_core:chthonic_calculus")
    .setCount([0, 1]);
  event
    .addTableModifier("nomansland:blocks/monster_anchor")
    .addLoot("wayfarer_core:chthonic_calculus")
    .setCount([0, 1]);

  event
    .addEntityModifier([
      "naturalist:elephant",
      "naturalist:mammoth",
      "naturalist:whale"
    ])
    .matchMainHand("#farmersdelight:tools/knives")
    .addLoot("alexscaves:heavy_bone")
    .setCount([1, 2]);
  event
    .addEntityModifier([
      "minecraft:cow",
      "minecraft:camel",
      "minecraft:polar_bear",
      "minecraft:horse",
      "minecraft:mule",
      "minecraft:donkey",
      "minecraft:hoglin",
      "minecraft:sniffer",
      "windswept:frostbiter",
      "spawn:sea_cow",
      "spawn:flukeshroom",
      "primal:walrus",
      "environmental:zebra",
      "environmental:zonkey",
      "environmental:zorse",
      "naturalist:giraffe",
      "spawn:bison",
      "environmental:yak",
      "naturalist:hippo"
    ])
    .matchMainHand("#farmersdelight:tools/knives")
    .addLoot("minecraft:bone");
  event
    .addEntityModifier([
      "primal:deer",
      "minecraft:llama",
      "minecraft:trader_llama",
      "minecraft:sheep",
      "minecraft:goat",
      "minecraft:mooshroom",
      "buzzier_bees:moobloom",
      "minecraft:pig",
      "minecraft:wolf",
      "minecraft:panda",
      "alexscaves:subterranodon",
      "alexscaves:vallumraptor",
      "primal:cassowary",
      "primal:crocodile",
      "minecraft:turtle",
      "nomansland:tortoise",
      "quark:foxhound",
      "naturalist:lion",
      "spawn:seal",
      "environmental:tapir",
      "spawn:boar",
      "spawn:bighorn_sheep",
      "goated:geep",
      "minecraft:dolphin",
      "neapolitan:chimpanzee"
    ])
    .randomChance(0.6)
    .matchMainHand("#farmersdelight:tools/knives")
    .addLoot("minecraft:bone");
  event
    .addEntityModifier([
      "minecraft:fox",
      "minecraft:rabbit",
      "minecraft:chicken",
      "naturalist:turkey",
      "spawn:pheasant",
      "nomansland:goose",
      "spawn:duck",
      "spawn:dodo",
      "spawn:booby",
      "primal:eagle",
      "minecraft:armadillo",
      "alexscaves:corrodent",
      "spawn:macaque"
    ])
    .randomChance(0.2)
    .matchMainHand("#farmersdelight:tools/knives")
    .addLoot("minecraft:bone");

  event
    .addEntityModifier([
      "alexscaves:grottoceraptos",
      "alexscaves:atlatitan",
      "alexscaves:relicheirus",
      "alexscaves:tremorsaurus"
    ])
    .addLoot("naturalist:hide")
    .setCount([5, 8]);
  event
    .addEntityModifier([
      "naturalist:elephant",
      "naturalist:mammoth"
    ])
    .addLoot("naturalist:hide")
    .setCount([3, 5]);
  event
    .addEntityModifier([
      "minecraft:cow",
      "minecraft:camel",
      "spawn:bison",
      "naturalist:giraffe",
      "environmental:yak"
    ])
    .addLoot("naturalist:hide")
    .setCount([1, 4]);
  event
    .addEntityModifier([
      "primal:deer",
      "minecraft:polar_bear",
      "minecraft:horse",
      "minecraft:mule",
      "minecraft:donkey",
      "minecraft:hoglin",
      "minecraft:llama",
      "minecraft:trader_llama",
      "minecraft:wolf",
      "minecraft:sniffer",
      "windswept:frostbiter",
      "naturalist:lion",
      "environmental:zebra",
      "environmental:zonkey",
      "environmental:zorse",
      "spawn:boar",
      "minecraft:mooshroom",
      "buzzier_bees:moobloom"
    ])
    .randomChance(0.5)
    .addLoot("naturalist:hide")
    .setCount([1, 2]);
  event
    .addEntityModifier([
      "minecraft:fox",
      "minecraft:panda",
      "environmental:tapir",
      "neapolitan:chimpanzee"
    ])
    .randomChance(0.2)
    .addLoot("naturalist:hide");
  event
    .addEntityModifier([
      "minecraft:cow",
      "minecraft:horse",
      "minecraft:mule",
      "minecraft:donkey",
      "minecraft:mooshroom",
      "minecraft:llama",
      "minecraft:trader_llama"
    ])
    .removeLoot("leather");

  event
    .addBlockModifier("minecraft:iron_ore")
    .addLoot(LootEntry.of("wayfarer_core:magnetite", [1]))
    .randomChance(0.05)
  event
    .addBlockModifier("minecraft:deepslate_iron_ore")
    .addLoot(LootEntry.of("wayfarer_core:magnetite", [1]))
    .randomChance(0.05)
  event
    .addBlockModifier("alexscaves:galena_iron_ore")
    .addLoot(LootEntry.of("wayfarer_core:magnetite", [1]))
    .randomChance(0.2)

  event
    .addBlockModifier("minecraft:redstone_ore")
    .addLoot(LootEntry.of("wayfarer_core:cinnabar", [1]))
    .randomChance(0.15)
  event
    .addBlockModifier("minecraft:deepslate_redstone_ore")
    .addLoot(LootEntry.of("wayfarer_core:cinnabar", [1]))
    .randomChance(0.15)
  event
    .addBlockModifier("alexscaves:guanostone_redstone_ore")
    .addLoot(LootEntry.of("wayfarer_core:cinnabar", [1]))
    .randomChance(0.15)

  event
    .addBlockModifier("caverns_and_chasms:tin_ore")
    .addLoot(LootEntry.of("wayfarer_core:titanium_shard", [1, 3]))
    .removeLoot("caverns_and_chasms:raw_tin")
  event
    .addBlockModifier("caverns_and_chasms:deepslate_tin_ore")
    .addLoot(LootEntry.of("wayfarer_core:titanium_shard", [1, 3]))
    .removeLoot("caverns_and_chasms:raw_tin")
  event
    .addBlockModifier("caverns_and_chasms:cylindrite_tin_ore")
    .addLoot(LootEntry.of("wayfarer_core:titanium_shard", [2, 8]))
    .removeLoot("caverns_and_chasms:raw_tin")
});