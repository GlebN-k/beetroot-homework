// Запитай ім’я користувача та виведи у відповідь “Привіт, *ім’я*”;

const userName = prompt('Please, enter your name')

console.log(`Hello, ${userName}`)

// Запитай рік народження користувача, порахуй його/її вік і виведи результат. Поточний рік вкажи в коді як константу;

function UserAge() {
    const currentYear = 2023;

    const userBirthYear = +prompt('Please, enter your birth year')

    if (userBirthYear === +userBirthYear) {
        const hasBirthDay = confirm('Have you already had birthday this year?');

        return hasBirthDay ? console.log(`Your age is ${currentYear - userBirthYear} y.o.`) : console.log(`Your age is ${currentYear - userBirthYear - 1} y.o.`)
    } else {
        alert("it looks like you entered something, but not a number")
    }
}
UserAge();

// Запитай у користувача довжину сторони квадрату і виведи периметр цього квадрата. Виводимо в консоль
const sideLength = prompt('Please, enter side length of a square')

console.log(`Perimetr square is ${sideLength * 4} cm²`)

// Запитай у користувача радіус кола і виведи площу такої окружності.
const circleRadius = prompt('Please, enter circle radius')

console.log(`Circle square is ${3.14 * Math.pow(circleRadius, 2)} cm²`)

// Запитай у користувача відстань в кілометрах між двома містами і за скільки годин він хоче дістатися. Порахуй швидкість, з якою необхідно рухатися, щоб встигнути вчасно.
const distance = prompt('Please, enter distance between two cities in kilometres');

const time = prompt('Please, enter how many hours you want to get to the city');

console.log(`You need to move at the speed of ${Math.round(distance / time)} km/h`)

// Реалізуй конвертор валют. Користувач вводить долари, програма переводить їх в євро. Курс валют зберігається в константі.
let dollarExchangeRate = 40.5;
let euroExchangeRate = 43.3;

const dollarsAmount = prompt('Please, enter number of dollars you want to exhange');

console.log(`After exchange you will get ${(dollarsAmount * (dollarExchangeRate / euroExchangeRate)).toFixed(2)} euros`)


