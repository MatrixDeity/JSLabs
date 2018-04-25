var calculator = {
       
    read: function() {
        this.a = +prompt("a = ");
        this.b = +prompt("b = ");
    },
    
    sum: function() {
        return this.a + this.b;
    },
    
    mul: function() {
        return this.a * this.b;
    }
    
};

calculator.read();
alert("a + b = " + calculator.sum());
alert("a * b = " + calculator.mul());