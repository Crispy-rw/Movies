import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles.css";
import MovieList from "./Components/MovieList";
import "./styles.css";

export default function App() {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      Title: "Star Wars: Episode VI - Retur n of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    }
  ]);

  useEffect(() => {
    getMovierequest();
  }, []);

  const getMovierequest = async () => {
    const url = "http://www.omdbapi.com/?s=star wars&apikey=af845a7a";

    // const response = await fetch(`${url}`);
    // const responceJson = await response.json();

    // console.log(responceJson);
  };

  return (
    <div className="container-fluid movie-app ">
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
