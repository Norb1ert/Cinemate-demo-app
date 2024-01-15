import SearchBar from "./SearchBar";
import NumResults from "./NumResults";
import styles from "./Nav.module.css";
import User from "./User";

function Nav() {
  return (
    <div className={styles.nav}>
      <User />
      <SearchBar />
      <NumResults />
    </div>
  );
}

export default Nav;
