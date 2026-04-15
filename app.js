"use strict";


console.log("Movie App - DAG 2 starter...");


const movies=[
  {
    title: "Inception",
    year: 2010,
    rating: 8.8
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7
  },
];
  
console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);

for (const movie of movies) {
  console.log("Titel:", movie.title);
}