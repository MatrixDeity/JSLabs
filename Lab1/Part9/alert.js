var login = prompt("Введите Ваш логин:");

var message = login == "Вася" ? "Привет" :
              login == "Директор" ? "Здравствуйте" :
              login == "" ? "Нет логина" : "";
alert(message);
