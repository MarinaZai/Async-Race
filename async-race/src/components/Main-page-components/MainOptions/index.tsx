import React from "react";
import { CreateCar } from "./CreateCar";
import { RaceFunctionality } from "./RaceFunctionality";
import styles from "./styles.module.css";
import { UpdateCar } from "./UpdateCar";

type MainOptionsPropsType = {
  createCarHandler: (name: string, color: string) => void;
  updateCar: (name: string, color: string) => void;
  setIsAnimationStarted: (isStarted: boolean) => void;
};
export const MainOptions: React.FC<MainOptionsPropsType> = ({
  createCarHandler,
  updateCar,
  setIsAnimationStarted,
}) => {
  return (
    <div className={styles.main_options}>
      <CreateCar createCarHandler={createCarHandler} />
      <UpdateCar updateCar={updateCar} />
      <RaceFunctionality setIsAnimationStarted={setIsAnimationStarted} />
    </div>
  );
};
