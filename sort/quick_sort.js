
// parent = i; left = 2 * i + 1; right = 2 * i + 2

function swap(arr, m, n) {
  const tmp = arr[m];
  arr[m] = arr[n];
  arr[n] = tmp;
}

function shiftDown(arr, i, length) {

  for (let j = i * 2 + 1; j < length; j = j * 2 + 1) {
    const tmp = arr[i];
    if (j + 1 < length && arr[j + 1] > arr[j]) {
      j++;
    };
    if (tmp < arr[j]) {
      swap(arr, i, j)
      i = j;
    } else {
      break;
    }
  }
}



function build_heap(arr) {

  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    shiftDown(arr, i, arr.length);
  }
}

function heap_sort(arr) {


  build_heap(arr);
  console.log(arr)

  for (let i = arr.length - 1; i > 0; i--) {

    swap(arr, 0, i);
    shiftDown(arr, 0, i);
  }
}


const arr = [4, 6, 8, 5, 9, 1, 2, 5, 3, 2];
heap_sort(arr);
console.log(arr);



function foo() {
  const obj1 = {
    a1: function () {
  
    },
    a2: () => {
      console.log(this);
    }
  }

  obj1.a2();
  
}

