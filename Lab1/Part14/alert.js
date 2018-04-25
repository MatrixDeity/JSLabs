function makeArray(size, val = 0) {
    res = [];
    for (let i = 0; i < size; ++i) {
        res[i] = val;
    }
    return res;
}

function sieve(beg, end) {
    if (beg < 2 || end < beg)
        return [NaN];
    let n = end + 1;
    let arr = makeArray(n, true);
    for (let i = 2; i * i <= end; ++i) {
        if (arr[i]) {
            for (let j = i * i; j <= end; j += i) {
                arr[j] = false;
            }
        }
    }
    let res = [];
    for (let i = beg; i <= end; ++i) {
        if (arr[i])
            res.push(i);
    }
    return res;
}

let beg = +prompt("Введите начало диапазона:");
let end = +prompt("Введите конец диапазона:");
alert("Простые числа от " + beg + " до " + end + ": " + sieve(beg, end));