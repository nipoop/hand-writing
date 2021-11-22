
window.addEventListener('unhandledrejection', (event) => {
  console.log('event', event);
})

try {
  const promise1 = new Promise((resolve, reject) => {

    throw new Error('error')

  })
  
  promise1.then((res) => {
    console.log('then', res);
  })
  
  console.log('222')
} catch (error) {
  console.log('outer catch', error);
}

console.log('finally')