// priority: 0

ServerEvents.tags("item", (event) => {
  ["", "exposed_", "weathered_", "oxidized_"].forEach((stage) => {
    event.add("wayfarer_core:waxable_in_crafting", [
      stage ? `minecraft:${stage}copper` : "minecraft:copper_block",
      `minecraft:${stage}cut_copper`,
      `minecraft:${stage}cut_copper_stairs`,
      `minecraft:${stage}cut_copper_slab`,
      `minecraft:${stage}copper_door`,
      `minecraft:${stage}copper_trapdoor`,
      `minecraft:${stage}copper_bulb`,
      `minecraft:${stage}copper_grate`,
      `minecraft:${stage}chiseled_copper`,
      `caverns_and_chasms:${stage}copper_chain`,
      `caverns_and_chasms:${stage}copper_bars`,
      `caverns_and_chasms:${stage}copper_rail`,
    ]);
  });
});