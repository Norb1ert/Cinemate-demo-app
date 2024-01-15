import { useEffect, useState } from "react";
import { useMovies } from "../contexts/MoviesContext";
import Spinner from "./Spinner";
import Button from "./Button";
import styles from "./Details.module.css";
import StarRating from "./StarRating";

const KEY = "45227de6";

function Details() {
  const { selectedId, isLoading, setSelectedId, watched } = useMovies();
  const [movie, setMovie] = useState({});
  const { handleAddWatched } = useMovies();
  // eslint-disable-next-line no-unused-vars
  const [userRating, setUserRating] = useState("");

  const {
    Title: title,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    Year: year,
  } = movie;

  function onAddWatched() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      poster,
      year,
      userRating,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
    };
    handleAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  function onCloseMovie() {
    setSelectedId(null);
  }

  useEffect(
    function () {
      async function getMovieDetails() {
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        console.log(data);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <header className={styles.header}>
            <button className={styles.back} onClick={onCloseMovie}>
              &larr;
            </button>
            <img
              src={poster}
              alt={`Poster of a ${movie}`}
              className={styles.image}
            />
            <div className={styles.overview}>
              <h2 className={styles.title}>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMBd Rating
              </p>
            </div>
          </header>
          {!isWatched ? (
            <section className={styles.add}>
              <StarRating
                size={20}
                color="	#DAA520"
                onSetRating={setUserRating}
              />
              {userRating > 0 && (
                <Button type="add" onClick={onAddWatched}>
                  + Add to list
                </Button>
              )}
            </section>
          ) : (
            <p className={styles.watched}>You already rated this movie</p>
          )}
          <section className={styles.additional}>
            <p>
              <em>{plot}</em>
            </p>
            <p className={styles.info}>Starring: {actors}</p>
            <p className={styles.info}>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default Details;
