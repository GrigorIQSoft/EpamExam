//Создать объект car, добавить к нему свойство color со значением 'черный'
let car = { color: "Black" }

//зменить свойство color объекта car на 'зеленый'
car.color = "Yellow"

//В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
car.power = function () { console.log("мощность двигателя : 250 ") }

// На склад принимают груши и яблоки,
// напишите функцию, которая возвращает результат сложения количества принятых груш и яблок
function warehouse(pear, apple) {
    return pear + apple
}

// В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале
// (если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)
function sayHi(name) {
    if (name === 'Grigor') {
        return "привет  " + name
    }
    else {
        return " нет такого имени "
    }
}

// Напишите функцию вычисления типа аргумента и вывод типа в консоль
function logType(arg) {
    return  (typeof (arg))
}

// Напишите функцию, которая определяет является ли число простым или нет
function test_prime(n) {
    if (n === 1) { return false }
    else if (n === 2) {
        return true;
    } else {
        for (let x = 2; x < n; x++) {
            if (n % x === 0) {
                return false;
            }
        }
        return true;
    }
}


