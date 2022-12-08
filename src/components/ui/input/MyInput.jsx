import React from "react";
import styles from "./MyInput.module.css";

export default React.forwardRef(function MyInput(props, ref) {
  return <input ref={ref} className={styles.myInput} {...props} />;
});
