const btn = document.getElementById("btn");
const movieContainer = document.getElementById("movie-container");
// const btnShowNext = document.getElementById("btnNextPage");

const API = `https://www.omdbapi.com/?apikey=f1b0a872`;

const createFilmItem = ({ imdbID, Title, Poster }) => {
  // if movie doesn`t have a poster, set default poster
  if (Poster === "N/A") {
    Poster = "./img/000000h1.jpeg";
  }
  return `<div class="film">
                <p class="film-name">${Title}</p>
                <img class="film-poster" src="${Poster}" alt="${Title}">
                <button class="btn-details" data-key="${imdbID}">Details</button>
            </div>`;
};

// show info about chosen movie
const showInfoAboutFilm = ({
  Title,
  Poster,
  imdbRating,
  Year,
  Plot,
  Actors,
}) => {
  return `<div class="movie-container2">
                <img class="film-poster" src="${Poster}" alt="${Title}">
                <div class="movie-info">
                    <h3>${Title}</h3>
                    <p>Raiting: ${imdbRating}</p>
                    <p>Date of release: ${Year}</p>
                    <p>${Plot}</p>
                    <p>Actors: ${Actors}</p>
                </div>         
            </div> 
            `;
};

const showInfoOfChosenFilm = (e) => {
  const filmId = e.target.dataset.key;
  fetch(`${API}&i=${filmId}`).then((response) =>
    response.json().then((movie) => {
      const chosenFilmContainer = document.getElementById("chosen-film-info");
      chosenFilmContainer.innerHTML = showInfoAboutFilm(movie);
      window.scrollTo({
        top: 180,
        behavior: "smooth",
      });
    })
  );
};

const createBtnNextPage = () => {
  const btnNextPage = document.createElement("button");
  btnNextPage.textContent = "Show next results";
  btnNextPage.classList.add("btnNextPage");
  let page = 1;
  addEventListener("click", () => {
    getFilmsCollection(++page);
  });
  return btnNextPage;
  // return `<button class="btnNextPage" id="btnNextPage">Show next results</button>`
};

// const downloadNextFilms = () => {
//     let page = 1;
//     ++page
//     getFilmsCollection(page)
// }

// to find and get film from API OMDB
const getFilmsCollection = (page = 1) => {
  const input = document.getElementById("name");
  const select = document.getElementById("type");

  fetch(`${API}&s=${input.value}&type=${select.value}&page=${page}`)
    .then((response) => response.json())
    .then((res) => res.Search)
    .then((arrayOfFilms) => {
      movieContainer.innerHTML = "";
      arrayOfFilms.forEach((element) => {
        console.log(element);
        movieContainer.innerHTML += createFilmItem(element);
      });

    //   if (!document.getElementById("btnNextPage")) {
    //     document.body.append(createBtnNextPage());
    //   }
    })
    .then(() => {
      const allBtnDetails = movieContainer.querySelectorAll(".btn-details");
      allBtnDetails.forEach((button) =>
        button.addEventListener("click", showInfoOfChosenFilm)
      );
    })
    .catch((err) => console.log(err));
};

btn.addEventListener("click", getFilmsCollection);

// btnShowNext.addEventListener("click", () => {
//   getFilmsCollection(++page);
// });
