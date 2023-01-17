import React from "react";
import styles from "./styles.module.css";

export const CreateCar = () => {
  return (
    <div className={styles.create_container}>
      <select id="select">
        <option>one</option>
        <option selected>two</option>
        <option>three</option>
      </select>
      <input type="color" id="head" name="head" value="#e66465"></input>
      <button>CREATE</button>
    </div>
  );
};
