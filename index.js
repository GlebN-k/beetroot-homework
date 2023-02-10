// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
const car = {
  manufacturer: "Volkswagen",
  model: "Passat",
  year: 2020,
  averageSpeed: 120,
  fuelCapacity: 100,
  averageConsumption: 8,
  drivers: ["John", "Mark", "Steven"],
  // 1.1 Метод, який виводить на екран інформацію про автомобіль.
  getCarInfo() {
    for (let [key, value] of Object.entries(this)) {
      if (typeof value === "function") continue;
      console.log(`${key}: ${value}`);
    }
  },
  // 1.2. Додавання ім’я водія у список
  addDriverName(driverName) {
    this.drivers.push(driverName);
  },
  // 1.3 Перевірка водія на наявність його ім’я у списку
  checkDriverInList(driverName) {
    if (this.drivers.includes(driverName)) {
      console.log(`${driverName} is already in the list`);
    } else {
      if (
        confirm(
          `Driver ${driverName} is not in the list. Would you like to add driver?`
        )
      ) {
        this.addDriverName();
      } else return;
    }
  },
  // 4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
  calculateTimeAndFuel(distance) {
    let hours = Math.floor(distance / this.averageSpeed);
    let minutes = Math.trunc(
      ((distance / this.averageSpeed).toFixed(2) - hours) * 60
    );

    let hoursForRest = Math.floor(hours / 4);
    hours += hoursForRest;

    hours = hours ? hours + " hours " : "";
    minutes = minutes ? minutes + " minutes " : "";

    let fuelQuantity = Math.round((distance / 100) * this.averageConsumption);

    return `You need ${hours}${minutes}and about ${fuelQuantity} liters of fuel`;
  },
};
// console.log(car.calculateTimeAndFuel(340));

// 2. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
const time = {
  hours: 8,
  minutes: 4,
  seconds: 15,
  // 2.1 Для виведення часу на екран
  showTime() {
    this.hours = this.hours < 10 ? "0" + (+this.hours) : this.hours;
    this.minutes = this.minutes < 10 ? "0" + (+this.minutes) : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + (+this.seconds) : this.seconds;
    alert(`${this.hours}:${this.minutes}:${this.seconds}`);
  },
  // 2.2 Зміни часу на передану кількість секунд.
  addSeconds(sec) {
    this.seconds += sec;
    this.minutes =  +this.minutes + Math.floor(this.seconds / 60);

    if (this.minutes >= 60) {
      this.hours = +this.hours + Math.floor(this.minutes / 60);
      this.minutes = this.minutes - Math.floor(this.minutes / 60) * 60;
    }
    this.seconds = this.seconds - Math.floor(this.seconds / 60) * 60;
    time.showTime();
  },
  // 2.3 Зміни часу на передану кількість хвилин.
  addMinutes(min) {
    this.minutes = +this.minutes + min;
    this.hours = +this.hours + Math.floor(this.minutes / 60);
    if (this.hours >= 24) {
      this.hours = this.hours - Math.floor(this.hours / 24) * 24;
    }

    this.minutes = this.minutes - Math.floor(this.minutes / 60) * 60;
    this.showTime();
  },
  // 2.4. Зміни часу на передану кількість годин.
  addHours(hours) {
    this.hours += hours;
    this.hours = this.hours - Math.floor(this.hours / 24) * 24;
    // this.minutes = this.minutes - Math.floor(this.minutes / 60) * 60
    this.showTime();
  },
};

