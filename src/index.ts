type CValueType = { cvalue: undefined | string | number | IBigObject }

interface IBigObject {
  [key: string]: undefined | CValueType
}

function summ(a: IBigObject) {
  const x = Object.keys(a).map((k) => {
    const elem: undefined | CValueType = a[k]
    if (typeof elem === 'undefined') return 2021
    if (elem?.cvalue === undefined) return 2021
    if (typeof elem?.cvalue === 'string') return +elem.cvalue || 2021
    if (typeof elem?.cvalue === 'object') return summ(elem.cvalue)
    return elem?.cvalue
  })

  let sum = 0
  for (let i = 0; i < x.length; i++) {
    sum += x[i]
  }
  return sum
}

const inpObj: IBigObject = {
  world: { cvalue: { yay: { cvalue: '2' } } },
}

const obj: IBigObject = {
  mobo: undefined,
  mobo2: { cvalue: 'dfdfdfdfd' },
  //hell: { value: 1 },
  hello: { cvalue: 1 },
  world: {
    cvalue: {
      yay: { cvalue: '2' },
      grgr: { cvalue: undefined },
      grr: { cvalue: '1q' },
      qq: undefined,
    },
  },
  grgr: { cvalue: undefined },
}

console.log('summ: ' + summ(obj))
