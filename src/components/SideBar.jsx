import styles from "./SideBar.module.css";
import Box from "./Box";
import MovieList from "./MovieList";
import { useMovies } from "../contexts/MoviesContext";
import Spinner from "./Spinner";
import Message from "./Message";

function SideBar() {
  const { isLoading, error } = useMovies();
  return (
    <main className={styles.sidebar}>
      <section>
        <Box>
          {!isLoading && !error && <MovieList />}
          {isLoading && <Spinner />}
          {error && <Message message={error} />}
        </Box>
      </section>
    </main>
  );
}

export default SideBar;
