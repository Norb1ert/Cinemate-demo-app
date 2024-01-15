// import WatchedMovie from "./WatchedMovie";

import { useMovies } from "../contexts/MoviesContext";
import WatchedMovie from "./WatchedMovie";
import styles from "./WatchedMovieList.module.css";

function WatchedMovieList() {
  const { watched } = useMovies();
  return (
    <ul className={styles.list}>
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
