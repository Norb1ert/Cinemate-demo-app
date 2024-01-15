/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { useMovies } from "../contexts/MoviesContext";
import styles from "./WatchedMovie.module.css";

function WatchedMovie({ movie }) {
  const { handleDelete } = useMovies();
  return (
    <li className={styles.list}>
      <button
        onClick={() => handleDelete(movie.imdbID)}
        className={styles.delete}
      >
        X
      </button>
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className={styles.image}
      />
      <h3>{movie.title}</h3>
      <div className={styles.stats}>
        <p>⭐{movie.imdbRating}</p>
        <p>📆{movie.year}</p>
        <p>⌛{movie.runtime}</p>
      </div>
    </li>
  );
}

export default WatchedMovie;
