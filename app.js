"use strict";

const MOVIES_URL =
  "https://raw.githubusercontent.com/cederdorff/race/refs/heads/master/data/movies.json";
let allMovies = [];
const movieList = document.querySelector("#movie-list");

fetchMovies();

async function fetchMovies() {
  const response = await fetch(MOVIES_URL);
  allMovies = await response.json();

  showMovies(allMovies);
}

function showMovies(movies) {
  movieList.innerHTML = "";

  for (const movie of movies) {
    showMovie(movie);
  }
}

function showMovie(movie) {
  const html = /* html */ `
    <article class="movie-card">
      <img class="movie-image" src="${movie.image}" alt="${movie.title}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}



