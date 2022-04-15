
(() => {
  const elements: string[] = ['Fire', 'Air', 'Watter']
  const rta = elements.join('--')
  console.log(rta)

  const title = 'Curso de manipulacion de arrays'
  console.log(title.split(' ').join('-').toLocaleLowerCase())
})()
