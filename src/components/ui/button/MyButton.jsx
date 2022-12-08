import React from "react";
import styles from "./MyButton.module.css";

export default function MyButton({ children, ...props }) {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
}
