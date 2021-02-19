// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  event.remove({id: 'buildinggadgets:gadget_exchanging'}) 
  
  // Mekanism
  event.recipes.mekanism.enriching(item.of('immersiveengineering:dust_aluminum', 2), '#forge:ores/aluminum')
  event.recipes.mekanism.crushing(item.of('immersiveengineering:dust_aluminum'), '#forge:ingots/aluminum')
  
  event.recipes.mekanism.enriching(item.of('thermal:silver_dust', 2), '#forge:ores/silver')
  event.recipes.mekanism.crushing(item.of('thermal:silver_dust'), '#forge:ingots/silver')
  
  event.recipes.mekanism.enriching(item.of('thermal:nickel_dust', 2), '#forge:ores/nickel')
  event.recipes.mekanism.crushing(item.of('thermal:nickel_dust'), '#forge:ingots/nickel')
  
  event.recipes.mekanism.enriching(item.of('create:crushed_zinc_ore', 2), '#forge:ores/zinc')
  
  event.recipes.mekanism.crushing(item.of('mana-and-artifice:vinteum_dust'), 'mana-and-artifice:vinteum_ingot')
})

onEvent('item.tags', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  // event.get('forge:cobblestone').add('minecraft:diamond_ore')
  
  // Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
  // event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})