// priority: 0

console.info('Removing extra ores')

onEvent('jei.hide.items', event => {
	event.hide('create:copper_ore')
	event.hide('create:tin_ore')
	event.hide('immersiveengineering:ore_aluminum')
	event.hide('immersiveengineering:ore_copper')
	event.hide('immersiveengineering:ore_lead')
	event.hide('immersiveengineering:ore_nickel')
	event.hide('immersiveengineering:ore_silver')
	event.hide('immersiveengineering:ore_uraniums')
	event.hide('mekanism:copper_ore')
	event.hide('mekanism:tin_ore')
	event.hide('mekanism:lead_ore')
})