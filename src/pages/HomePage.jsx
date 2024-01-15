import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";
import Button from "../components/Button";

function HomePage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Discover best movies
          <br />
          All at your disposal in few clicks!
        </h1>
        <h2>
          Welcome to Cinemate, your gateway to the world of movies! Dive into
          the magic of storytelling, explore diverse genres, and discover a
          universe of cinematic wonders right at your fingertips. Whether
          you&apos;re a seasoned cinephile or just starting your film journey,
          Cinemate is here to make your movie experience unforgettable.
        </h2>
        <p>
          <span>
            &quot;Every movie is a journey, a story waiting to be told.&quot;
          </span>
        </p>
        <Link to="/login" className="cta">
          <Button>Start Searching</Button>
        </Link>
      </section>
    </main>
  );
}

export default HomePage;
