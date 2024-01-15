import { useMovies } from "../contexts/MoviesContext";
import styles from "./NumResults.module.css";

function NumResults() {
  const { movies } = useMovies();
  return <p className={styles.p}>{movies.length} Results</p>;
}

export default NumResults;
