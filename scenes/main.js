add([
  sprite('helloBobby'),
  scale(0.8),
  pos(20, 20),
  body()
])

addLevel([
  '     ',
  '  @  ',
  '     ',
  'xxxxx',
  ], {
   width: 40,
   height: 40,
   'x' : [sprite('ground'), solid()],
   '@' : [sprite('enemy')]
  })