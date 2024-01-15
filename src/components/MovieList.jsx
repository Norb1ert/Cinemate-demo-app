import { useMovies } from "../contexts/MoviesContext";
import Movie from "./Movie";
import styles from "./MovieList.module.css";

function MovieList() {
  const { movies } = useMovies();

  return (
    <ul className={styles.list}>
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieList;
