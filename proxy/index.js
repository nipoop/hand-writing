
const obj1 = {
  a: 'foo',
  b: 'bar'
}

const arr = [1,2,3];

const proxyObj1 = new Proxy(arr, {
  get: (target, key, receiver) => {
    const value = Reflect.get(target, key);
    return key;
  },
  set: (target, key, value) => {

  }
})

console.log('a', proxyObj1[0], proxyObj1[1], proxyObj1.length);
console.log('arr', arr[1]);