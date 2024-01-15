import SideBar from "../components/SideBar";
import MovieListBar from "../components/MovieListBar";
import styles from "./MoviesPage.module.css";
import Nav from "../components/Nav";

function MoviesPage() {
  return (
    <div className={styles.view}>
      <Nav />
      <div className={styles.app}>
        <SideBar />
        <MovieListBar />
      </div>
    </div>
  );
}

export default MoviesPage;
