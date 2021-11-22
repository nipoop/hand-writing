function get_lis_length(arr) {
    let n = arr.length;
    let lis = [];

    for (let i = 0; i < n; i++) {
        lis[i] = 1;
    }

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
                lis[i] = Math.max(lis[i], lis[j] + 1);
            }
        }
    }

    return lis.join(' ');
}

let testArr = [2, 1, 5, 3, 6, 4, 8, 9, 7]
console.log(get_lis_length(testArr))