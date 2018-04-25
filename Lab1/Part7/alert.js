const ADMIN = "Админ";
const PASS = "Чёрный Властелин";

let login = prompt("Введите логин:");
if (login == null) {
    alert("Вход отменён!");
} else if (login == ADMIN) {
    let pass = prompt("Введите пароль:");
    if (pass == null) {
        alert("Вход отменён!");
    } else if (pass == PASS) {
        alert("Добро пожаловать!");
    } else {
        alert("Пароль неверен!");
    }
} else {
    alert("Я вас не знаю!");
}