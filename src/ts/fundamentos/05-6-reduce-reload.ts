(() => {
  const items: number[] = [1, 3, 2, 3, 1, 1, 10]
  const data = [
    {
      name: 'Nicolas',
      level: 'low'
    },
    {
      name: 'Andrea',
      level: 'medium'
    },
    {
      name: 'Zulema',
      level: 'hight'
    },
    {
      name: 'Santiago',
      level: 'low'
    },
    {
      name: 'Valentina',
      level: 'medium'
    },
    {
      name: 'Lucia',
      level: 'hight'
    }
  ]
  const rta = items.reduce((obj: any, item: number) => {
    const key: number | null = obj[item]
    if (key == null) {
      obj[item] = 1
    } else {
      obj[item] = parseInt(obj[item]) + 1
    }
    return obj
  }, {})
  console.log(rta)
  const rta1 = data
    .map(item => item.level)
    .reduce((obj: any, item) => {
      const key: number | null = obj[item]
      if (key == null) {
        obj[item] = 1
      } else {
        obj[item] = parseInt(obj[item]) + 1
      }
      return obj
    }, {})
  console.log(rta1)
})()
