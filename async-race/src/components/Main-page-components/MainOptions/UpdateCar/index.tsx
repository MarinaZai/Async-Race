import React from "react";
import styles from "./styles.module.css";

export const UpdateCar = () => {
  return (
    <div className={styles.update_container}>
      <input type="text" />
      <input type="color" id="head" name="head" value="#e66465" />
      <button>UPDATE</button>
    </div>
  );
};
