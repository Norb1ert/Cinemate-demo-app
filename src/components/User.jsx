import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div className={styles.user}>
      <img src="avatar.jpg"></img>
      <span>Hello, {user.name}</span>
      <button onClick={handleLogout} className={styles.btn}>
        Logout
      </button>
    </div>
  );
}

export default User;
