// Remove items that have output of x
event.remove({output: '#buildinggadgets:gadget_exchanging'}) 

// Hide those items in JEI

onEvent('jei.hide.items', event => {
    event.hide('buildinggadgets:gadget_exchanging')
})