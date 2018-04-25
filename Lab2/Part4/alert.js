function sumTo1(n) {
    if (n < 0)
        return NaN;
    let res = 0;
    while (n > 0) {
        res += n--;
    }
    return res;
}

function sumTo2(n) {
    if (n < 2)
        return n >= 0 ? n : NaN;
    return n + sumTo2(n - 1);
}

function sumTo3(n) {
    return n >= 0 ? (n * (n + 1)) / 2 : NaN;
}

let n = +prompt("n = ");
alert("Сумма от 0 до " + n + " с помощью цикла равна " + sumTo1(n));
alert("Сумма от 0 до " + n + " с помощью рекурсии равна " + sumTo2(n));
alert("Сумма от 0 до " + n + " с помощью формулы равна " + sumTo3(n));