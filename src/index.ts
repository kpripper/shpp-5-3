type CValueType = { cvalue: undefined | string | number | IBigObject }

interface IBigObject {
  [key: string]: undefined | CValueType
}

// Redundant - summ takes only IBigObject
//
// function isBigObject(el: CValueType): el is CValueType {
//   return (el as CValueType) !== undefined
// }
//
// function instanceOfBigObject(data: any): data is IBigObject {
//   return true;
// }


function summ(a: IBigObject) {
  const x = Object.keys(a).map((k) => {
    const elem: undefined | CValueType = a[k]
  //  console.log(elem)

    if (typeof elem === 'undefined') {
      //   console.log(elem+' typeof elem undef  return 2021: ' + typeof elem)
      return 2021
    }
    if (elem?.cvalue === undefined) {
      //    console.log(elem+' elem undef return 2021: ')
      return 2021
    }
    if (typeof elem?.cvalue === 'string') {
      //    console.log(elem.cvalue+' typeof elem.cvalue str return +||2021: ' + typeof elem.cvalue)
      //   console.log(+elem.cvalue || 2021)
      return +elem.cvalue || 2021
    }

    // console.log(elem+' typeof elem: ' + typeof elem)
    if (typeof elem?.cvalue === 'object') {
      // console.log(elem.cvalue)
      return summ(elem.cvalue)
    }

    return elem?.cvalue
  })
  let sum = 0
  console.log(x)
  for (let i = 0; i < x.length; i++) {
    // console.log(x[i])
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
