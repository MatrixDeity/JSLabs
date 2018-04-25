function checkAge1(age) {
    return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge2(age) {
    return age > 18 || confirm("Родители разрешили?");
}

let age = +prompt("age = ");
alert("Преверка через оператор \"?:\" вернула " + checkAge1(age));
alert("Проверка через оператор \"||\" вернула " + checkAge2(age));
