import React from "react";
import styles from "./styles.module.css";

export const UpdateCar = () => {
  return (
    <div className={styles.update_container}>
      <input type="text" placeholder="update name"/>
      <input type="color" id="head" name="head" value="#707070" />
      <button>UPDATE</button>
    </div>
  );
};
