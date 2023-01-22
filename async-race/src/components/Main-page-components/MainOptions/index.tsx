import React from "react";
import { CreateCar } from "./CreateCar";
import { RaceFunctionality } from "./RaceFunctionality";
import styles from "./styles.module.css";
import { UpdateCar } from "./UpdateCar";

type MainOptionsPropsType = {
  createCarHandler: (name:string, color:string)=> void
};
export const MainOptions: React.FC<MainOptionsPropsType> = ({createCarHandler}) => {
  return (
    <div className={styles.main_options}>
      <CreateCar createCarHandler={createCarHandler}/>
      <UpdateCar />
      <RaceFunctionality />
    </div>
  );
};
