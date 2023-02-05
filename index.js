// 1. Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
const shoppingList = [
  { name: "milk", quantity: 3, isBought: true, pricePerOne: 30, sum: 90 },
  { name: "potatoes", quantity: 4, isBought: false, pricePerOne: 10, sum: 40 },
  { name: "oranges", quantity: 3, isBought: true, pricePerOne: 10, sum: 30 },
  { name: "apples", quantity: 1, isBought: false, pricePerOne: 20, sum: 20 },
  {
    name: "chocolates",
    quantity: 4,
    isBought: false,
    pricePerOne: 50,
    sum: 200,
  },
  { name: "cheese", quantity: 2, isBought: false, pricePerOne: 50, sum: 100 },
  { name: "water", quantity: 10, isBought: false, pricePerOne: 15, sum: 150 },
];
// 1.1 Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
function sortShoppingListFromUnbought() {
  const arrayOfProductsFromUnbought = [...shoppingList].sort(
    (a, b) => a.isBought - b.isBought
  );
  return arrayOfProductsFromUnbought;
}
// console.log(sortShoppingListFromUnbought());

//1.2 Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function changeStatusOfPurchase(productName) {
  let indexNumber = shoppingList.findIndex((el) => el.name === productName);

  if(indexNumber === -1) {
    console.log(`${productName} doesn't exist in the Shopping list`)
  }

  shoppingList[indexNumber].isBought = true;
}
// changeStatusOfPurchase("apples");

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
function deletePurchaseItem(productName) {
  const newArr = [...shoppingList].filter((el) => el.name !== productName);
  return newArr;
}
// deletePurchaseItem("cheese");

// 2. Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, необхідно збільшувати кількість в існуючій покупці, а не додавати нову. При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
function addPurchaseItemtoList(productName) {
  if(!isNaN(productName) || typeof productName !== "string" ) {
    return "invalid data"
  }
  
    const indexOfProduct = shoppingList.findIndex(
    (el) => el.name === productName
  );
  if (indexOfProduct >= 0) {
    ++shoppingList[indexOfProduct].quantity;
    shoppingList[indexOfProduct].sum +=
      shoppingList[indexOfProduct].pricePerOne;
    console.log(shoppingList);
  } else {
    const pricePerItem = +prompt("How much does your new item cost?");
    let newPurchaseItem = {
      name: productName,
      quantity: 1,
      isBought: false,
      pricePerOne: pricePerItem,
      sum: pricePerItem,
    };
    shoppingList.push(newPurchaseItem);
  }
}
// addPurchaseItemtoList("tomatoes");

// 1. Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function getSumOfAllPurchases() {
  const sumOfAllPurchases = shoppingList.reduce(
    (total, item) => total + item.sum,
    0
  );

  return sumOfAllPurchases;
}
// console.log(getSumOfAllPurchases())

// 2. Підрахунок суми всіх (не) придбаних продуктів.
function getSumOfAllUnpurchasedProducts() {
  const arrayOfAllUnboughtProducts = shoppingList.filter(
    (el) => el.isBought === false
  );
  const sumOfAllUnboughtProducts = arrayOfAllUnboughtProducts.reduce(
    (total, item) => total + item.sum,
    0
  );
  return sumOfAllUnboughtProducts;
}
// console.log(getSumOfAllUnpurchasedProducts());

// 3.Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
function sortShoppingList() {
  const criteria = confirm(
    "Would you like to see shopping list from biggest sum to lower?"
  );

  const sortedArray = [...shoppingList];

  return criteria
    ? sortedArray.sort((a, b) => b.sum - a.sum)
    : sortedArray.sort((a, b) => a.sum - b.sum);
}

// console.log(sortShoppingList());
