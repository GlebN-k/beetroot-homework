const table = document.getElementById("table");
const carNameHeader = document.getElementById("car-name-header");
const carPriceHeader = document.getElementById("car-price-header");
const carNamesCollection = document.querySelectorAll(".car-name");
const carPriceCollection = document.querySelectorAll(".car-price");
const carNameTD = document.querySelectorAll(".cars-name");
const carDateHeader = document.getElementById("car-date-header");

const sortCarsByName = () => {
  const newArr = [...carNamesCollection];

  if (!table.classList.contains("name")) {
    newArr.sort((a, b) => {
      if (a.firstElementChild.innerHTML < b.firstElementChild.innerHTML) {
        return -1;
      }
      if (a.firstElementChild.innerHTML > b.firstElementChild.innerHTML) {
        return 1;
      }
      return 0;
    });
  } else {
    newArr.sort((a, b) => {
      if (a.firstElementChild.innerHTML > b.firstElementChild.innerHTML) {
        return -1;
      }
      if (a.firstElementChild.innerHTML < b.firstElementChild.innerHTML) {
        return 1;
      }
      return 0;
    });
  }

  newArr.forEach((el) => {
    table.append(el);
  });

  table.classList.toggle("name");
};

const sortCarsByPrice = () => {
  const newArr = [...carNamesCollection];

  if (table.classList.contains("price")) {
    newArr.sort((a, b) => a.children[1].innerHTML - b.children[1].innerHTML);
  } else {
    newArr.sort((a, b) => b.children[1].innerHTML - a.children[1].innerHTML);
  }

  newArr.forEach((el) => {
    table.append(el);
  });

  table.classList.toggle("price");
};

const sortCarsByDate = () => {
  const newArr = [...carNamesCollection];

  if (table.classList.contains("year")) {
    newArr.sort((a, b) => {
      if (
        +a.children[2].innerHTML.substr(6) < +b.children[2].innerHTML.substr(6)
      ) {
        return -1;
      }
      if (
        +a.children[2].innerHTML.substr(6) > +b.children[2].innerHTML.substr(6)
      ) {
        return 1;
      }
      if (
        +a.children[2].innerHTML.substr(6) ===
        +b.children[2].innerHTML.substr(6)
      ) {
        if (
          +a.children[2].innerHTML.substr(3, 5) <
          +b.children[2].innerHTML.substr(3, 5)
        ) {
          return -1;
        }
        if (
          +a.children[2].innerHTML.substr(3, 5) >
          +b.children[2].innerHTML.substr(3, 5)
        ) {
          return 1;
        }
        return 0;
      }

      // return 0;
    });
  } else {
    newArr.sort((a, b) => {
      if (
        +a.children[2].innerHTML.substr(6) > +b.children[2].innerHTML.substr(6)
      ) {
        return -1;
      }
      if (
        +a.children[2].innerHTML.substr(6) < +b.children[2].innerHTML.substr(6)
      ) {
        return 1;
      }
      if (
        +a.children[2].innerHTML.substr(6) ===
        +b.children[2].innerHTML.substr(6)
      ) {
        if (
          +a.children[2].innerHTML.substr(3, 5) <
          +b.children[2].innerHTML.substr(3, 5)
        ) {
          return 1;
        }
        if (
          +a.children[2].innerHTML.substr(3, 5) >
          +b.children[2].innerHTML.substr(3, 5)
        ) {
          return -1;
        }
        return 0;
      }
    });
  }
  newArr.forEach((el) => {
    table.append(el);
  });

  table.classList.toggle("year");
};

carNameHeader.addEventListener("click", sortCarsByName);
carPriceHeader.addEventListener("click", sortCarsByPrice);
carDateHeader.addEventListener("click", sortCarsByDate);
