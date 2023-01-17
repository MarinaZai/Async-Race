import React from "react";
import styles from "./styles.module.css";

export const RaceFunctionality = () => {
  return (
    <div className={styles.race_functionality_container}>
      <button>RACE</button>
      <button>RESET</button>
      <button>GENERATE CARS</button>
    </div>
  );
};
