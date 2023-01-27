// Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
console.log(+(0.1 + 0.2).toFixed(1))

// Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
let a = "1";
let b = 2;

console.log(+a + b);

// // Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
const memoryDevice = prompt("Please, enter your device memory in gygabytes")

console.log(`You can save up to ${Math.floor(memoryDevice*1000/820)} files of 820MB in size`)

// Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
const moneyAmount = prompt("How much money do you have?");
const chocolatePricePerOne = prompt("Please, enter the price of chocolate bar")

console.log(`You can afford ${Math.floor(moneyAmount/chocolatePricePerOne)} chocolate bars and amount of ${moneyAmount%chocolatePricePerOne} hrns will stay in your pocket`)

// Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).

// first option
const number = +prompt("Please, enter three-digit number");
const reversedNumber = `${number % 10}${Math.floor(number / 10) % 10}${Math.floor(number / 100) % 10}`;
console.log(reversedNumber);

// // second option
const numberEnteredByUser = +prompt("Please, enter three-digit number");
const firstDigit = (numberEnteredByUser % 10) * 100;
const secondDigit = (Math.floor(numberEnteredByUser / 10) % 10) * 10;
const thirdDigit = Math.floor(numberEnteredByUser / 100);
const reversedNumber2 = firstDigit + secondDigit + thirdDigit;
console.log(reversedNumber2);

// Користувач вводить суму вкладу в банк на 2 місяці, з процентною ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
let depositAmount = prompt('Please enter amount of the deposit');
let depositRatePerYear = 0.05;
let depositTerm = 2;
let amountOfAccruedInterest = (depositAmount * depositRatePerYear / 12).toFixed(2) * depositTerm;

console.log(`You will get amount of ${amountOfAccruedInterest} dollars after ${depositTerm} months`)


