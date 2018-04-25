function sum(n) {
    let val = n;
    let impl = function(_n) {
        val += _n;
        return impl;
    };
    impl.toString = function() {
        return val;
    };
    return impl;
}

alert("Сумма равна " + sum(1)(2)(3)(4)(5));