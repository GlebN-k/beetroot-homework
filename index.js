// 1.Напиши всі можливі варіанти створення функцій.
// function declaration

function myFunc(a, b) {
  return a + b;
}

// function expression

const myFunc2 = function (a, b) {
  return a + b;
};

// arrow function
const myFunc3 = (a, b) => a + b;

// 2.Створи функцію, яка буде виводити кількість переданих їй аргументів.
function getArgumentsNumber() {
  return arguments.length;
}
console.log(getArgumentsNumber(1, 2, 3, 4, 5, 6, 7, 8, 9));

// 3.Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function compareNumbers(a, b) {
  if (arguments.length < 2) {
    return `You need to enter 2 arguments`;
  }

  for (let i of arguments) {
    if (i === "" || i === " " || isNaN(i)) {
      return "invalid data";
    }
  }
  return a < b ? -1 : a > b ? 1 : 0;
}
console.log(compareNumbers(10, 9));

// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function calculateFactorial(a) {
  if (!a || a === " " || isNaN(a)) return `invalid data`;

  return a === 1 ? 1 : a * calculateFactorial(a - 1);
}
console.log(calculateFactorial(5));

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function getConcatNumber(a = 0, b = 0, c = 0) {
  for (let i of arguments) {
    if (i === "" || i === " " || isNaN(i)) {
      return "invalid data";
    }
  }
  return a * 100 + b * 10 + c;
  //   alternative option  +(`${a}${b}${c}`)
}
console.log(getConcatNumber(7, 2, 1));

// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function getSquare(a, b) {
  for (let i of arguments) {
    if (i === "" || i === " " || isNaN(i)) {
      return "invalid data";
    }
  }
  return a * (b || a);
}
console.log(getSquare(2, 12));

// 7. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function getPerfectNumber(n) {
  let sumOfAllDividers = 0;

  if (n === "" || n === " " || isNaN(n)) {
    return "invalid data";
  }

  for (let i = 1; i < n; i++) {
    if (!(n % i)) {
      sumOfAllDividers += i;
    }
  }

  return sumOfAllDividers == n
    ? "Your number is pefect"
    : "Your number is not perfect";
}
console.log(getPerfectNumber(28));

// 8.Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function findPerfectNumber(i) {
  let sumOfAllDividers = 0;
  for (let j = 1; j < i; j++) {
    if (!(i % j)) {
      sumOfAllDividers += j;
    }
  }

  if (sumOfAllDividers == i) {
    return i;
  }
}

function getAllPerfectNumbers(a, b) {
  let arr = [];

  if (arguments.length < 2) return "you need to enter two numbers";

  for (let i of arguments) {
    if (i === "" || i === " " || isNaN(i)) {
      return "invalid data";
    }
  }

  for (let i = a; i <= b; i++) {
    let number = findPerfectNumber(i);
    if (number) {
      arr.push(number);
    }
  }
  return arr.join(", ");
}
console.log(getAllPerfectNumbers(1, 10000));
