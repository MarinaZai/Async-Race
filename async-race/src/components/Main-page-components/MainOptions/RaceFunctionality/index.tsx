import React from "react";
import styles from "./styles.module.css";

export const RaceFunctionality = (props: {
  setIsAnimationStarted: (isStarted: boolean) => void;
}) => {
  return (
    <div className={styles.race_functionality_container}>
      <button
        onClick={() => {
          props.setIsAnimationStarted(true);
        }}
      >
        RACE
      </button>
      <button
        onClick={() => {
          props.setIsAnimationStarted(false);
        }}
      >
        RESET
      </button>
      <button>GENERATE CARS</button>
    </div>
  );
};
