
(() => {
  const items: number[] = [1, 30, 49, 29, 10, 13]
  const teams = [
    {
      name: 'Nicolas',
      age: 12
    },
    {
      name: 'Andrea',
      age: 8
    },
    {
      name: 'Zulema',
      age: 2
    },
    {
      name: 'Santiago',
      age: 18
    }
  ]

  const rta = items.every(item => item > 1)
  console.log(rta)

  const rta2 = teams.every(team => team.age <= 15)
  console.log(rta2)
})()
