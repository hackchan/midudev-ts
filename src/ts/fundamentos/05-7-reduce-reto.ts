(() => {
  const items: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10]
  const between = (x: number, min: number, max: number): boolean => x >= min && x <= max

  const rangeRepetitions = items.reduce((acum, item) => {
    if (between(item, 1, 5)) {
      acum['1-5'] = acum['1-5'] + 1
    } else if (between(item, 6, 8)) {
      acum['6-8'] = acum['6-8'] + 1
    } else if (between(item, 9, 10)) {
      acum['9-10'] = acum['9-10'] + 1
    }
    return acum
  }, { '1-5': 0, '6-8': 0, '9-10': 0 })
  console.log(rangeRepetitions)
})()
