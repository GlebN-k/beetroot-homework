const btnSearch = document.getElementById("btn-search");

const _endpoint = "http://api.openweathermap.org/data/2.5/weather?";

// function for creating weather forecast item from the data, which was got from API
const createWeatherForecastItem = ({
  name,
  sys: { country },
  main: { temp, feels_like, humidity },
  wind: { speed },
  weather: [{ main: clouds }],
}) => {
  // creating object for saving and storing in Local Storage
  let cityWeather = {
    name,
    country,
    temp,
    feels_like,
    humidity,
    speed,
    clouds,
  };
  localStorage.setItem(`${name}`, JSON.stringify(cityWeather));
  return `<div class='forecast__container'>
            <div class='forecast__main-info'>   
                <div class='forecast__city-temp'>
                    <h2 class='city-name'>${name}, ${country}</h2>
                    <div class='temp'>${temp} °С</div>
                </div>
                <div class="img-weather__container">
                    <img id="img-weather" class="img-weather" data-weather=${clouds} src="">
                </div>
            </div>
                <div class='widget__container'>
                    <div class='wind-speed__container'>
                        <div>${speed} m/s</div> 
                        <div>Wind speed</div>
                    </div>
                    <div class='humidity__container'>
                        <div>${humidity} %</div> 
                        <div>Humidity</div> 
                    </div>
                    <div class='feels-like__container'>
                        <div>${feels_like} °С</div>
                        <div>Feels like</div> 
                    </div>
                </div>
        </div>`;
};

// function for creating weather item from  Local Storage
const createWeatherItemFromLocalStorage = ({
  name,
  country,
  temp,
  feels_like,
  humidity,
  speed,
  clouds,
}) => {
  return `<div class='forecast__container'>
                <div class='forecast__main-info'>   
                    <div class='forecast__city-temp'>
                        <h2 class='city-name'>${name}, ${country}</h2>
                        <div class='temp'>${temp} °С</div>
                    </div>
                    <div class="img-weather__container">
                        <img id="img-weather" class="img-weather" data-weather=${clouds} src="">
                    </div>
                </div>
                  <div class='widget__container'>
                      <div class='wind-speed__container'>
                          <div>${speed} m/s</div> 
                          <div>Wind speed</div>
                      </div>
                      <div class='humidity__container'>
                          <div>${humidity} %</div> 
                          <div>Humidity</div> 
                      </div>
                      <div class='feels-like__container'>
                          <div>${feels_like} °С</div>
                          <div>Feels like</div> 
                      </div>
                  </div>
          </div>`;
};
// create icon for weather forecast
const createWeatherIcon = () => {
  let img = document.getElementById("img-weather");
  switch (img.dataset.weather) {
    case "Clear":
      img.src = "./assets/icons/free-icon-sun-6389147.png";
      img.classList.add('rotation')
      break;

    case "Rain":
      img.src = "./assets/icons/free-icon-watering-7265400.png";
      img.classList.add('rain')
      break;

    case "Snow":
      img.src = "./assets/icons/free-icon-snowflake-6409128.png";
      img.classList.add('rotation')
      break;

    case "Clouds":
      img.src = "./assets/icons/free-icon-cloud-1163624.png";
      img.classList.add('move')
      break;

    case "Haze":
    case "Mist":
      img.src = "./assets/icons/haze.png";
      img.classList.add('move')
      break;
  }
};

// check if there is a weather forecast in the Local Storage
const checkLocalStorage = (inputValue) => {
  let result = false;
  for (let i of Object.keys(localStorage)) {
    if (inputValue === i) {
      result = true;
    }
  }
  return !result;
};

// delete weather item from local storage // for testing I set timer on 1 min instead of 2 hours
const deleteItemFromLocalStorage = (item) => {
  setTimeout(() => {
    localStorage.removeItem(item);
  }, 60000);
};

// getting data from the Weather API
const findWeatherForecast = () => {
  let inputValue = document.getElementById("searchInput").value;
  inputValue = inputValue[0].toUpperCase() + inputValue.slice(1);
  const containerResult = document.getElementById("container-result");

  if (checkLocalStorage(inputValue)) {
    fetch(
      `${_endpoint}q=${inputValue}&units=metric&lang=ua&APPID=6f1f2a9f9f48c0675ae85c9bf37b10f7`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        containerResult.innerHTML = createWeatherForecastItem(response);
      })
      .then(() => {
        createWeatherIcon();
      })
      .then(() => {
        deleteItemFromLocalStorage(inputValue);
      })
      .catch((err) => {
        alert("we didn`t find such city");
        console.log(err);
      });
  } else {
    // here we get information from localStorage
    containerResult.innerHTML = createWeatherItemFromLocalStorage(
      JSON.parse(localStorage.getItem(inputValue))
    );
    createWeatherIcon();
  }
};

btnSearch.addEventListener("click", findWeatherForecast);

