/* eslint-disable react/prop-types */

import { useMovies } from "../contexts/MoviesContext";
import styles from "./Movie.module.css";

function Movie({ movie }) {
  const { handleSelectMovie } = useMovies();

  return (
    <li
      className={styles.movie}
      // eslint-disable-next-line no-undef
      onClick={() => handleSelectMovie(movie.imdbID)}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
