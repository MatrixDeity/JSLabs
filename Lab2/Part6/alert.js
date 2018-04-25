function fib(n) {
    if (n < 2)
        return n >= 0 ? 1 : NaN;
    let prev1 = 0, prev2 = 1, res = 0;
    for (let i = 1; i < n; ++i) {
        res = prev1 + prev2;
        prev1 = prev2;
        prev2 = res;
    }
    return res;
}

let n = +prompt("n = ");
alert("Число с номером " + n + " из последовательности Фибоначчи равно " + fib(n));