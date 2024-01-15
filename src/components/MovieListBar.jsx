import { useMovies } from "../contexts/MoviesContext";
import Box from "./Box";
import Details from "./Details";
import WatchStats from "./WatchStats";
import WatchedMovieList from "./WatchedMovieList";

function MovieListBar() {
  const { selectedId } = useMovies();
  return (
    <Box>
      {selectedId ? (
        <Details />
      ) : (
        <>
          <WatchStats />
          <WatchedMovieList />
        </>
      )}
    </Box>
  );
}

export default MovieListBar;
