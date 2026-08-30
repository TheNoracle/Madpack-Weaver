// priority: 0


StartupEvents.registry('block', event => {

//    event.create('andesite_spinel_ore').soundType('stone').hardness(5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)

	event.create('wheat_flour_bag').displayName("Bag of Wheat Flour").soundType('wool').hardness(0.8).resistance(0.8)
	event.create('corn_flour_bag').displayName("Bag of Corn Flour").soundType('wool').hardness(0.8).resistance(0.8)
	event.create('cinnamon_bag').displayName("Bag of Cinnamon").soundType('wool').hardness(0.8).resistance(0.8)
	event.create('ash_bag').displayName("Bag of Ash").soundType('wool').hardness(0.8).resistance(0.8)
	event.create('pink_salt_bag').displayName("Bag of Pink Salt").soundType('wool').hardness(0.8).resistance(0.8)

	event.create('crocodile_egg_crate').displayName("Crate of Crocodile Eggs").soundType('wood').hardness(1).resistance(0.5).tagBlock('minecraft:mineable/axe')

	event.create('cake_base', 'slab').displayName("Cake Base").soundType('wool').hardness(0.8).resistance(0.8)

	event.create('enchanted_fruit_crate').displayName('Crate of Enchanted Fruit').soundType('wood').hardness(1).resistance(0.5).tagBlock('minecraft:mineable/axe')
	
	event.create('paper_block').soundType('wool').hardness(0.1).resistance(0.1)
	event.create('spool').soundType('wool').hardness(0.5).resistance(0.5)

	event.create('smooth_stone_stairs', 'stairs').soundType('stone').hardness(2).resistance(6).requiresTool(true)
	event.create('smooth_stone_wall', 'wall').soundType('stone').hardness(2).resistance(6).requiresTool(true)

    event.create('chiseled_ash_bricks').soundType('stone').hardness(2).resistance(6).requiresTool(true)

    event.create('cobbled_blackstone').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true).texture('minecraft:block/blackstone_top')
	event.create('cobbled_blackstone_slab', 'slab').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('cobbled_blackstone_stairs', 'stairs').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	event.create('cobbled_blackstone_wall', 'wall').soundType('stone').hardness(1.5).resistance(6).tagBlock('minecraft:mineable/pickaxe').requiresTool(true)
	
	event.create('deepslate_gravel', 'falling').soundType('gravel').hardness(0.6).resistance(1).tagBlock('minecraft:mineable/shovel')
	
	event.create('deepslate_gravel_bricks').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('deepslate_gravel_brick_slab', 'slab').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('deepslate_gravel_brick_stairs', 'stairs').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('deepslate_gravel_brick_wall', 'wall').soundType('gravel').hardness(1.2).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	
	event.create('blackstone_gravel', 'falling').soundType('gravel').hardness(0.4).resistance(1).tagBlock('minecraft:mineable/shovel')
	
	event.create('blackstone_gravel_bricks').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('blackstone_gravel_brick_slab', 'slab').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('blackstone_gravel_brick_stairs', 'stairs').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	event.create('blackstone_gravel_brick_wall', 'wall').soundType('gravel').hardness(0.9).resistance(5).tagBlock('minecraft:mineable/shovel').tagBlock('minecraft:mineable/pickaxe')
	
})