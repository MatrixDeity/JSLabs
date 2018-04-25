function pow(x, n) {
    if (n < 1 || Math.trunc(n) != n)
        return NaN;
    let res = 1;
    while (n-- > 0) {
        res *= x;
    }
    return res;
}

let x = +prompt("x = ");
let n = +prompt("n = ");
let p = pow(x, n);
alert(x + "^" + n + " = " + p);