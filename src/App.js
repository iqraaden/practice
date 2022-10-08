import { useEffect, useState } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com?apikey=4c7c4deb';

const movie1 = {
  "Title": "Spiderman",
  "Year": "1990",
  "imdbID": "tt0100669",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');


  }, [])
  return (

    <div className="app" > <h1>MovieApp</h1>
      <div className="search">
        <input placeholder="search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} />
      </div>
      {
        movies?.length > 0
          ? (<div className="container">
            {movies.map((movie) =>
              <MovieCard movie={movie} />)}
          </div>
          ) : (
            <div>
              <h2>No movies found</h2>
            </div>
          )

      }

    </div>
  );
}

export default App;
