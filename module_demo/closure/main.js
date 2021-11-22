

// function main() {

//   const closure = function() {

//     const list = new Array(1000);
//     for (let i = 0; i < list.length; i++) {
//       list[i] = i;
//     }

//     return function() {

//       console.log('exec=========>', list.join(','));
//     }
//   }

//   const fn = closure();
//   const btn = document.getElementById('btn');
//   btn.addEventListener('click', fn)

// }

// setInterval(() => {
//   console.log('main');
//   main();
// }, 100)


function main() {
  let foo = null;
  function outer() {
      let bar = foo;
      function unused() { // 未使用到的函数
          console.log(`bar is ${bar}`);
      }
  
      foo = { // 给foo变量重新赋值
          bigData: new Array(100000).join("this_is_a_big_data"), // 如果这个对象携带的数据非常大，将会造成非常大的内存泄漏
          inner: function() {
              console.log(`inner method run`);
          }
      }
  }
  
  const btn = document.getElementById('btn');

  const generateLargeMemory = function() {
    let i = 0;
    while (i < 10000) {
      outer();
      i++;
    }
    btn.removeEventListener('click', generateLargeMemory);
  }
  btn.addEventListener('click', generateLargeMemory);
}

main();

