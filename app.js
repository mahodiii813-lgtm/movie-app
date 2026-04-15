"use strict";


console.log("Movie App - DAG 2 starter...");


const movie1="inception";
const movie2="the matrix";
const movie3="interstellar";



"use strict";
console.log("Movie App starter...");

const movies=["inception","the matrix","interstellar", "the dark knight", "Pulp Fiction"];


console.log("alle film:", movies);

console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);
console.log("Sidste film:", movies[3]);
console.log("Sidste film:", movies[10]);

const movieList = document.querySelector("#movie-list");
console.log(movieList);

for (const movie of movies) {
  const html = /* html */ `
    <article class="movie-card">
      <div class="movie-info">
        <h3>${movie}</h3>
      </div>
    </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}



console.log("Antal film:", movies.length);
