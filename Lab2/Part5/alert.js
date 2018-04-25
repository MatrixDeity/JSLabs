function factorial(n) {
    if (n < 0)
        return NaN;
    let res = 1;
    while (n > 1) {
        res *= n--;
    }
    return res;
}

let n = +prompt("n = ");
alert(n + "! = " + factorial(n));