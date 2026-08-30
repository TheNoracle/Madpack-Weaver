// priority: 0

StartupEvents.registry('fluid', event =>
{
	event.create("cloudy_solution", "thin")
		.tint(0x96796e)
		.displayName('Cloudy Solution')
    	.noBucket()
    	.noBlock()

	event.create('molten_azure_neodymium', 'thick')
		.displayName('Molten Azure Neodymium')
		.flowingTexture('kubejs:block/molten_azure_neodymium')
		.stillTexture('kubejs:block/molten_azure_neodymium')
		.noBucket()
		.noBlock()

	event.create('molten_scarlet_neodymium', 'thick')
		.displayName('Molten Scarlet Neodymium')
		.flowingTexture('kubejs:block/molten_scarlet_neodymium')
		.stillTexture('kubejs:block/molten_scarlet_neodymium')
		.noBucket()
		.noBlock()

	event.create('molten_dungeonsteel', 'thick')
		.displayName('Molten Dungeonsteel')
		.flowingTexture('kubejs:block/molten_dungeonsteel')
		.stillTexture('kubejs:block/molten_dungeonsteel')
		.noBucket()
		.noBlock()
	
	event.create('molten_netherite', 'thick')
		.displayName('Molten Netherite')
		.flowingTexture('kubejs:block/molten_netherite')
		.stillTexture('kubejs:block/molten_netherite')
		.noBucket()
		.noBlock()
	
	event.create('molten_necromium', 'thick')
		.displayName('Molten Necromium')
		.flowingTexture('kubejs:block/molten_necromium')
		.stillTexture('kubejs:block/molten_necromium')
		.noBucket()
		.noBlock()

	event.create('soulstice_sake')
		.tint(0x4FEEEE)
		.displayName('Soulstice Sake')
		.noBucket()
		.noBlock()

	event.create('buzzing_bourbon')
		.tint(0xF2B339)
		.displayName('Buzzing Bourbon')
		.noBucket()
		.noBlock()

	event.create('prickly_gin')
		.tint(0xC9096E)
		.displayName('Prickly Gin')
		.noBucket()
		.noBlock()

	event.create('primordial_painkiller')
		.tint(0x701515)
		.displayName('Primordial Painkiller')
		.noBucket()
		.noBlock()

	event.create('draconic_whisky')
		.tint(0xE18FE1)
		.displayName('Draconic Whisky')
		.noBucket()
		.noBlock()

	event.create('cactus_juice')
		.tint(0x2DAC30)
		.displayName('Cactus Juice')
		.noBucket()
		.noBlock()

	event.create('glogg')
		.tint(0x750C08)
		.displayName('Glogg')
		.noBucket()
		.noBlock()
}
)
