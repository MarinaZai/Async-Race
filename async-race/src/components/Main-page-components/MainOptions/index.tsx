import React from "react";
import { CreateCar } from "./CreateCar";
import { RaceFunctionality } from "./RaceFunctionality";
import styles from "./styles.module.css";
import { UpdateCar } from "./UpdateCar";

export const MainOptions = () => {
  return (
    <div className={styles.main_options}>
      <CreateCar />
      <UpdateCar />
      <RaceFunctionality />
    </div>
  );
};
