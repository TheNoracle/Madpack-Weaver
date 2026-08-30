// kubejsstudio item/block properties; re-apply merges by id
ItemEvents.modification(event => {
    event.modify('windswept:spicy_snow_cone', m => { m.setFood(7, 0.1) })
    event.modify('alexscaves:dinosaur_nugget', m => { m.setFood(10, 0.6) })
})
