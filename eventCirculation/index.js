console.log('golb1');

setTimeout(function() {
    console.log('timeout1');
    new Promise(function(resolve) {
        console.log('timeout1_promise');
        resolve();
    }).then(function() {
        console.log('timeout1_then')
    })

})



new Promise(function(resolve) {
    console.log('glob1_promise');
    resolve();
}).then(function() {
    console.log('glob1_then')
})


setTimeout(function() {
    console.log('timeout2');

    new Promise(function(resolve) {
        console.log('timeout2_promise');
        resolve();
    }).then(function() {
        console.log('timeout2_then')
    })

})


new Promise(function(resolve) {
    console.log('glob2_promise');
    resolve();
}).then(function() {
    console.log('glob2_then')
})


// glob1
// glob1_promise
// glob2_promise
// glob1_nextTick
// glob2_nextTick
// glob1_then
// glob2_then
// timeout1
// timeout1_promise
// timeout2
// timeout2_promise
// tiemout1_nextTick
// timeout2_nextTick
// timeout1_then
// timeout2_then
// immediate1
// immediate1_promise
// immediate2
// immediate2_promise
// immediate1_nextTick
// immediate2_nextTick
// immediate1_then
// immediate2_then

