// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('recipes', event => {
  // Remove recipes
  // Exchanging Gadget
  event.remove({id: 'buildinggadgets:gadget_exchanging'}) 

  // Angel ring
  event.remove({id: 'angelring:itemring'})

  // Environmental Tech
  event.remove({output: '/envirocore:litherite_crystal/'})

  // Add recipes
  // Angel ring
  event.shaped(item.of('angelring:itemring', 1), [
    'ABA',
    'CEC',
    'ADA'
  ],{
    A: 'botania:gaia_ingot',
    B: 'astralsorcery:mantle',
    C: 'bloodmagic:soulgemgreater',
    D: 'appliedenergistics2:singularity',
    E: 'angelring:itemdiamondring'
  })

  // Environmental Tech
  event.shapeless('1x envirocore:litherite_crystal', [
    'minecraft:netherite_ingot', 
    'bloodmagic:demonslate',
    'mekanism:alloy_atomic',
    'pneumaticcraft:transistor'
  ])

  // Mana and artifice
  event.shapeless('1x mana-and-artifice:guide_book', ['minecraft:book', 'mana-and-artifice:vinteum_ingot'])

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

onEvent('item.entity_interact',  event => {
  // Remove donkey duping
  if(event.server 
    && event.item.id.equals("industrialforegoing:mob_imprisonment_tool") 
    && event.target.type.equals('minecraft:donkey')) {
      event.cancel();
  }
});