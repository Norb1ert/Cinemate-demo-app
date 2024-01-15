import styles from "./SearchBar.module.css";
import { useMovies } from "../contexts/MoviesContext";

function SearchBar() {
  const { query, setQuery } = useMovies();
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className={styles.input}
    />
  );
}

export default SearchBar;
