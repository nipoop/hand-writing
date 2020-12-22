
const myGet = function(target, path) {

  if (target.toString() !== '[object Object]') {
    throw new Error('error')
  }

  const paths = path.split('.');

  const regExp = /\[[0-9]+\]/gi;

  let res = target;

  paths.forEach((key) => {
    if (regExp.test(key)) {
      const match = key.match(regExp);

      const prev = key.replace(regExp, '');
      res = res[prev];

      match.forEach(item => {
        const num = item.replace(/\[|\]/gi, '');
        res = res[num]
      })

    } else {
      res = res[key]
    }

  })
  return res;

}

const obj = {
  a1: 1,
  a2: [
    1,
    2,
    [
      {
        b1: '3'
      }
    ]
  ]
}

console.log(myGet(obj, 'a2.2.0.b1'))