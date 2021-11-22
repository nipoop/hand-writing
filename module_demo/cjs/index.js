const math = require('./math');


console.log('before', math);

const sum = (a, b, c) => {

  return math.add(a, b) + c;
};


console.log(sum(1, 2, 3))