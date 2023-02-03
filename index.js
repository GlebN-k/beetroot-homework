// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
const userAge = prompt("Please, enter your age")

if (isNaN(userAge) || userAge === "" || userAge < 0) {
    console.log("invalid data")
} else {
    switch (true) {
        case (userAge >= 0 && userAge < 12):
            console.log("User is a child")
            break;
        case (userAge >= 12 && userAge < 18):
            console.log("User is a teenager")
            break;
        case (userAge >= 18 && userAge < 60):
            console.log("User is a adult")
            break;
        case (userAge >= 60):
            console.log("User is a retiree")
            break;
    }
}

// 2.Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
const number = prompt("Please enter number from 0 to 9");

    switch (number) {
        case "0":
            console.log(")")
            break;
        case "1":
            console.log("!")
            break;
        case "2":
            console.log("@")
            break;
        case "3":
            console.log("#")
            break;
        case "4":
            console.log("$")
            break;
        case "5":
            console.log("%")
            break;
        case "6":
            console.log("^")
            break;
        case "7":
            console.log("&")
            break;
        case "8":
            console.log("*")
            break;
        case "9":
            console.log("(")
            break;
            default:
                console.log("invalid data")
    }

// 3.Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const firstNumber = +prompt("Enter the first number");
const secondNumber = +prompt("Enter the second number");
let result = 0;

if (isNaN(firstNumber) || firstNumber === "" || isNaN(secondNumber) || secondNumber === "") {
    console.log("invalid data")
} else {

    for (let i = firstNumber; i <= secondNumber; i++) {
        result += i;
    }

console.log(result)
}
// 2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.
const purchaseSum = prompt("Please enter purchase sum")
if (isNaN(purchaseSum) || purchaseSum ==="" || purchaseSum ===" ") {
    console.log("invalid data")
} else {
    switch (true) {
        case (purchaseSum >= 200 && purchaseSum < 300):
            console.log(`Purchase sum after discont is ${purchaseSum - (purchaseSum*0.03)}`)
            break;
        case (purchaseSum >= 300 && purchaseSum < 500):
            console.log(`Purchase sum after discont is ${purchaseSum - (purchaseSum*0.05)}`)
            break;
        case (purchaseSum >= 500 ):
            console.log(`Purchase sum after discont is ${purchaseSum - (purchaseSum*0.07)}`)
            break;
        default:
            console.log("Your purchase sum is not enough for discount")
    }
}

// // 3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.
let positiveNumbers = 0;
let negativeNumbers = 0;
let zeroNumbers = 0;
let oddNumbers = 0;
let evenNumbers = 0;

for (let i = 0; i <= 9; i++) {
    let number = prompt("Please enter a number")

    if (isNaN(number) || number === "") {
        alert("You entered not a number")
    } else {

        number == 0 ? ++zeroNumbers : number > 0 ? ++positiveNumbers : ++negativeNumbers

        number % 2 ? ++oddNumbers : ++evenNumbers
    }
}

console.log(`You entered some numbers, of which
        positive numbers: ${positiveNumbers};
        negative numbers: ${negativeNumbers};
        zeros: ${zeroNumbers};
        oddNumbers: ${oddNumbers};
        evenNumbers: ${evenNumbers}.
        `
)

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let today = "Monday"
while (confirm(`${today}. Would you like to see next day?`)) {

    switch(today) {
        case "Monday":
        today = "Thuesday";
        break;
        case "Thuesday":
        today = "Wednesday";
        break;
        case "Wednesday":
        today = "Thursday";
        break;
        case "Thursday":
        today = "Friday";
        break;
        case "Friday":
        today = "Saturday";
        break;
        case "Saturday":
        today = "Sunday";
        break;
        case "Sunday":
        today = "Monday";
        break;
    }
}

// 2. Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10./
for (let i = 2; i <= 9; i++) {
    let result;
    console.log(`multiplication table for number ${i}`)
    for (j = 1; j <= 10; j++) {
        result = i * j
        console.log(`${i} * ${j} = ${i * j}`)
    }
}

// 3.Запитай дату (день, місяць, рік) і виведи наступну за нею дату. Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.
let day = +prompt("Please enter calendar day");
let month = +prompt("Please enter number of a month");
let year = +prompt("Please enter number of a year");
let nextDay = "";

console.log(`You entered ${day}.${month}.${year}`);

const monthsOf31days = [1, 3, 5, 7, 8, 10, 12];
const monthsOf30days = [4, 6, 9, 11];

switch (true) {
  case day === 31 && month === 12:
    day = 1;
    month = 1;
    ++year;
    break;

  case day === 31 && monthsOf31days.includes(month):
    day = 1;
    ++month;
    break;

  case day === 30 && monthsOf30days.includes(month):
    day = 1;
    ++month;
    break;

  case ((month === 2 && 0 == year % 4) || 0 == year % 400) && day === 29:
    day = 1;
    ++month;
    break;

  case ((month === 2 && 0 == year % 4) || 0 == year % 400) && day === 28:
    ++day;
    break;

  case month === 2 && day === 28:
    day = 1;
    ++month;
    break;

  case day < 31:
    ++day;
    break;
}
day < 10 ? (day = "0" + day) : day;
month < 10 ? (month = "0" + month) : month;

console.log(`Next day is ${day}.${month}.${year}`);
