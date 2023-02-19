// create pst of 20 elements inside js file ( even : background blue , color: white, apgn on right side / odd  background pink , color: black, apgn on left side, first element and last element apgn center heading 2 )
const cars = [
  "mazda",
  "bmv",
  "opel",
  "reno",
  "audi",
  "honda",
  "hyundai",
  "ford",
  "infinity",
  "fiat",
  "subaru",
  "dodge",
  "mersedez",
  "toyota",
  "tesla",
  "range rover",
  "land rover",
  "linkoln",
  "maybach",
  "kia",
];

const body = document.getElementById("body");

cars.filter((car, index) => index % 2 === 0 && index !== 0)
  .forEach((el) => {
    const p = document.createElement("p");
    p.innerHTML = el;
    p.style.cssText = "background: blue; color: white; text-align: right; padding: 10px";
    body.append(p);
  });

cars.filter((car, index, carsArr) => index % 2 === 1 && index !== carsArr.length - 1)
  .forEach((el) => {
    const p = document.createElement("p");
    p.innerHTML = el;
    p.style.cssText = "background: pink; color: black; text-align: left; padding: 10px";
    body.append(p);
  });

cars.filter((car, index, carsArr) => index === 0 || index === carsArr.length - 1)
  .forEach((el) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = el;
    h2.style.cssText = "text-align: center; padding: 10px";
    body.append(h2);
  });
