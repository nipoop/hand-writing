

// debounce

const debounce = function(fn, delay, immediate) {

  let self = this;
  let timer = null;
  return function() {

    timer && clearTimeout(timer);
    if (immediate) {

      if (!timer) {
        fn.call(self, Array.prototype.slice.call(arguments));
      }
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    } else {
      timer = setTimeout(() => {
        fn.call(self, Array.prototype.slice.call(arguments));

      }, delay)
    }

  }
}


// throttle

const throttle = function(fn, delay) {

  let self = this;
  let timer = null;

  return function() {

    if (timer) return;
    fn.call(self, Array.prototype.slice.call(arguments));
    timer = setTimeout(() => {
      timer = null;
    }, delay)
  }
}