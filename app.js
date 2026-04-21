
"use strict";

const movies = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    image:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    title: "The Shawshank Redemption",
    year: 1994,
    rating: 9.3,
    image: "https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg",
  },
  {
    title: "Oppenheimer",
    year: 2023,
    rating: 8.4,
    image:
      "https://m.media-amazon.com/images/M/MV5BN2JkMDc5MGQtZjg3YS00NmFiLWIyZmQtZTJmNTM5MjVmYTQ4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    title: "Dune",
    year: 2021,
    rating: 8.0,
    image:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  },
];

const movieList = document.querySelector("#movie-list");

showMovies();

function showMovies() {
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
        <h3>${formatMovieTitle(movie.title, movie.year)}</h3>
      
        <p>Rating: ${movie.rating}</p>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}
function formatMovieTitle(title, year) {
  return `${title} (${year})`;
}
console.log(formatMovieTitle("Inception", 2010));