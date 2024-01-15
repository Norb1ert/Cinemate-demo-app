/* eslint-disable react/prop-types */
import { useState } from "react";
// import Button from "./Button";
import styles from "./Box.module.css";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={styles.box}>
      <button onClick={() => setIsOpen((open) => !open)} className={styles.cta}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
