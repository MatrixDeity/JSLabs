function min(a, b) {
    return a < b ? a : b;
}

let a = +prompt("a = ");
let b = +prompt("b = ");
let m = min(a, b);
alert("min(" + a + ", " + b + ") = " + m);