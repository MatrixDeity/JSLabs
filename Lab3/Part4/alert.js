function Calculator() {
    this.read = function() {
        this.a = +prompt("a = ");
        this.b = +prompt("b = ");
    };
    this.sum = function() {
        return this.a + this.b;
    };
    this.mul = function() {
        return this.a * this.b;
    };
}

let calc = new Calculator();
calc.read();
alert("a + b = " + calc.sum());
alert("a * b = " + calc.mul());